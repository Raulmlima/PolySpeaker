import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Pressable,
  StyleSheet, Modal, StatusBar, Animated, Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { getModulesForLang, STAGES, getTotalSentences } from '../src/data/modules';
import { getAllProgress, getReviewCount, getLastActiveModuleId } from '../src/db/database';
import { scheduleDailyReminder, computeDayStreak } from '../src/notifications';
import { getProfile, saveProfile, updateWeekStreak, LANGUAGES, getOrderedLanguageGroups, getLevels, getStageLabel, getStageDesc } from '../src/storage';
import { C, cardShadow } from '../src/theme';
import Poly from '../src/components/Poly';
import ProgressRing from '../src/components/ProgressRing';
import TabBar from '../src/components/TabBar';
import AdBanner from '../src/components/AdBanner';
import { initAds, prepareInterstitial } from '../src/utils/ads';

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
  const [lastActiveModuleId, setLastActiveModuleId] = useState(null);
  const scrollRef = useRef(null);
  const floatAnim = useRef(new Animated.Value(0)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    initAds().then(() => prepareInterstitial()).catch(() => {});
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: 1, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1600, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    ).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1, duration: 1100, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0, duration: 1100, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      ])
    ).start();
  }, []);

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
      getLastActiveModuleId(db).then(setLastActiveModuleId).catch(() => {});
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
      const cnt = await getReviewCount(db, withStreak.language ?? 'es').catch(() => 0);
      setReviewCount(cnt);
      const todayLocal = new Date();
      const todayKey = `${todayLocal.getFullYear()}-${String(todayLocal.getMonth() + 1).padStart(2, '0')}-${String(todayLocal.getDate()).padStart(2, '0')}`;
      scheduleDailyReminder({
        reviewCount: cnt,
        dayStreak: computeDayStreak(withStreak),
        practicedToday: withStreak.lastPracticeDate === todayKey,
      }).catch(() => {});
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

  // Daily streak drives Poly's mood on the hero card
  const dayStreak = computeDayStreak(profile);
  const now = new Date();
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const practicedToday = profile?.lastPracticeDate === todayKey;
  const polyMood = practicedToday ? 'happy' : dayStreak > 0 ? 'neutral' : 'sad';
  const heroMsg = practicedToday
    ? (dayStreak >= 3 ? `${dayStreak} dias seguidos — imparável!` : 'Prática de hoje feita. Orgulho!')
    : dayStreak > 0
      ? `Pratique hoje pra manter ${dayStreak} dia${dayStreak > 1 ? 's' : ''} de sequência`
      : 'Comece uma sequência hoje!';

  // "Continue" card — prefer the module the user most recently practiced
  // (even if it's not the first incomplete one in track order — e.g. they
  // jumped ahead), falling back to the first unfinished module in track
  // order only when nothing has been touched yet.
  let nextModule = null;
  let nextModuleStage = null;
  if (lastActiveModuleId) {
    for (const stage of STAGES) {
      const m = (modulesByStage[stage] ?? []).find(x => x.id === lastActiveModuleId);
      if (m && !m.isReview) {
        const total = getTotalSentences(m);
        if (total > 0 && (progressMap[m.id] ?? 0) < total) { nextModule = m; nextModuleStage = stage; }
        break;
      }
    }
  }
  if (!nextModule) {
    for (const stage of STAGES) {
      for (const m of modulesByStage[stage] ?? []) {
        if (m.isReview) continue;
        const total = getTotalSentences(m);
        if (total === 0) continue;
        if ((progressMap[m.id] ?? 0) < total) { nextModule = m; nextModuleStage = stage; break; }
      }
      if (nextModule) break;
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <View style={styles.topBar}>
        <View style={styles.topRow1}>
          <View style={styles.appTitleRow}>
            <Poly size={26} mood="happy" />
            <Text style={styles.appTitle}>PolySpeaker</Text>
          </View>
          {levelLabel ? (
            <View style={styles.levelPill}><Text style={styles.levelPillText}>{levelLabel}</Text></View>
          ) : null}
        </View>
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
        {/* Hero: Poly emocional + streak diário */}
        <View style={styles.heroCard}>
          <Animated.View style={{ transform: [{ translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -6] }) }] }}>
            <Poly size={64} mood={polyMood} />
          </Animated.View>
          <View style={styles.heroRight}>
            <View style={styles.heroStreakRow}>
              <Text style={styles.heroStreakNum}>{dayStreak}</Text>
              <Text style={styles.heroStreakFlame}>🔥</Text>
              <Text style={styles.heroStreakLabel}>dia{dayStreak === 1 ? '' : 's'}</Text>
            </View>
            <Text style={styles.heroMsg}>{heroMsg}</Text>
          </View>
        </View>

        {/* Continuar de onde parou */}
        {nextModule && (
          <TouchableOpacity style={styles.continueCard} activeOpacity={0.85}
            onPress={() => router.push(`/exercise/${nextModule.id}`)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.continueLabel}>CONTINUE DE ONDE PAROU</Text>
              <Text style={styles.continueTitle} numberOfLines={1}>{nextModule.title}</Text>
              <Text style={styles.continueStage}>{getStageLabel(nextModuleStage, uiGroup)}</Text>
            </View>
            <View style={styles.continueBtnWrap}>
              <Animated.View style={[styles.continueBtnGlow, {
                opacity: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.45, 0] }),
                transform: [{ scale: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.55] }) }],
              }]} />
              <View style={styles.continueBtn}>
                <Text style={styles.continueBtnText}>▶</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        {/* Trilha — etapas como marcos com módulos em linha vertical */}
        {STAGES.map(stage => {
          const stageMods = modulesByStage[stage];
          if (!stageMods?.length) return null;
          const stageTotal = stageMods.reduce((s, m) => s + getTotalSentences(m), 0);
          const stageDone = stageMods.reduce((s, m) => s + (progressMap[m.id] ?? 0), 0);
          const stagePct = stageTotal > 0 ? stageDone / stageTotal : 0;
          const isVariados = stage === 'Variados';
          const isOpen = isVariados || openStage === stage;

          // First unfinished non-review module of this stage = the "current" node
          const currentId = stageMods.find(m => {
            if (m.isReview) return false;
            const t = getTotalSentences(m);
            return t > 0 && (progressMap[m.id] ?? 0) < t;
          })?.id;

          const nonReviewMods = stageMods.filter(m => !m.isReview && getTotalSentences(m) > 0);
          const allNonReviewDone = nonReviewMods.length > 0 && nonReviewMods.every(m => (progressMap[m.id] ?? 0) >= getTotalSentences(m));

          return (
            <View key={stage} style={styles.stageSection}>
              <TouchableOpacity
                activeOpacity={isVariados ? 1 : 0.75}
                onPress={isVariados ? undefined : () => setOpenStage(s => s === stage ? null : stage)}
                style={styles.stageHeader}>
                <ProgressRing pct={stagePct} size={44} stroke={4.5} />
                <View style={styles.stageHeaderMid}>
                  <View style={styles.stageTitleRow}>
                    <Text style={styles.stageTitle}>{getStageLabel(stage, uiGroup)}</Text>
                    {stagePct >= 1 && stageTotal > 0 && <Text style={styles.stageMedal}>🏅</Text>}
                  </View>
                  <Text style={styles.stageDesc} numberOfLines={1}>{getStageDesc(stage, uiGroup)}</Text>
                </View>
                <View style={styles.stageRight}>
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

              {isOpen && (
                <View style={styles.trail}>
                  <View style={styles.trailLine} />
                  {stageMods.map((mod, i) => {
                    const total = getTotalSentences(mod);
                    const done = progressMap[mod.id] ?? 0;
                    const pct = total > 0 ? done / total : 0;
                    // Exercise-level progress (each exercise = up to 5 sentences):
                    // count exercises fully covered by the number of completed sentences
                    const exTotal = (mod.exercises ?? []).length;
                    let exDone = 0, restantes = done;
                    for (const ex of mod.exercises ?? []) {
                      const len = (ex.sentences ?? []).length;
                      if (len > 0 && restantes >= len) { exDone++; restantes -= len; } else break;
                    }
                    const isComplete = total > 0 && done >= total;
                    const isEmpty = total === 0;
                    const isLocked = mod.isReview && !allNonReviewDone;
                    const isCurrent = mod.id === currentId;
                    return (
                      <TouchableOpacity
                        key={mod.id}
                        style={[styles.nodeRow, isCurrent && styles.nodeRowCurrent]}
                        onPress={() => !isEmpty && !isLocked && router.push(`/exercise/${mod.id}`)}
                        disabled={isEmpty || isLocked}
                        activeOpacity={isEmpty || isLocked ? 1 : 0.7}>
                        {/* Nó do caminho */}
                        <View style={[
                          styles.node,
                          isComplete && styles.nodeDone,
                          isCurrent && styles.nodeCurrent,
                          (isLocked || isEmpty) && styles.nodeLocked,
                        ]}>
                          {isComplete
                            ? <Text style={styles.nodeCheck}>✓</Text>
                            : isLocked
                              ? <Text style={styles.nodeLockIcon}>🔒</Text>
                              : mod.isReview
                                ? <Text style={[styles.nodeText, isCurrent && styles.nodeTextCurrent]}>★</Text>
                                : <Text style={[styles.nodeText, isCurrent && styles.nodeTextCurrent]}>{nonReviewMods.indexOf(mod) + 1}</Text>}
                        </View>
                        <View style={styles.nodeInfo}>
                          <View style={styles.nodeTitleRow}>
                            <Text style={[styles.nodeTitle, isEmpty && styles.nodeTitleMuted]} numberOfLines={2}>
                              {mod.title}
                            </Text>
                            {isCurrent && <Poly size={22} mood="happy" />}
                            {isEmpty && <View style={styles.soonBadge}><Text style={styles.soonBadgeText}>Em breve</Text></View>}
                          </View>
                          {isLocked ? (
                            <Text style={styles.nodeLockedText}>Complete a etapa para desbloquear</Text>
                          ) : mod.subtitle ? (
                            <Text style={styles.nodeSub} numberOfLines={1}>{mod.subtitle}</Text>
                          ) : null}
                          {!isEmpty && !isLocked && total > 0 && (
                            <View style={styles.progRow}>
                              <View style={styles.progBar}>
                                <View style={[styles.progFill, { width: `${pct * 100}%` }, isComplete && styles.progFillDone]} />
                              </View>
                              <Text style={[styles.progText, isComplete && styles.progTextDone]}>
                                {isComplete ? `${exTotal}/${exTotal} ✓` : `${exDone}/${exTotal}`}
                              </Text>
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}

              {stage === 'Variados' && (
                <TouchableOpacity style={styles.dialogosCard} onPress={() => router.push(`/dialogos?lang=${activeLang}`)} activeOpacity={0.75}>
                  <Text style={styles.dialogosEmoji}>💬</Text>
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
        <View style={{ height: 24 }} />
      </ScrollView>

      <AdBanner />
      <TabBar active="home" lang={activeLang} />

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
  topBar: {
    paddingTop: 12, paddingBottom: 12, paddingHorizontal: 20,
    backgroundColor: C.bg,
  },
  topRow1: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: 8,
  },
  topRow2: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  appTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  appTitle: { fontSize: 19, fontWeight: '800', color: C.brand, letterSpacing: 0.3 },
  levelPill: {
    backgroundColor: C.accentLight, borderRadius: 14,
    paddingVertical: 4, paddingHorizontal: 12,
  },
  levelPillText: { fontSize: 12, fontWeight: '700', color: C.brandDark },
  langPairBtn: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 8 },
  langPair: { fontSize: 16, fontWeight: '700', color: C.text },
  langPairChevron: { fontSize: 13, color: C.accent },
  theoryGeneralBtn: {
    paddingVertical: 7, paddingHorizontal: 14,
    backgroundColor: C.accentLight, borderRadius: 10,
  },
  theoryGeneralText: { fontSize: 12, color: C.brandDark, fontWeight: '700' },

  scroll: { paddingTop: 4, paddingBottom: 12 },

  heroCard: {
    flexDirection: 'row', alignItems: 'center', gap: 16,
    backgroundColor: C.brandLight,
    borderRadius: 18, paddingVertical: 14, paddingHorizontal: 18,
    marginHorizontal: 20, marginTop: 6,
  },
  heroRight: { flex: 1 },
  heroStreakRow: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  heroStreakNum: { fontSize: 30, fontWeight: '800', color: C.brandDark },
  heroStreakFlame: { fontSize: 19 },
  heroStreakLabel: { fontSize: 14, color: C.brandDark, fontWeight: '600' },
  heroMsg: { fontSize: 13, color: C.textMuted, marginTop: 2 },

  continueCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.bg, borderRadius: 18,
    paddingVertical: 16, paddingHorizontal: 18,
    marginHorizontal: 20, marginTop: 14,
    borderWidth: 1, borderColor: C.border,
    ...cardShadow,
  },
  continueLabel: { fontSize: 10, fontWeight: '800', color: C.accent, letterSpacing: 1.5, marginBottom: 4 },
  continueTitle: { fontSize: 17, fontWeight: '800', color: C.text },
  continueStage: { fontSize: 12, color: C.textMuted, marginTop: 2 },
  continueBtnWrap: { width: 52, height: 52, alignItems: 'center', justifyContent: 'center' },
  continueBtnGlow: {
    position: 'absolute', width: 52, height: 52, borderRadius: 26,
    backgroundColor: C.accent,
  },
  continueBtn: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: C.accent, alignItems: 'center', justifyContent: 'center',
    shadowColor: C.accent, shadowOpacity: 0.35, shadowRadius: 8, shadowOffset: { width: 0, height: 3 }, elevation: 4,
  },
  continueBtnText: { fontSize: 18, color: '#fff', marginLeft: 3 },

  stageSection: { paddingHorizontal: 20, paddingTop: 20 },
  stageHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.bgAlt, borderRadius: 16,
    paddingHorizontal: 14, paddingVertical: 12,
  },
  stageHeaderMid: { flex: 1 },
  stageTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  stageTitle: { fontSize: 15, fontWeight: '800', color: C.text },
  stageMedal: { fontSize: 15 },
  stageDesc: { fontSize: 12, color: C.textMuted, marginTop: 2 },
  stageRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  stageChevron: { fontSize: 18, color: C.textMuted, fontWeight: '300' },
  theoryTagBtn: {
    paddingVertical: 5, paddingHorizontal: 10,
    backgroundColor: C.accentLight, borderRadius: 8,
  },
  theoryTagText: { fontSize: 11, color: C.brandDark, fontWeight: '700' },

  trail: { position: 'relative', paddingTop: 8 },
  trailLine: {
    position: 'absolute', left: 33, top: 16, bottom: 20,
    width: 3, borderRadius: 1.5, backgroundColor: C.border,
  },
  nodeRow: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 14,
    paddingVertical: 10, paddingLeft: 14, paddingRight: 4,
  },
  nodeRowCurrent: {
    backgroundColor: C.accentLight, borderRadius: 16,
  },
  node: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: C.bg, borderWidth: 2.5, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center',
  },
  nodeDone: { backgroundColor: C.accent, borderColor: C.accent },
  nodeCurrent: { borderColor: C.accent, backgroundColor: C.bg },
  nodeLocked: { backgroundColor: C.bgAlt, borderColor: C.border },
  nodeCheck: { fontSize: 16, color: '#fff', fontWeight: '800' },
  nodeLockIcon: { fontSize: 13 },
  nodeText: { fontSize: 14, fontWeight: '800', color: C.textMuted },
  nodeTextCurrent: { color: C.accent },
  nodeInfo: { flex: 1, paddingTop: 1 },
  nodeTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  nodeTitle: { fontSize: 15, fontWeight: '700', color: C.text, flexShrink: 1 },
  nodeTitleMuted: { color: C.textMuted, fontWeight: '500' },
  nodeSub: { fontSize: 12, color: C.textMuted, marginTop: 2 },
  nodeLockedText: { fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 2 },
  soonBadge: { paddingHorizontal: 7, paddingVertical: 2, backgroundColor: C.bgAlt, borderRadius: 10 },
  soonBadgeText: { fontSize: 10, color: C.textMuted },
  progRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  progBar: { flex: 1, height: 5, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  progFill: { height: 5, backgroundColor: C.accent, borderRadius: 3 },
  progFillDone: { backgroundColor: C.correct },
  progText: { fontSize: 10, fontWeight: '600', color: C.textMuted, minWidth: 44, textAlign: 'right' },
  progTextDone: { color: C.correct, fontWeight: '800' },
  chevron: { fontSize: 22, color: C.textMuted, marginRight: 2 },

  dialogosCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.bg, borderWidth: 1, borderColor: C.border,
    borderRadius: 16, paddingHorizontal: 16, paddingVertical: 14, marginTop: 12,
    ...cardShadow,
  },
  dialogosEmoji: { fontSize: 22 },
  dialogosCardLeft: { flex: 1 },
  dialogosCardTitle: { fontSize: 15, fontWeight: '800', color: C.text },
  dialogosCardSub: { fontSize: 12, color: C.textMuted, marginTop: 2 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(12,45,72,0.45)', justifyContent: 'center', padding: 28 },
  offerModal: {
    backgroundColor: C.bg, borderRadius: 20,
    padding: 28, ...cardShadow,
  },
  offerTitle: { fontSize: 20, fontWeight: '800', color: C.text, marginBottom: 12 },
  offerBody: { fontSize: 14, color: C.textMuted, lineHeight: 22, marginBottom: 24 },
  offerBtnPrimary: {
    backgroundColor: C.accent, borderRadius: 12,
    paddingVertical: 14, alignItems: 'center', marginBottom: 12,
  },
  offerBtnPrimaryText: { fontSize: 15, fontWeight: '700', color: '#fff', textAlign: 'center' },
  offerBtnSkip: { paddingVertical: 10, alignItems: 'center' },
  offerBtnSkipText: { fontSize: 14, color: C.textMuted },

  langModal: { backgroundColor: C.bg, borderRadius: 20, padding: 20, ...cardShadow },
  langModalTitle: { fontSize: 16, fontWeight: '800', color: C.text, marginBottom: 16 },
  langGroupHeader: { fontSize: 11, fontWeight: '800', color: C.accent, textTransform: 'uppercase', letterSpacing: 1, marginTop: 12, marginBottom: 2 },
  langGroupSub: { fontSize: 11, color: C.textMuted, marginBottom: 6 },
  langOption: {
    flexDirection: 'row', alignItems: 'center', paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  langOptionActive: { backgroundColor: C.accentLight, borderRadius: 10, paddingHorizontal: 10 },
  langOptionDisabled: { opacity: 0.45 },
  langOptionLabel: { fontSize: 16, color: C.text, fontWeight: '600' },
  langOptionLabelMuted: { color: C.textMuted, fontWeight: '400' },
  langOptionCheck: { fontSize: 18, color: C.accent, fontWeight: '700' },
});
