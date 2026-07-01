import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Pressable,
  StyleSheet, Modal, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { getModulesForLang, STAGES, getTotalSentences } from '../src/data/modules';
import { getAllProgress, getReviewCount } from '../src/db/database';
import { refreshStreakReminder } from '../src/notifications';
import { getProfile, saveProfile, updateWeekStreak, LANGUAGES, getOrderedLanguageGroups, getLevels, getStageLabel, getStageDesc } from '../src/storage';
import { C } from '../src/theme';
import Poly from '../src/components/Poly';

const LEVEL_ORDER = ['iniciante', 'basico', 'intermediario', 'avancado'];
const STAGE_LEVEL_MAP = [
  { stage: 'Fundamentos', levelId: 'iniciante' },
  { stage: 'Básico', levelId: 'basico' },
  { stage: 'Intermediário', levelId: 'intermediario' },
  { stage: 'Avançado', levelId: 'avancado' },
];

function computeLevelFromProgress(progressMap, langModules) {
  let earned = 'iniciante';
  for (const { stage, levelId } of STAGE_LEVEL_MAP) {
    const stageMods = langModules.filter(m => m.stage === stage);
    const total = stageMods.reduce((s, m) => s + getTotalSentences(m), 0);
    const done = stageMods.reduce((s, m) => s + (progressMap[m.id] ?? 0), 0);
    if (total === 0) continue;
    if (done / total > 0.1) earned = levelId;
    else break;
  }
  return earned;
}

export default function HomeScreen() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [profile, setProfile] = useState(null);
  const [progressMap, setProgressMap] = useState({});
  const [langModal, setLangModal] = useState(false);
  const [placementOffer, setPlacementOffer] = useState(false);
  const [openStage, setOpenStage] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewDismissed, setReviewDismissed] = useState(false);
  const scrollRef = useRef(null);
  const variadosY = useRef(0);

  const LEVEL_TO_STAGE = { iniciante: 'Fundamentos', basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };

  useFocusEffect(useCallback(() => {
    init();
  }, []));

  async function init() {
    try {
      const p = await getProfile();
      if (!p || !p.seenWelcome) { router.replace('/welcome'); return; }
      if (!p.language) { router.replace('/onboarding'); return; }
      const rows = await getAllProgress(db);
      const map = {};
      rows.forEach(r => { map[r.module_id] = r.cnt; });
      setProgressMap(map);

      // Auto-upgrade level if progress is ahead of stored level
      const langMods = getModulesForLang(p.language ?? 'es');
      const earned = computeLevelFromProgress(map, langMods);
      const stored = p.level ?? 'iniciante';
      let activeProfile = p;
      if (LEVEL_ORDER.indexOf(earned) > LEVEL_ORDER.indexOf(stored)) {
        const updated = { ...p, level: earned };
        await saveProfile(updated);
        activeProfile = updated;
      }
      const withStreak = await updateWeekStreak(activeProfile);
      setProfile(withStreak);
      const cnt = await getReviewCount(db).catch(() => 0);
      setReviewCount(cnt);
      setReviewDismissed(false);
      refreshStreakReminder(withStreak.lastPracticeDate).catch(() => {});
      const allLangMods = getModulesForLang(withStreak.language ?? 'es');
      const firstStage = STAGES.find(s => allLangMods.some(m => m.stage === s));
      setOpenStage(prev => prev ?? (LEVEL_TO_STAGE[withStreak.level] ?? firstStage ?? 'Fundamentos'));

      // Detect first time using this language — offer placement test
      // (skip if the user told us they've never studied this language at all)
      const lang = withStreak.language ?? 'es';
      const used = withStreak.usedLanguages ?? [];
      if (!used.includes(lang)) {
        const updatedUsed = { ...withStreak, usedLanguages: [...used, lang] };
        await saveProfile(updatedUsed);
        setProfile(updatedUsed);
        if (withStreak.level !== 'iniciante') setPlacementOffer(true);
      }
    } catch (e) {
      console.warn('init error:', e);
    }
  }

  const activeLang = profile?.language ?? 'es';
  const langModules = getModulesForLang(activeLang);
  const activeLangInfo = LANGUAGES.find(l => l.id === activeLang);
  const modulesByStage = {};
  for (const stage of STAGES) {
    modulesByStage[stage] = langModules.filter(m => m.stage === stage);
  }

  const uiGroup = activeLangInfo?.group ?? 'pt';
  const levelLabel = getLevels(uiGroup).find(l => l.id === profile?.level)?.label ?? '';

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <View style={styles.topBar}>
        {/* Linha 1: marca + streak/nível */}
        <View style={styles.topRow1}>
          <View style={styles.appTitleRow}>
            <Poly size={26} mood="happy" />
            <Text style={styles.appTitle}>PolySpeaker</Text>
          </View>
          <TouchableOpacity style={styles.profilePill} onPress={() => router.push('/profile')} activeOpacity={0.75}>
            {(profile?.weekStreak ?? 0) > 0 && (
              <Text style={styles.streakPillText}>{profile.weekStreak}🔥</Text>
            )}
            {levelLabel ? <Text style={styles.levelPillText}>{levelLabel}</Text> : null}
            <Text style={styles.pillChevron}>›</Text>
          </TouchableOpacity>
        </View>
        {/* Linha 2: trilha ativa + teoria */}
        <View style={styles.topRow2}>
          <TouchableOpacity onPress={() => setLangModal(true)} activeOpacity={0.7} style={styles.langPairBtn}>
            <Text style={styles.langPair}>{
              !activeLangInfo?.reverseMode
                ? `Português → ${activeLangInfo?.label ?? 'Espanhol'}`
                : activeLangInfo?.group === 'ar'
                  ? 'عربي → Português'
                  : 'English → Português'
            }</Text>
            <Text style={styles.langPairChevron}> ▾</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.theoryGeneralBtn} onPress={() => router.push(`/theory/geral?lang=${activeLang}`)}>
            <Text style={styles.theoryGeneralText}>Teoria</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView ref={scrollRef} contentContainerStyle={styles.scroll}>
        {/* SRS review banner */}
        {reviewCount > 0 && !reviewDismissed && (
          <View style={styles.reviewBanner}>
            <View style={styles.reviewBannerLeft}>
              <Text style={styles.reviewBannerTitle}>📚 {reviewCount} frase{reviewCount > 1 ? 's' : ''} para revisar</Text>
              <Text style={styles.reviewBannerSub}>Revisão espaçada — fixe o que você errou</Text>
            </View>
            <View style={styles.reviewBannerActions}>
              <TouchableOpacity style={styles.reviewBannerBtn} onPress={() => router.push('/review')}>
                <Text style={styles.reviewBannerBtnText}>Revisar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setReviewDismissed(true)} hitSlop={{top:10,bottom:10,left:10,right:10}}>
                <Text style={styles.reviewBannerDismiss}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {STAGES.map(stage => {
          const stageMods = modulesByStage[stage];
          if (!stageMods?.length) return null;
          const stageTotal = stageMods.reduce((s, m) => s + getTotalSentences(m), 0);
          const stageDone = stageMods.reduce((s, m) => s + (progressMap[m.id] ?? 0), 0);
          const stagePct = stageTotal > 0 ? stageDone / stageTotal : 0;
          const isVariados = stage === 'Variados';
          const isOpen = isVariados || openStage === stage;
          return (
            <View key={stage} style={styles.stageSection}
              onLayout={isVariados ? e => { variadosY.current = e.nativeEvent.layout.y; } : undefined}>
              <TouchableOpacity
                activeOpacity={isVariados ? 1 : 0.7}
                onPress={isVariados ? undefined : () => setOpenStage(s => s === stage ? null : stage)}
                style={styles.stageHeader}>
                <View style={{ flex: 1 }}>
                  <View style={styles.stageTitleRow}>
                    <Text style={styles.stageTitle}>{getStageLabel(stage, uiGroup)}</Text>
                    {stageTotal > 0 && stagePct >= 1 && (
                      <View style={styles.stageDoneBadge}>
                        <Text style={styles.stageDoneBadgeText}>✓</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.stageDesc}>{getStageDesc(stage, uiGroup)}</Text>
                </View>
                <View style={styles.stageRight}>
                  {stageTotal > 0 && (
                    <Text style={styles.stagePct}>{stagePct >= 1 ? 'Completo' : `${Math.round(stagePct * 100)}%`}</Text>
                  )}
                  {!isVariados && (
                    <TouchableOpacity
                      style={styles.theoryTagBtn}
                      onPress={() => router.push(`/theory/${encodeURIComponent(stage)}?lang=${activeLang}`)}>
                      <Text style={styles.theoryTagText}>Teoria</Text>
                    </TouchableOpacity>
                  )}
                  {!isVariados && (
                    <Text style={[styles.stageChevron, { transform: [{ rotate: isOpen ? '-90deg' : '90deg' }] }]}>›</Text>
                  )}
                </View>
              </TouchableOpacity>
              {isOpen && <View style={styles.stageDivider} />}
              {isOpen && (() => {
                const nonReviewMods = stageMods.filter(m => !m.isReview && getTotalSentences(m) > 0);
                const allNonReviewDone = nonReviewMods.length > 0 && nonReviewMods.every(m => {
                  const t = getTotalSentences(m);
                  return (progressMap[m.id] ?? 0) >= t;
                });
                return stageMods.map((mod, i) => {
                const total = getTotalSentences(mod);
                const done = progressMap[mod.id] ?? 0;
                const pct = total > 0 ? done / total : 0;
                const isComplete = total > 0 && done >= total;
                const isEmpty = total === 0;
                const isLocked = mod.isReview && !allNonReviewDone;
                return (
                  <TouchableOpacity
                    key={mod.id}
                    style={[styles.moduleRow, mod.isReview && styles.moduleRowReview, isLocked && styles.moduleRowLocked]}
                    onPress={() => !isEmpty && !isLocked && router.push(`/exercise/${mod.id}`)}
                    disabled={isEmpty || isLocked}
                    activeOpacity={isEmpty || isLocked ? 1 : 0.7}>
                    {!mod.isReview && (
                      <View style={[styles.moduleNum, isComplete && styles.moduleNumDone]}>
                        {isComplete
                          ? <Text style={styles.moduleNumCheck}>✓</Text>
                          : <Text style={styles.moduleNumText}>{i + 1}</Text>}
                      </View>
                    )}
                    <View style={styles.moduleInfo}>
                      <View style={styles.moduleTitleRow}>
                        <Text style={[styles.moduleTitle, isEmpty && styles.moduleTitleMuted]} numberOfLines={2}>
                          {mod.title}
                        </Text>
                        {isEmpty && (
                          <View style={styles.soonBadge}>
                            <Text style={styles.soonBadgeText}>Em breve</Text>
                          </View>
                        )}
                        {mod.isReview && (
                          <View style={styles.reviewBadge}>
                            <Text style={styles.reviewBadgeText}>{isLocked ? '🔒 Revisão' : 'Revisão'}</Text>
                          </View>
                        )}
                      </View>
                      {isLocked ? (
                        <Text style={styles.moduleLockedText}>Complete os módulos da etapa para desbloquear</Text>
                      ) : mod.subtitle ? (
                        <Text style={styles.moduleSub}>{mod.subtitle}</Text>
                      ) : null}
                      {!isEmpty && !isLocked && (
                        <View style={styles.progRow}>
                          <View style={styles.progBar}>
                            <View style={[
                              styles.progFill,
                              { width: `${pct * 100}%` },
                              isComplete && styles.progFillDone,
                              pct > 0 && !isComplete && styles.progFillActive,
                            ]} />
                          </View>
                          <Text style={[styles.progText, isComplete && styles.progTextDone]}>
                            {isComplete ? 'Concluído ✓' : done > 0 ? `${done}/${total}` : `${total} fr.`}
                          </Text>
                        </View>
                      )}
                    </View>
                    {isComplete && (
                      <Text style={styles.medalEmoji}>{mod.isReview ? '🏅' : '⭐'}</Text>
                    )}
                    {!isEmpty && !isComplete && !isLocked && (
                      <Text style={styles.chevron}>›</Text>
                    )}
                  </TouchableOpacity>
                );
              });
              })()}
              {stage === 'Variados' && (
                <TouchableOpacity style={styles.dialogosCard} onPress={() => router.push(`/dialogos?lang=${activeLang}`)} activeOpacity={0.7}>
                  <View style={styles.dialogosCardLeft}>
                    <Text style={styles.dialogosCardTitle}>Diálogos Reais</Text>
                    <Text style={styles.dialogosCardSub}>Conversas autênticas — do básico ao fluente</Text>
                  </View>
                  <Text style={styles.chevron}>›</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
        <View style={{ height: 48 }} />
      </ScrollView>

      {/* First-time placement offer */}
      <Modal visible={placementOffer} transparent animationType="fade" onRequestClose={() => setPlacementOffer(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.offerModal}>
            <Text style={styles.offerTitle}>Bem-vindo ao {activeLangInfo?.label ?? 'idioma'}!</Text>
            <Text style={styles.offerBody}>
              Quer fazer um teste rápido de 20 perguntas para descobrir o seu nível real e começar no lugar certo?
            </Text>
            <TouchableOpacity style={styles.offerBtnPrimary} onPress={() => {
              setPlacementOffer(false);
              router.push(`/placement?lang=${activeLang}`);
            }}>
              <Text style={styles.offerBtnPrimaryText}>Fazer teste de nivelamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.offerBtnSkip} onPress={() => setPlacementOffer(false)}>
              <Text style={styles.offerBtnSkipText}>Ignorar e iniciar jornada</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Language selector modal */}
      <Modal visible={langModal} transparent animationType="fade" onRequestClose={() => setLangModal(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setLangModal(false)}>
          <Pressable style={styles.langModal} onPress={() => {}}>
            <Text style={styles.langModalTitle}>Idioma de aprendizado</Text>
            {getOrderedLanguageGroups().map(group => {
              const groupLangs = LANGUAGES.filter(l => l.group === group.id);
              return (
                <View key={group.id}>
                  <Text style={styles.langGroupHeader}>{group.label}</Text>
                  <Text style={styles.langGroupSub}>{group.sublabel}</Text>
                  {groupLangs.map(lang => (
                    <TouchableOpacity
                      key={lang.id}
                      style={[styles.langOption, lang.id === activeLang && styles.langOptionActive, !lang.available && styles.langOptionDisabled]}
                      activeOpacity={lang.available ? 0.7 : 1}
                      onPress={lang.available ? async () => {
                        if (lang.id === activeLang) { setLangModal(false); return; }
                        const freshProfile = await getProfile();
                        const updated = { ...(freshProfile ?? {}), language: lang.id };
                        await saveProfile(updated);
                        setLangModal(false);
                        setOpenStage(null);
                        init();
                      } : undefined}>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.langOptionLabel, !lang.available && styles.langOptionLabelMuted]}>
                          {lang.label}
                        </Text>
                      </View>
                      {lang.id === activeLang && <Text style={styles.langOptionCheck}>✓</Text>}
                      {!lang.available && (
                        <View style={styles.soonBadge}><Text style={styles.soonBadgeText}>Em breve</Text></View>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  reviewBanner: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#FFF8EC', borderWidth: 1, borderColor: '#E6C97A',
    borderRadius: 10, padding: 14, marginHorizontal: 20, marginTop: 16, marginBottom: 4,
  },
  reviewBannerLeft: { flex: 1, marginRight: 12 },
  reviewBannerTitle: { fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: '#5C3D00' },
  reviewBannerSub: { fontFamily: 'serif', fontSize: 11, color: '#7A5800', marginTop: 2 },
  reviewBannerActions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  reviewBannerBtn: {
    backgroundColor: '#8B6F47', borderRadius: 6, paddingHorizontal: 14, paddingVertical: 7,
  },
  reviewBannerBtnText: { fontFamily: 'serif', fontSize: 13, fontWeight: '700', color: '#fff' },
  reviewBannerDismiss: { fontFamily: 'serif', fontSize: 16, color: '#7A5800', paddingLeft: 4 },
  topBar: {
    paddingTop: 14, paddingBottom: 12, paddingHorizontal: 20,
    borderBottomWidth: 1, borderBottomColor: C.border,
    backgroundColor: C.bg,
  },
  topRow1: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: 10,
  },
  topRow2: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  appTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  appTitle: { fontFamily: 'serif', fontSize: 18, fontWeight: '700', color: C.brand, letterSpacing: 0.5 },
  profilePill: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border,
    borderRadius: 20, paddingVertical: 5, paddingHorizontal: 12,
  },
  streakPillText: { fontFamily: 'serif', fontSize: 12, color: '#7A5900' },
  levelPillText: {
    fontFamily: 'serif', fontSize: 12, fontWeight: '700', color: C.accent,
    backgroundColor: C.accentLight, paddingVertical: 2, paddingHorizontal: 8,
    borderRadius: 10, overflow: 'hidden',
  },
  pillChevron: { fontSize: 14, color: C.textMuted, marginLeft: 2 },
  langPairBtn: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 8 },
  langPair: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: C.accent },
  langPairChevron: { fontFamily: 'serif', fontSize: 13, color: C.accent },
  theoryGeneralBtn: {
    paddingVertical: 6, paddingHorizontal: 12,
    borderWidth: 1, borderColor: C.accent, borderRadius: 6,
  },
  theoryGeneralText: { fontFamily: 'serif', fontSize: 12, color: C.accent, fontWeight: '700' },
  dialogosBtn: {
    paddingVertical: 6, paddingHorizontal: 12,
    backgroundColor: C.accent, borderRadius: 6,
  },
  dialogosBtnText: { fontFamily: 'serif', fontSize: 12, color: '#fff', fontWeight: '700' },
  dialogosCard: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: C.accentLight, borderWidth: 1, borderColor: C.accent,
    borderRadius: 8, paddingHorizontal: 14, paddingVertical: 14, marginTop: 4,
  },
  dialogosCardLeft: { flex: 1 },
  dialogosCardTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  dialogosCardSub: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 3 },
  placementBtn: {
    paddingVertical: 6, paddingHorizontal: 10,
    borderWidth: 1, borderColor: '#C8A800', borderRadius: 6, backgroundColor: '#FFFBEA',
  },
  placementBtnText: { fontFamily: 'serif', fontSize: 12, fontWeight: '700', color: '#7A5900' },
  streakBadge: {
    paddingVertical: 4, paddingHorizontal: 10, borderRadius: 6,
    backgroundColor: '#FFF3CD', borderWidth: 1, borderColor: '#E8C44A',
  },
  streakText: { fontFamily: 'serif', fontSize: 12, fontWeight: '700', color: '#7A5900' },
  offerModal: {
    margin: 28, backgroundColor: C.bg, borderRadius: 14,
    padding: 28, borderWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 20, elevation: 8,
  },
  offerTitle: { fontFamily: 'serif', fontSize: 20, fontWeight: '700', color: C.text, marginBottom: 12 },
  offerBody: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, lineHeight: 22, marginBottom: 24 },
  offerBtnPrimary: {
    backgroundColor: C.accent, borderRadius: 8,
    paddingVertical: 14, alignItems: 'center', marginBottom: 12,
  },
  offerBtnPrimaryText: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: '#fff', textAlign: 'center' },
  offerBtnSkip: { paddingVertical: 10, alignItems: 'center' },
  offerBtnSkipText: { fontFamily: 'serif', fontSize: 14, color: C.textMuted },
  scroll: { paddingTop: 6 },
  stageSection: { paddingHorizontal: 22, paddingTop: 14, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: C.border },
  stageHeader: {
    flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8,
    backgroundColor: C.accent, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 12,
  },
  stageTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  stageTitle: { fontFamily: 'serif', fontSize: 11, fontWeight: '700', color: '#fff', letterSpacing: 2.5, textTransform: 'uppercase' },
  stageDoneBadge: {
    width: 16, height: 16, borderRadius: 8,
    backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  stageDoneBadgeText: { fontSize: 10, fontWeight: '700', color: C.accent },
  stageDesc: { fontFamily: 'serif', fontSize: 12, color: 'rgba(255,255,255,0.78)', marginTop: 3, fontStyle: 'italic' },
  stageRight: { alignItems: 'flex-end', gap: 4 },
  stagePct: { fontFamily: 'serif', fontSize: 11, color: '#fff', fontWeight: '700' },
  stageChevron: { fontSize: 18, color: '#fff', fontWeight: '300', marginTop: 2 },
  theoryTagBtn: {
    paddingVertical: 3, paddingHorizontal: 8,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.6)', borderRadius: 10,
  },
  theoryTagText: { fontFamily: 'serif', fontSize: 10, color: '#fff', fontWeight: '700' },
  stageDivider: { height: 1, backgroundColor: C.border, marginBottom: 2 },
  moduleRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: C.border, gap: 12,
  },
  moduleRowReview: { backgroundColor: C.bgAlt },
  moduleRowLocked: { opacity: 0.55 },
  moduleLockedText: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 2, marginBottom: 5 },
  reviewBadge: { paddingHorizontal: 7, paddingVertical: 2, borderWidth: 1, borderColor: C.accent, borderRadius: 10 },
  reviewBadgeText: { fontFamily: 'serif', fontSize: 10, color: C.accent, fontWeight: '700' },
  moduleNum: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: C.accentLight, alignItems: 'center', justifyContent: 'center',
  },
  moduleNumDone: { backgroundColor: C.correct },
  moduleNumText: { fontFamily: 'serif', fontSize: 12, fontWeight: '700', color: C.accent },
  moduleNumCheck: { fontSize: 14, color: '#fff', fontWeight: '700' },
  moduleInfo: { flex: 1 },
  moduleTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' },
  moduleTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text, flex: 1 },
  moduleTitleMuted: { color: C.textMuted },
  moduleSub: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 2, marginBottom: 5 },
  soonBadge: { paddingHorizontal: 7, paddingVertical: 2, borderWidth: 1, borderColor: C.border, borderRadius: 10 },
  soonBadgeText: { fontFamily: 'serif', fontSize: 10, color: C.textMuted },
  progRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  progBar: { flex: 1, height: 3, backgroundColor: C.border, borderRadius: 2, overflow: 'hidden' },
  progFill: { height: 3, backgroundColor: C.accent, borderRadius: 2 },
  progFillDone: { backgroundColor: C.correct },
  progFillActive: { backgroundColor: '#8B6F47' },
  progTextDone: { color: C.correct, fontWeight: '700' },
  medalEmoji: { fontSize: 20, marginLeft: 4 },
  progText: { fontFamily: 'serif', fontSize: 10, color: C.textMuted, minWidth: 55 },
  chevron: { fontSize: 22, color: C.border, marginRight: 2 },
  // Lang modal
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', padding: 28 },
  langModal: { backgroundColor: C.bg, borderRadius: 12, padding: 20, borderWidth: 1, borderColor: C.border },
  langModalTitle: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: C.text, marginBottom: 16 },
  langGroupHeader: { fontFamily: 'serif', fontSize: 11, fontWeight: '700', color: C.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: 12, marginBottom: 2 },
  langGroupSub: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, fontStyle: 'italic', marginBottom: 6 },
  langOption: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  langOptionActive: { backgroundColor: C.accentLight },
  langOptionDisabled: { opacity: 0.45 },
  langOptionLabel: { fontFamily: 'serif', fontSize: 16, color: C.text, fontWeight: '600' },
  langOptionLabelMuted: { color: C.textMuted, fontWeight: '400' },
  langOptionCheck: { fontSize: 18, color: C.accent, fontWeight: '700' },
});
