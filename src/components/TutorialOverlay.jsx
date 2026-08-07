import React, { useState, useRef, useEffect } from 'react';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet, Animated, Easing, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poly from './Poly';
import { C, cardShadow } from '../theme';

// First-run tutorial. Each slide pairs a short explanation with a miniature of
// the real UI, so the concept is shown rather than only described.

// These mockups are fixed-size illustrative diagrams, not real content — they
// shouldn't reflow when the device's system text-size (accessibility) setting
// is increased, or the tight hand-tuned layout breaks.
function MockText(props) {
  return <Text allowFontScaling={false} {...props} />;
}

function MiniTrail() {
  const nodes = [
    { n: '1', label: 'Artigos e substantivos', state: 'done' },
    { n: '2', label: 'Ser e estar', state: 'current' },
    { n: '3', label: 'Presente simples', state: 'todo' },
  ];
  return (
    <View style={mk.card}>
      <View style={mk.stageHeader}>
        <View style={mk.ring}><MockText style={mk.ringText}>40%</MockText></View>
        <View style={{ flex: 1 }}>
          <MockText style={mk.stageTitle}>Fundamentos</MockText>
          <MockText style={mk.stageSub}>As bases do idioma</MockText>
        </View>
      </View>
      <View style={mk.trail}>
        <View style={mk.trailLine} />
        {nodes.map(nd => (
          <View key={nd.n} style={[mk.nodeRow, nd.state === 'current' && mk.nodeRowCurrent]}>
            <View style={[
              mk.node,
              nd.state === 'done' && mk.nodeDone,
              nd.state === 'current' && mk.nodeCurrent,
            ]}>
              <MockText style={[mk.nodeText, nd.state === 'done' && mk.nodeTextDone, nd.state === 'current' && mk.nodeTextCurrent]}>
                {nd.state === 'done' ? '✓' : nd.n}
              </MockText>
            </View>
            <MockText style={mk.nodeLabel} numberOfLines={1}>{nd.label}</MockText>
          </View>
        ))}
      </View>
    </View>
  );
}

function MiniExercises() {
  return (
    <View style={mk.card}>
      <MockText style={mk.moduleName}>Ser e estar</MockText>
      <View style={mk.exList}>
        {[
          { t: 'Exercício 1', s: '5 frases', done: true },
          { t: 'Exercício 2', s: '5 frases', done: true },
          { t: 'Exercício 3', s: '5 frases', done: false },
          { t: 'Exercício 4', s: '5 frases', done: false },
        ].map(ex => (
          <View key={ex.t} style={mk.exRow}>
            <View style={[mk.exDot, ex.done && mk.exDotDone]}>
              {ex.done && <MockText style={mk.exCheck}>✓</MockText>}
            </View>
            <MockText style={[mk.exTitle, !ex.done && mk.exTitleTodo]}>{ex.t}</MockText>
            <MockText style={mk.exSub}>{ex.s}</MockText>
          </View>
        ))}
      </View>
      <View style={mk.progressWrap}>
        <View style={mk.progressBar}><View style={mk.progressFill} /></View>
        <MockText style={mk.progressText}>2/4</MockText>
      </View>
    </View>
  );
}

function MiniTapWord() {
  const pulse = useRef(new Animated.Value(0)).current;
  const [bubbleW, setBubbleW] = useState(0);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0, duration: 900, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      ])
    ).start();
  }, []);
  return (
    <View style={mk.card}>
      <Text style={mk.promptLabel} allowFontScaling={false}>TRADUZA PARA O INGLÊS</Text>
      <View style={mk.bubble} onLayout={e => setBubbleW(e.nativeEvent.layout.width)}>
        <Text style={mk.bubbleText} allowFontScaling={false}>
          <Text style={mk.bubbleWord}>maçã</Text> = apple
        </Text>
      </View>
      {/* Centered under the bubble using its actual measured width — no
          guessed pixel offset that breaks the moment the text/font differs. */}
      <View style={[mk.bubbleArrow, bubbleW ? { marginLeft: bubbleW / 2 - 7 } : null]} />
      <Text style={mk.promptText} allowFontScaling={false}>
        Eu como uma{' '}
        <Text style={mk.tappedWord}>maçã</Text>
        {' '}todo dia.
      </Text>
      <Animated.View style={{ opacity: pulse.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }}>
        <Text style={mk.tapCaption} allowFontScaling={false}>👆 toque em qualquer palavra pra ver a tradução</Text>
      </Animated.View>
    </View>
  );
}

function MiniReview() {
  return (
    <View style={mk.card}>
      <View style={mk.reviewHeader}>
        <MockText style={mk.reviewIcon}>📚</MockText>
        <View style={{ flex: 1 }}>
          <MockText style={mk.reviewTitle}>Revisão</MockText>
          <MockText style={mk.reviewSub}>frases que você errou</MockText>
        </View>
        <View style={mk.badge}><MockText style={mk.badgeText}>5</MockText></View>
      </View>
      <View style={mk.srsRow}>
        {['1 dia', '3 dias', '7 dias', '14 dias'].map((d, i) => (
          <View key={d} style={mk.srsStep}>
            <View style={[mk.srsDot, i === 0 && mk.srsDotActive]} />
            <MockText style={[mk.srsLabel, i === 0 && mk.srsLabelActive]}>{d}</MockText>
          </View>
        ))}
      </View>
      <MockText style={mk.srsCaption}>Cada acerto adia a próxima revisão — o que você quase esquece volta na hora certa.</MockText>
    </View>
  );
}

const SLIDES = [
  {
    key: 'trilha',
    title: 'Sua trilha, etapa por etapa',
    body: 'O conteúdo vai de Fundamentos a Avançado. Cada etapa reúne módulos que você desbloqueia no seu ritmo — o Poly marca onde você parou.',
    render: () => <MiniTrail />,
  },
  {
    key: 'exercicios',
    title: 'Módulos em blocos de 5 frases',
    body: 'Cada módulo tem 3 ou 4 exercícios, e cada exercício traz 5 frases. Dá pra avançar um bloco de cada vez, mesmo com pouco tempo.',
    render: () => <MiniExercises />,
  },
  {
    key: 'toque',
    title: 'Travou numa palavra? Toque nela',
    body: 'Qualquer palavra da frase pode ser tocada para ver a tradução na hora, sem sair do exercício e sem precisar de dicionário.',
    render: () => <MiniTapWord />,
  },
  {
    key: 'revisao',
    title: 'O que você erra, você revê',
    body: 'Toda frase errada entra na Revisão e volta em intervalos crescentes. É repetição espaçada — o método com mais evidência para fixar de verdade.',
    render: () => <MiniReview />,
  },
];

export default function TutorialOverlay({ visible, onFinish }) {
  const [idx, setIdx] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;
  const isLast = idx === SLIDES.length - 1;

  function go(next) {
    Animated.timing(fade, { toValue: 0, duration: 130, useNativeDriver: true }).start(() => {
      setIdx(next);
      Animated.timing(fade, { toValue: 1, duration: 180, useNativeDriver: true }).start();
    });
  }

  const slide = SLIDES[idx];

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onFinish}>
      <SafeAreaView style={s.safe}>
        <View style={s.topRow}>
          <View style={s.brandRow}>
            <Poly size={22} mood="happy" />
            <Text style={s.brand}>Como funciona</Text>
          </View>
          <TouchableOpacity onPress={onFinish} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={s.skip}>Pular</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[s.bodyFlex, { opacity: fade }]}>
          <ScrollView
            contentContainerStyle={s.bodyScroll}
            showsVerticalScrollIndicator={false}>
            <View style={s.mockWrap}>{slide.render()}</View>
            <Text style={s.title}>{slide.title}</Text>
            <Text style={s.text}>{slide.body}</Text>
          </ScrollView>
        </Animated.View>

        <View style={s.dots}>
          {SLIDES.map((sl, i) => (
            <View key={sl.key} style={[s.dot, i === idx && s.dotActive]} />
          ))}
        </View>

        <View style={s.controls}>
          {idx > 0 ? (
            <TouchableOpacity style={s.backBtn} onPress={() => go(idx - 1)}>
              <Text style={s.backText}>← Voltar</Text>
            </TouchableOpacity>
          ) : <View style={s.backBtn} />}
          <TouchableOpacity
            style={s.nextBtn}
            activeOpacity={0.85}
            onPress={() => (isLast ? onFinish() : go(idx + 1))}>
            <Text style={s.nextText}>{isLast ? 'Começar a estudar' : 'Próximo →'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  topRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4,
  },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brand: { fontSize: 15, fontWeight: '800', color: C.brand },
  skip: { fontSize: 14, color: C.textMuted, fontWeight: '600' },
  bodyFlex: { flex: 1 },
  bodyScroll: { flexGrow: 1, paddingHorizontal: 24, justifyContent: 'center', paddingVertical: 12 },
  mockWrap: { marginBottom: 28 },
  title: { fontSize: 24, fontWeight: '800', color: C.text, marginBottom: 10, lineHeight: 31 },
  text: { fontSize: 15, color: C.textMuted, lineHeight: 23 },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6, paddingVertical: 14 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: C.border },
  dotActive: { width: 20, backgroundColor: C.accent },
  controls: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingBottom: 12, gap: 12,
  },
  backBtn: { paddingVertical: 14, minWidth: 84 },
  backText: { fontSize: 15, color: C.textMuted },
  nextBtn: {
    flex: 1, backgroundColor: C.accent, borderRadius: 14,
    paddingVertical: 16, alignItems: 'center',
    shadowColor: C.accent, shadowOpacity: 0.3, shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }, elevation: 4,
  },
  nextText: { fontSize: 16, fontWeight: '800', color: '#fff' },
});

const mk = StyleSheet.create({
  card: {
    backgroundColor: C.bg, borderRadius: 18, borderWidth: 1, borderColor: C.border,
    padding: 16, ...cardShadow,
  },
  // trail
  stageHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.bgAlt, borderRadius: 12, padding: 10, marginBottom: 10,
  },
  ring: {
    width: 38, height: 38, borderRadius: 19, borderWidth: 4, borderColor: C.accent,
    alignItems: 'center', justifyContent: 'center', backgroundColor: C.bg,
  },
  ringText: { fontSize: 9, fontWeight: '800', color: C.accent },
  stageTitle: { fontSize: 14, fontWeight: '800', color: C.text },
  stageSub: { fontSize: 11, color: C.textMuted, marginTop: 1 },
  trail: { position: 'relative' },
  trailLine: { position: 'absolute', left: 21, top: 14, bottom: 14, width: 3, backgroundColor: C.border, borderRadius: 2 },
  nodeRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 6, paddingHorizontal: 6, borderRadius: 12 },
  nodeRowCurrent: { backgroundColor: C.accentLight },
  node: {
    width: 30, height: 30, borderRadius: 15, backgroundColor: C.bg,
    borderWidth: 2.5, borderColor: C.border, alignItems: 'center', justifyContent: 'center',
  },
  nodeDone: { backgroundColor: C.accent, borderColor: C.accent },
  nodeCurrent: { borderColor: C.accent },
  nodeText: { fontSize: 12, fontWeight: '800', color: C.textMuted },
  nodeTextDone: { color: '#fff' },
  nodeTextCurrent: { color: C.accent },
  nodeLabel: { flex: 1, fontSize: 13, fontWeight: '600', color: C.text },
  // exercises
  moduleName: { fontSize: 15, fontWeight: '800', color: C.text, marginBottom: 10 },
  exList: { gap: 6 },
  exRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  exDot: {
    width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center',
  },
  exDotDone: { backgroundColor: C.correct, borderColor: C.correct },
  exCheck: { fontSize: 10, color: '#fff', fontWeight: '800' },
  exTitle: { flex: 1, fontSize: 13, fontWeight: '700', color: C.text },
  exTitleTodo: { color: C.textMuted, fontWeight: '500' },
  exSub: { fontSize: 11, color: C.textMuted },
  progressWrap: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  progressBar: { flex: 1, height: 5, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  progressFill: { width: '50%', height: 5, backgroundColor: C.accent, borderRadius: 3 },
  progressText: { fontSize: 11, fontWeight: '700', color: C.textMuted },
  // tap word
  promptLabel: { fontSize: 9, color: C.textMuted, letterSpacing: 2, fontWeight: '700', marginBottom: 14 },
  bubble: { alignSelf: 'flex-start', backgroundColor: C.navy, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  bubbleText: { color: '#fff', fontSize: 13 },
  bubbleWord: { fontWeight: '800' },
  bubbleArrow: {
    width: 0, height: 0, marginLeft: 26,
    borderLeftWidth: 7, borderRightWidth: 7, borderTopWidth: 7,
    borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: C.navy,
    marginBottom: 8,
  },
  promptText: { fontSize: 19, color: C.text, fontWeight: '600', lineHeight: 28 },
  tappedWord: { color: C.accent, textDecorationLine: 'underline', textDecorationStyle: 'dotted' },
  tapCaption: { fontSize: 12, color: C.accent, fontWeight: '700', marginTop: 14 },
  // review
  reviewHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
  reviewIcon: { fontSize: 26 },
  reviewTitle: { fontSize: 15, fontWeight: '800', color: C.text },
  reviewSub: { fontSize: 12, color: C.textMuted, marginTop: 1 },
  badge: {
    minWidth: 26, height: 26, borderRadius: 13, backgroundColor: C.incorrect,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  srsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  srsStep: { alignItems: 'center', gap: 5, flex: 1 },
  srsDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: C.border },
  srsDotActive: { backgroundColor: C.accent },
  srsLabel: { fontSize: 11, color: C.textMuted },
  srsLabelActive: { color: C.accent, fontWeight: '700' },
  srsCaption: { fontSize: 12, color: C.textMuted, lineHeight: 18 },
});
