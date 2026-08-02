import React, { useCallback, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { STAGES, getTotalSentences } from '../src/data/modules';
import { getAllProgress, resetModuleProgress } from '../src/db/database';
import { getProfile, saveProfile, getLevels, getStageLabel, LANGUAGES, LANGUAGE_GROUPS } from '../src/storage';
import { getModulesForLang } from '../src/data/modules';
import { exportBackup, importBackup } from '../src/utils/backup';
import { C } from '../src/theme';
import TabBar from '../src/components/TabBar';

const STAGE_THRESHOLDS = ['Fundamentos', 'Básico', 'Intermediário', 'Avançado', 'Variados'];

const LEVEL_FROM_STAGE = {
  'Fundamentos': 'Iniciante',
  'Básico': 'Básico',
  'Intermediário': 'Intermediário',
  'Avançado': 'Avançado',
  'Variados': 'Fluente',
};

function computeLevel(progressMap, langMods) {
  let level = 'Iniciante';
  let currentStage = 'Fundamentos';
  for (const stage of STAGE_THRESHOLDS) {
    const stageMods = langMods.filter(m => m.stage === stage);
    const total = stageMods.reduce((s, m) => s + getTotalSentences(m), 0);
    const done = stageMods.reduce((s, m) => s + (progressMap[m.id] ?? 0), 0);
    if (total === 0) continue;
    const pct = done / total;
    if (pct > 0.1) {
      level = LEVEL_FROM_STAGE[stage];
      currentStage = stage;
    }
    if (pct < 1.0) break;
  }
  return { level, currentStage };
}

function getISOWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

const LEVEL_LABELS_MAP = { iniciante: 'Iniciante', basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };

function PlacementCard({ profile, activeLangId, langLabel, router }) {
  const history = (profile?.placementHistory ?? [])
    .filter(h => h.lang === activeLangId)
    .sort((a, b) => b.week.localeCompare(a.week));
  const latest = history[0];
  const thisWeek = getISOWeekKey();
  const canRetake = !latest || latest.week !== thisWeek;

  return (
    <View style={pStyles.card}>
      {latest ? (
        <>
          <View style={pStyles.row}>
            <View>
              <Text style={pStyles.cardLabel}>ÚLTIMO TESTE</Text>
              <Text style={pStyles.cardLevel}>{LEVEL_LABELS_MAP[latest.level] ?? latest.level}</Text>
            </View>
            <Text style={pStyles.cardScore}>{latest.score}/20</Text>
          </View>
          {history.length > 1 && (
            <View style={pStyles.historyRow}>
              {history.slice(0, 4).reverse().map((h, i) => (
                <View key={i} style={pStyles.histDot}>
                  <View style={[pStyles.histBar, { height: `${(h.score / 20) * 48}%` }]} />
                  <Text style={pStyles.histScore}>{h.score}</Text>
                </View>
              ))}
              <Text style={pStyles.histLabel}>evolução</Text>
            </View>
          )}
        </>
      ) : (
        <Text style={pStyles.noTest}>Você ainda não fez o teste de nivelamento.</Text>
      )}
      {canRetake ? (
        <TouchableOpacity style={pStyles.testBtn}
          onPress={() => router.push(`/placement?lang=${activeLangId}&fromProfile=1`)}>
          <Text style={pStyles.testBtnText}>{latest ? 'Refazer teste esta semana →' : 'Fazer teste de nivelamento →'}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={pStyles.nextWeek}>Próximo teste disponível na semana que vem.</Text>
      )}
    </View>
  );
}

const pStyles = StyleSheet.create({
  card: { backgroundColor: C.bgAlt, borderRadius: 10, padding: 16, borderWidth: 1, borderColor: C.border, marginBottom: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 },
  cardLabel: { fontSize: 9, color: C.textMuted, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  cardLevel: { fontSize: 20, fontWeight: '700', color: C.accent },
  cardScore: { fontSize: 32, fontWeight: '700', color: C.accent },
  historyRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 6, marginBottom: 10, height: 56 },
  histDot: { alignItems: 'center', width: 32 },
  histBar: { width: 20, backgroundColor: C.accentLight, borderWidth: 1, borderColor: C.accent, borderRadius: 3, minHeight: 4 },
  histScore: { fontSize: 10, color: C.textMuted, marginTop: 2 },
  histLabel: { fontSize: 10, color: C.textMuted, alignSelf: 'flex-end', marginLeft: 4 },
  noTest: { fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 10 },
  testBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  testBtnText: { fontSize: 14, fontWeight: '700', color: '#fff' },
  nextWeek: { fontSize: 12, color: C.textMuted, fontStyle: 'italic', textAlign: 'center' },
});

export default function ProfileScreen() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [profile, setProfile] = useState(null);
  const [progressMap, setProgressMap] = useState({});
  const [stageStats, setStageStats] = useState([]);

  useFocusEffect(useCallback(() => {
    load();
  }, []));

  async function load() {
    try {
    let p = await getProfile();
    setProfile(p);
    const rows = await getAllProgress(db);
    const map = {};
    rows.forEach(r => { map[r.module_id] = r.cnt; });
    setProgressMap(map);
    // Auto-upgrade level if progress ahead of stored level
    const langMods = getModulesForLang(p?.language ?? 'es');
    const { level: computedLabel } = computeLevel(map, langMods);
    const labelToId = { 'Iniciante': 'iniciante', 'Básico': 'basico', 'Intermediário': 'intermediario', 'Avançado': 'avancado', 'Fluente': 'avancado' };
    const levelOrder = ['iniciante', 'basico', 'intermediario', 'avancado'];
    const earnedId = labelToId[computedLabel] ?? 'iniciante';
    const storedId = p?.level ?? 'iniciante';
    if (levelOrder.indexOf(earnedId) > levelOrder.indexOf(storedId)) {
      const upgraded = { ...p, level: earnedId };
      await saveProfile(upgraded);
      setProfile(upgraded);
    }
    const stats = STAGES.map(stage => {
      const stageMods = langMods.filter(m => m.stage === stage);
      const total = stageMods.reduce((s, m) => s + getTotalSentences(m), 0);
      const done = stageMods.reduce((s, m) => s + (map[m.id] ?? 0), 0);
      return { stage, total, done, pct: total > 0 ? done / total : 0, mods: stageMods.length };
    }).filter(s => s.mods > 0);
    setStageStats(stats);
    } catch (e) { console.warn('profile load error:', e); }
  }

  const activeLangId = profile?.language ?? 'es';
  const activeLangInfo = LANGUAGES.find(l => l.id === activeLangId);
  const activeLangLabel = activeLangInfo?.label ?? 'Espanhol';
  const activeLangMods = getModulesForLang(activeLangId);

  const uiGroup = activeLangInfo?.group ?? 'pt';
  const { level: computedLevel, currentStage } = computeLevel(progressMap, activeLangMods);
  const storedLevelLabel = getLevels(uiGroup).find(l => l.id === profile?.level)?.label ?? computedLevel;
  const level = storedLevelLabel;
  const totalAll = activeLangMods.reduce((s, m) => s + getTotalSentences(m), 0);
  const doneAll = activeLangMods.reduce((s, m) => s + (progressMap[m.id] ?? 0), 0);
  const globalPct = totalAll > 0 ? doneAll / totalAll : 0;

  function confirmReset() {
    Alert.alert(
      'Reiniciar progresso?',
      'Todo o progresso da trilha será apagado. Esta ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Reiniciar', style: 'destructive', onPress: async () => {
            for (const mod of activeLangMods) {
              await resetModuleProgress(db, mod.id);
            }
            // Remove idioma de usedLanguages para que o placement offer reapareça
            const p = await getProfile();
            if (p) {
              const used = (p.usedLanguages ?? []).filter(l => l !== activeLangId);
              await saveProfile({ ...p, usedLanguages: used });
            }
            await load();
          }
        },
      ]
    );
  }

  async function changeLevel(newLevel) {
    const levelMap = { 'Iniciante': 'iniciante', 'Básico': 'basico', 'Intermediário': 'intermediario', 'Avançado': 'avancado' };
    await saveProfile({ ...profile, level: levelMap[newLevel] ?? 'iniciante' });
    await load();
  }

  const levelColors = {
    'Iniciante': '#7A7670',
    'Básico': '#1B4F72',
    'Intermediário': '#1B6F72',
    'Avançado': '#1A7A4A',
    'Fluente': '#5B2C9C',
  };
  const levelColor = levelColors[level] ?? C.accent;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Language card */}
        <View style={styles.langCard}>
          <Text style={styles.langCardLabel}>IDIOMA EM APRENDIZADO</Text>
          <Text style={styles.langCardLang}>
            {activeLangInfo?.group === 'ar'
              ? `عربي → Português`
              : activeLangInfo?.reverseMode
                ? `English → Português`
                : `Português → ${activeLangLabel}`}
          </Text>
        </View>

        {/* Level card */}
        <View style={[styles.levelCard, { borderLeftColor: levelColor }]}>
          <View style={styles.levelCardTop}>
            <View>
              <Text style={styles.levelCardLabel}>SEU NÍVEL ATUAL</Text>
              <Text style={[styles.levelCardValue, { color: levelColor }]}>{level}</Text>
            </View>
            <View style={styles.levelCardRight}>
              <Text style={styles.levelCardStage}>Etapa ativa</Text>
              <Text style={styles.levelCardStageName}>{currentStage}</Text>
            </View>
          </View>
          {(profile?.weekStreak ?? 0) > 0 && (
            <View style={styles.streakRow}>
              <Text style={styles.streakLabel}>🔥 Semanas consecutivas</Text>
              <Text style={styles.streakValue}>{profile.weekStreak}</Text>
            </View>
          )}
          <Text style={styles.levelCardNote}>
            Nível calculado com base no progresso. Sequência conta semanas em que abriste o app.
          </Text>
        </View>

        {/* Global progress */}
        <View style={styles.globalBox}>
          <View style={styles.globalRow}>
            <Text style={styles.globalLabel}>Progresso total</Text>
            <Text style={styles.globalPct}>{Math.round(globalPct * 100)}%</Text>
          </View>
          <View style={styles.globalBar}>
            <View style={[styles.globalFill, { width: `${globalPct * 100}%` }]} />
          </View>
          <Text style={styles.globalSub}>{doneAll} de {totalAll} frases concluídas</Text>
        </View>

        {/* Per-stage breakdown */}
        <Text style={styles.sectionTitle}>Progresso por etapa</Text>
        {stageStats.map(({ stage, total, done, pct, mods }) => (
          <View key={stage} style={styles.stageRow}>
            <View style={styles.stageRowLeft}>
              <Text style={styles.stageRowName}>{getStageLabel(stage, uiGroup)}</Text>
              <Text style={styles.stageRowMeta}>{mods} módulos · {total} frases</Text>
            </View>
            <View style={styles.stageRowRight}>
              <View style={styles.stageBar}>
                <View style={[styles.stageFill, { width: `${pct * 100}%`, backgroundColor: pct === 1 ? C.correct : C.accent }]} />
              </View>
              <Text style={[styles.stageRowPct, pct === 1 && { color: C.correct }]}>
                {pct === 1 ? '✓' : `${Math.round(pct * 100)}%`}
              </Text>
            </View>
          </View>
        ))}

        {/* Actions */}
        <Text style={styles.sectionTitle}>Nivelamento</Text>
        <PlacementCard profile={profile} activeLangId={activeLangId} langLabel={activeLangLabel} router={router} />

        <Text style={styles.sectionTitle}>Backup</Text>
        <View style={styles.backupCard}>
          <Text style={styles.backupDesc}>
            Salve seu progresso num arquivo (iCloud, Google Drive, etc.) e restaure ao trocar de celular.
          </Text>
          <View style={styles.backupBtnRow}>
            <TouchableOpacity style={styles.backupBtn} onPress={async () => {
              try {
                await exportBackup(db);
              } catch (e) {
                Alert.alert('Erro', 'Não foi possível exportar o backup.');
              }
            }}>
              <Text style={styles.backupBtnText}>Exportar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backupBtnOutline} onPress={async () => {
              try {
                const res = await importBackup(db);
                if (res.imported) {
                  Alert.alert('Backup restaurado ✓', 'Seu progresso foi importado com sucesso.');
                  await load();
                }
              } catch (e) {
                Alert.alert('Erro', e.message ?? 'Arquivo inválido.');
              }
            }}>
              <Text style={styles.backupBtnOutlineText}>Importar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Configurações</Text>
        <TouchableOpacity style={styles.dangerBtn} onPress={confirmReset}>
          <Text style={styles.dangerBtnText}>Reiniciar progresso da trilha</Text>
        </TouchableOpacity>

        <View style={{ height: 48 }} />
      </ScrollView>
      <TabBar active="profile" lang={activeLangId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  backBtn: { paddingVertical: 4, paddingRight: 12, minWidth: 64 },
  backBtnText: { fontSize: 14, color: C.accent },
  headerTitle: { fontSize: 17, fontWeight: '700', color: C.text },
  scroll: { padding: 20 },

  langCard: {
    backgroundColor: C.bgAlt, borderRadius: 10, padding: 16,
    borderWidth: 1, borderColor: C.border, marginBottom: 14,
  },
  langCardLabel: { fontSize: 9, color: C.textMuted, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  langCardLang: { fontSize: 18, fontWeight: '700', color: C.text },

  levelCard: {
    backgroundColor: C.bgAlt, borderRadius: 10, padding: 16,
    borderWidth: 1, borderColor: C.border, borderLeftWidth: 5,
    marginBottom: 14,
  },
  levelCardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 },
  levelCardLabel: { fontSize: 9, color: C.textMuted, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  levelCardValue: { fontSize: 28, fontWeight: '700' },
  levelCardRight: { alignItems: 'flex-end' },
  levelCardStage: { fontSize: 10, color: C.textMuted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 },
  levelCardStageName: { fontSize: 14, fontWeight: '700', color: C.text },
  levelCardNote: { fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 8 },
  streakRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF3CD', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, marginTop: 10 },
  streakLabel: { fontSize: 13, color: '#7A5900' },
  streakValue: { fontSize: 20, fontWeight: '700', color: '#7A5900' },

  globalBox: {
    backgroundColor: C.bgAlt, borderRadius: 10, padding: 16,
    borderWidth: 1, borderColor: C.border, marginBottom: 24,
  },
  globalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  globalLabel: { fontSize: 14, fontWeight: '600', color: C.text },
  globalPct: { fontSize: 14, fontWeight: '700', color: C.accent },
  globalBar: { height: 6, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden', marginBottom: 6 },
  globalFill: { height: 6, backgroundColor: C.accent, borderRadius: 3 },
  globalSub: { fontSize: 11, color: C.textMuted },

  sectionTitle: {
    fontSize: 10, fontWeight: '700', color: C.accent,
    letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 10,
  },

  stageRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.border, gap: 12,
  },
  stageRowLeft: { flex: 1 },
  stageRowName: { fontSize: 15, fontWeight: '700', color: C.text },
  stageRowMeta: { fontSize: 11, color: C.textMuted, marginTop: 2 },
  stageRowRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  stageBar: { width: 80, height: 4, backgroundColor: C.border, borderRadius: 2, overflow: 'hidden' },
  stageFill: { height: 4, borderRadius: 2 },
  stageRowPct: { fontSize: 12, color: C.accent, minWidth: 26, textAlign: 'right' },

  backupCard: {
    backgroundColor: C.bgAlt, borderRadius: 10, padding: 16,
    borderWidth: 1, borderColor: C.border, marginBottom: 24,
  },
  backupDesc: { fontSize: 12, color: C.textMuted, lineHeight: 18, marginBottom: 12 },
  backupBtnRow: { flexDirection: 'row', gap: 10 },
  backupBtn: {
    flex: 1, backgroundColor: C.accent, borderRadius: 8,
    paddingVertical: 12, alignItems: 'center',
  },
  backupBtnText: { fontSize: 14, fontWeight: '700', color: '#fff' },
  backupBtnOutline: {
    flex: 1, borderWidth: 1, borderColor: C.accent, borderRadius: 8,
    paddingVertical: 12, alignItems: 'center',
  },
  backupBtnOutlineText: { fontSize: 14, fontWeight: '700', color: C.accent },
  dangerBtn: {
    marginTop: 8, borderWidth: 1, borderColor: C.incorrect, borderRadius: 8,
    paddingVertical: 14, alignItems: 'center',
  },
  dangerBtnText: { fontSize: 14, color: C.incorrect, fontWeight: '600' },
});
