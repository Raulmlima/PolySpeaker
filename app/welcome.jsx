import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, StatusBar, Dimensions,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { getProfile, saveProfile, LANGUAGES, getOrderedLanguageGroups } from '../src/storage';
import { C } from '../src/theme';
import Poly from '../src/components/Poly';

const { width } = Dimensions.get('window');

const TEST_OPTIONS = [
  { id: 'weekly',    label: 'Semanal',       desc: 'Todo domingo — consistência máxima' },
  { id: 'biweekly',  label: 'Quinzenal',     desc: 'A cada 15 dias — ritmo equilibrado' },
  { id: 'monthly',   label: 'Mensal',        desc: 'Uma vez por mês — sem pressão' },
  { id: 'manual',    label: 'Quando quiser', desc: 'Você decide a hora certa' },
];

// ─── Slide 1 · Apresentação ───────────────────────────────────────────────
function Slide1() {
  return (
    <View style={[sl.slide, sl.slide1]}>
      <Text style={sl.tag}>DESENVOLVIDO POR ESTUDANTES DA UFABC</Text>
      <Text style={sl.h1}>Bem-vindo ao{'\n'}PolySpeaker.</Text>
      <Text style={sl.body}>
        Uma plataforma de aprendizado de idiomas pensada do zero por estudantes da Universidade
        Federal do ABC — para quem quer aprender{' '}
        <Text style={sl.bold}>de verdade</Text>, não só decorar.
      </Text>
      <View style={sl.logoWrapBottom}>
        <Poly size={120} mood="happy" />
        <Text style={sl.polyCaption}>Esse é o Poly — vai te acompanhar na jornada.</Text>
      </View>
    </View>
  );
}

// ─── Slide 2 · Método ────────────────────────────────────────────────────
function Slide2() {
  return (
    <View style={sl.slide}>
      <Text style={sl.emoji}>🧠</Text>
      <Text style={sl.h1}>O método que a{'\n'}neurociência aprova.</Text>
      <Text style={sl.body}>
        Toda a trilha é baseada em <Text style={sl.bold}>tradução ativa</Text>: você vê uma
        frase no seu idioma e produz a resposta na língua alvo — sem múltipla escolha, sem cola.
      </Text>
      <View style={sl.studyCard}>
        <Text style={sl.studyLabel}>📖 ESTUDO DE REFERÊNCIA</Text>
        <Text style={sl.studyText}>
          Karpicke & Roediger (2008,{' '}
          <Text style={sl.italic}>Science</Text>) demonstraram que a{' '}
          <Text style={sl.bold}>prática de recuperação ativa</Text> — forçar o cérebro a
          produzir a resposta em vez de reconhecê-la — aumenta a retenção de longo prazo em
          até <Text style={sl.bold}>3×</Text> comparado à releitura passiva.
        </Text>
      </View>
      <Text style={sl.bodySm}>
        Traduzir ativamente é exatamente isso: cada exercício é um treino de recuperação que
        consolida o idioma na memória de verdade.
      </Text>
    </View>
  );
}

// ─── Slide 3 · Trilha ────────────────────────────────────────────────────
function Slide3() {
  const stages = [
    { stage: 'Fundamentos',   desc: 'Vocabulário, pronomes e estrutura básica',              icon: '🏗️' },
    { stage: 'Básico',        desc: 'Verbos, tempos e o essencial para se comunicar',        icon: '🗣️' },
    { stage: 'Intermediário', desc: 'Subjuntivo, passiva e estruturas que diferenciam',      icon: '📈' },
    { stage: 'Avançado',      desc: 'Idioms, condicionais e nuances',                        icon: '🏆' },
    { stage: 'Variados',      desc: 'Treino livre + Diálogos Reais',                         icon: '🎲' },
  ];
  return (
    <View style={sl.slide}>
      <Text style={sl.emoji}>🗺️</Text>
      <Text style={sl.h1}>Uma trilha do zero{'\n'}ao fluente.</Text>
      <Text style={sl.body}>
        Cada módulo tem teoria integrada e exercícios progressivos. Você avança no seu ritmo.
      </Text>
      <View style={sl.stageList}>
        {stages.map((s, i) => (
          <View key={s.stage} style={sl.stageRow}>
            <View style={sl.stageNumWrap}>
              <Text style={sl.stageNum}>{s.icon}</Text>
            </View>
            {i < stages.length - 1 && <View style={sl.stageLine} />}
            <View style={sl.stageInfo}>
              <Text style={sl.stageName}>{s.stage}</Text>
              <Text style={sl.stageDesc}>{s.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

// ─── Slide 4 · Seleção de idioma ─────────────────────────────────────────
function Slide4Lang({ selectedLang, setSelectedLang }) {
  const groups = getOrderedLanguageGroups();
  return (
    <View style={sl.slide}>
      <Text style={sl.emoji}>🌍</Text>
      <Text style={sl.h1}>Qual idioma quer{'\n'}aprender primeiro?</Text>
      <View style={sl.langHintBox}>
        <Text style={sl.langHint}>
          💡 Você pode adicionar outros idiomas depois — basta acessar as configurações na
          tela inicial do app.
        </Text>
      </View>

      {groups.map(group => {
        const groupLangs = LANGUAGES.filter(l => l.group === group.id);
        return (
          <View key={group.id} style={sl.groupBlock}>
            <Text style={sl.groupHeader}>{group.label}</Text>
            <Text style={sl.groupSub}>{group.sublabel}</Text>
            <View style={sl.langList}>
              {groupLangs.map(lang => (
                <TouchableOpacity
                  key={`${group.id}-${lang.id}`}
                  style={[
                    sl.langCard,
                    selectedLang === lang.id && sl.langCardSelected,
                    !lang.available && sl.langCardDisabled,
                  ]}
                  onPress={() => lang.available && setSelectedLang(lang.id)}
                  activeOpacity={lang.available ? 0.7 : 1}>
                  <View style={sl.langRow}>
                    <Text style={[sl.langLabel, !lang.available && sl.langLabelDim]}>
                      {lang.label}
                    </Text>
                    {!lang.available && (
                      <View style={sl.soonBadge}>
                        <Text style={sl.soonText}>Em breve</Text>
                      </View>
                    )}
                    {lang.available && selectedLang === lang.id && (
                      <Text style={sl.checkMark}>✓</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
}

// ─── Slide 5 · O que esperar ──────────────────────────────────────────────
function Slide5() {
  const milestones = [
    { weeks: '1–2 sem.', icon: '🌱', title: 'Primeiras frases', desc: 'Você já forma frases simples no novo idioma e entende expressões básicas.' },
    { weeks: '1 mês', icon: '🗣️', title: 'Conversação básica', desc: 'Consegue se apresentar, pedir informações e entender respostas curtas.' },
    { weeks: '3 meses', icon: '📈', title: 'Dia a dia', desc: 'Frases completas sobre rotina, preferências e situações do cotidiano.' },
    { weeks: '6 meses', icon: '🏆', title: 'Intermediário real', desc: 'Você entende e participa de conversas sobre temas variados com confiança.' },
  ];
  return (
    <View style={sl.slide}>
      <Text style={sl.emoji}>🗓️</Text>
      <Text style={sl.h1}>O que esperar{'\n'}de cada fase?</Text>
      <Text style={sl.body}>
        Com <Text style={sl.bold}>10 minutos por dia</Text>, este é o caminho realista baseado
        em dados de aprendizado de idiomas:
      </Text>
      <View style={sl.milestoneList}>
        {milestones.map((m, i) => (
          <View key={i} style={sl.milestoneRow}>
            <View style={sl.milestoneLeft}>
              <Text style={sl.milestoneWeeks}>{m.weeks}</Text>
              <Text style={sl.milestoneIcon}>{m.icon}</Text>
            </View>
            <View style={sl.milestoneDivider} />
            <View style={sl.milestoneRight}>
              <Text style={sl.milestoneTitle}>{m.title}</Text>
              <Text style={sl.milestoneDesc}>{m.desc}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={sl.bodySm}>
        Estes resultados são para idiomas de família latina/germânica. Mandarim pode levar o
        dobro — mas cada dia conta.
      </Text>
    </View>
  );
}

// ─── Slide 6 · Evolução + frequência ─────────────────────────────────────
function Slide6({ freq, setFreq }) {
  return (
    <View style={sl.slide}>
      <Text style={sl.emoji}>📊</Text>
      <Text style={sl.h1}>Acompanhe{'\n'}sua evolução.</Text>

      <View style={sl.placementCard}>
        <Text style={sl.placementTitle}>🎯 Teste de nivelamento</Text>
        <Text style={sl.placementText}>
          Após criar seu perfil, você fará um breve teste. Ele identifica exatamente onde você
          está e posiciona você na trilha ideal — sem perder tempo com o que você já sabe.
        </Text>
      </View>

      <Text style={sl.freqTitle}>Com que frequência quer reavaliar seu progresso?</Text>
      <View style={sl.freqList}>
        {TEST_OPTIONS.map(opt => (
          <TouchableOpacity
            key={opt.id}
            style={[sl.freqCard, freq === opt.id && sl.freqCardSelected]}
            onPress={() => setFreq(opt.id)}
            activeOpacity={0.75}>
            <View style={sl.freqRow}>
              <View style={[sl.freqDot, freq === opt.id && sl.freqDotSelected]} />
              <Text style={[sl.freqLabel, freq === opt.id && sl.freqLabelSelected]}>
                {opt.label}
              </Text>
            </View>
            <Text style={sl.freqDesc}>{opt.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// ─── Screen ──────────────────────────────────────────────────────────────
const TOTAL = 6;

export default function WelcomeScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [freq, setFreq] = useState('weekly');
  const [selectedLang, setSelectedLang] = useState(null);
  const flatRef = useRef(null);

  function goTo(idx) {
    flatRef.current?.scrollToIndex({ index: idx, animated: true });
    setCurrent(idx);
  }

  function goNext() {
    if (current === 3 && !selectedLang) return; // language slide: must pick one
    if (current < TOTAL - 1) goTo(current + 1);
  }



  function goPrev() {
    if (current > 0) goTo(current - 1);
  }

  async function finish() {
    const p = await getProfile();
    const base = p ?? {};
    const toSave = { ...base, seenWelcome: true, testFrequency: freq };
    if (selectedLang) toSave.language = selectedLang;
    await saveProfile(toSave);
    router.replace('/onboarding');
  }

  const nextBlocked = current === 3 && !selectedLang;

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4Lang key="4" selectedLang={selectedLang} setSelectedLang={setSelectedLang} />,
    <Slide5 key="5" />,
    <Slide6 key="6" freq={freq} setFreq={setFreq} />,
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />

      <FlatList
        ref={flatRef}
        data={slides}
        renderItem={({ item }) => (
          <ScrollView
            style={{ width }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            {item}
          </ScrollView>
        )}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />

      {/* Dots */}
      <View style={styles.dots}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <View key={i} style={[styles.dot, i === current && styles.dotActive]} />
        ))}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {current > 0 ? (
          <TouchableOpacity style={styles.backBtn} onPress={goPrev}>
            <Text style={styles.backBtnText}>← Voltar</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1 }} />
        )}

        {current < TOTAL - 1 ? (
          <TouchableOpacity
            style={[styles.nextBtn, nextBlocked && styles.nextBtnBlocked]}
            onPress={goNext}
            activeOpacity={nextBlocked ? 1 : 0.8}>
            <Text style={[styles.nextBtnText, nextBlocked && styles.nextBtnTextBlocked]}>
              {nextBlocked ? 'Selecione um idioma' : 'Próximo →'}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.nextBtn, styles.finishBtn]} onPress={finish}>
            <Text style={styles.nextBtnText}>Criar meu perfil →</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Skip — apenas nos slides introdutórios */}
      {current < 3 && (
        <TouchableOpacity style={styles.skipBtn} onPress={finish}>
          <Text style={styles.skipBtnText}>Pular apresentação</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

// ─── Estilos dos slides ───────────────────────────────────────────────────
const sl = StyleSheet.create({
  slide: {
    paddingHorizontal: 28,
    paddingTop: 32,
    paddingBottom: 24,
  },
  logoWrap: { marginBottom: 24 },
  logo: { width: 72, height: 72 },
  slide1: { flex: 1 },
  logoWrapBottom: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 120, gap: 12 },
  logoBig: { width: 140, height: 140, opacity: 0.92 },
  polyCaption: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', textAlign: 'center' },
  tag: {
    fontFamily: 'serif', fontSize: 10, fontWeight: '700', color: C.accent,
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14,
  },
  h1: {
    fontFamily: 'serif', fontSize: 30, fontWeight: '700', color: C.text,
    lineHeight: 38, marginBottom: 18,
  },
  body: {
    fontFamily: 'serif', fontSize: 15, color: C.textMuted, lineHeight: 24, marginBottom: 20,
  },
  bodySm: {
    fontFamily: 'serif', fontSize: 14, color: C.textMuted, lineHeight: 22, marginTop: 12,
  },
  bold: { fontWeight: '700', color: C.text },
  italic: { fontStyle: 'italic' },
  emoji: { fontSize: 44, marginBottom: 16 },

  // Slide 2 — método
  studyCard: {
    backgroundColor: C.accentLight,
    borderLeftWidth: 4, borderLeftColor: C.accent,
    borderRadius: 8, padding: 16,
  },
  studyLabel: {
    fontFamily: 'serif', fontSize: 10, fontWeight: '700', color: C.accent,
    letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8,
  },
  studyText: { fontFamily: 'serif', fontSize: 13, color: C.text, lineHeight: 20 },

  // Slide 3 — trilha
  stageList: { gap: 0, marginTop: 4 },
  stageRow: { flexDirection: 'row', alignItems: 'flex-start' },
  stageNumWrap: { width: 36, alignItems: 'center' },
  stageNum: { fontSize: 20, zIndex: 2 },
  stageLine: {
    position: 'absolute', left: 17, top: 28, width: 2, height: 36,
    backgroundColor: C.border, zIndex: 1,
  },
  stageInfo: { flex: 1, paddingLeft: 12, paddingBottom: 16 },
  stageName: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  stageDesc: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, marginTop: 2 },

  // Slide 4 — idioma
  langHintBox: {
    backgroundColor: '#FFFBEA', borderWidth: 1, borderColor: '#C8A800',
    borderRadius: 8, padding: 12, marginBottom: 20,
  },
  langHint: { fontFamily: 'serif', fontSize: 13, color: '#5A4000', lineHeight: 19 },
  groupBlock: { marginBottom: 8 },
  groupHeader: {
    fontFamily: 'serif', fontSize: 11, fontWeight: '700', color: C.accent,
    textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 12, marginBottom: 2,
  },
  groupSub: {
    fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginBottom: 8,
  },
  langList: { gap: 8 },
  langCard: {
    borderWidth: 1.5, borderColor: C.border,
    borderRadius: 8, padding: 14, backgroundColor: C.bgAlt,
  },
  langCardSelected: { borderColor: C.accent, backgroundColor: C.accentLight },
  langCardDisabled: { opacity: 0.45 },
  langRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  langLabel: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: C.text },
  langLabelDim: { color: C.textMuted },
  soonBadge: {
    paddingHorizontal: 8, paddingVertical: 2,
    borderWidth: 1, borderColor: C.border, borderRadius: 10,
  },
  soonText: { fontFamily: 'serif', fontSize: 10, color: C.textMuted },
  checkMark: { fontSize: 18, color: C.accent, fontWeight: '700' },

  // Slide 5 — evolução
  placementCard: {
    backgroundColor: C.accentLight,
    borderLeftWidth: 4, borderLeftColor: C.accent,
    borderRadius: 8, padding: 16, marginBottom: 24,
  },
  placementTitle: {
    fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: C.accent,
    marginBottom: 8,
  },
  placementText: { fontFamily: 'serif', fontSize: 13, color: C.text, lineHeight: 20 },
  freqTitle: {
    fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text,
    marginBottom: 12,
  },
  freqList: { gap: 8 },
  freqCard: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8,
    padding: 14, backgroundColor: C.bgAlt,
  },
  freqCardSelected: { borderColor: C.accent, backgroundColor: C.accentLight },
  freqRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 4 },
  freqDot: {
    width: 14, height: 14, borderRadius: 7,
    borderWidth: 2, borderColor: C.border, backgroundColor: '#fff',
  },
  freqDotSelected: { borderColor: C.accent, backgroundColor: C.accent },
  freqLabel: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  freqLabelSelected: { color: C.accent },
  freqDesc: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, marginLeft: 24 },
  // milestone slide
  milestoneList: { marginTop: 8, gap: 12 },
  milestoneRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  milestoneLeft: { alignItems: 'center', minWidth: 52 },
  milestoneWeeks: { fontFamily: 'serif', fontSize: 10, color: C.accent, fontWeight: '700', letterSpacing: 0.5, textAlign: 'center' },
  milestoneIcon: { fontSize: 22, marginTop: 2 },
  milestoneDivider: { width: 1, backgroundColor: C.border, alignSelf: 'stretch', marginHorizontal: 4 },
  milestoneRight: { flex: 1, paddingBottom: 8 },
  milestoneTitle: { fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: C.text, marginBottom: 2 },
  milestoneDesc: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, lineHeight: 18 },
});

// ─── Estilos da tela ──────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  dots: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    gap: 6, paddingVertical: 8,
  },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.border },
  dotActive: { width: 18, backgroundColor: C.accent },
  controls: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 24, paddingVertical: 12,
  },
  backBtn: { paddingVertical: 14, paddingRight: 16 },
  backBtnText: { fontFamily: 'serif', fontSize: 15, color: C.textMuted },
  nextBtn: {
    backgroundColor: C.accent, borderRadius: 8,
    paddingVertical: 14, paddingHorizontal: 28,
  },
  nextBtnBlocked: { backgroundColor: C.border },
  finishBtn: { flex: 1 },
  nextBtnText: {
    fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff',
    textAlign: 'center',
  },
  nextBtnTextBlocked: { color: C.textMuted },
  skipBtn: { alignItems: 'center', paddingBottom: 12 },
  skipBtnText: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, textDecorationLine: 'underline' },
});
