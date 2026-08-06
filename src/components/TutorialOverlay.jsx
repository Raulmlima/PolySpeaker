import React, { useState, useRef, useEffect } from 'react';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet, Animated, Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Poly from './Poly';
import { C, cardShadow } from '../theme';

// First-run tutorial. Each slide pairs a short explanation with a miniature of
// the real UI, so the concept is shown rather than only described.

function MiniTrail() {
  const nodes = [
    { n: '1', label: 'Artigos e substantivos', state: 'done' },
    { n: '2', label: 'Ser e estar', state: 'current' },
    { n: '3', label: 'Presente simples', state: 'todo' },
  ];
  return (
    <View style={mk.card}>
      <View style={mk.stageHeader}>
        <View style={mk.ring}><Text style={mk.ringText}>40%</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={mk.stageTitle}>Fundamentos</Text>
          <Text style={mk.stageSub}>As bases do idioma</Text>
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
              <Text style={[mk.nodeText, nd.state === 'done' && mk.nodeTextDone, nd.state === 'current' && mk.nodeTextCurrent]}>
                {nd.state === 'done' ? '✓' : nd.n}
              </Text>
            </View>
            <Text style={mk.nodeLabel} numberOfLines={1}>{nd.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function MiniExercises() {
  return (
    <View style={mk.card}>
      <Text style={mk.moduleName}>Ser e estar</Text>
      <View style={mk.exList}>
        {[
          { t: 'Exercício 1', s: '5 frases', done: true },
          { t: 'Exercício 2', s: '5 frases', done: true },
          { t: 'Exercício 3', s: '5 frases', done: false },
          { t: 'Exercício 4', s: '5 frases', done: false },
        ].map(ex => (
          <View key={ex.t} style={mk.exRow}>
            <View style={[mk.exDot, ex.done && mk.exDotDone]}>
              {ex.done && <Text style={mk.exCheck}>✓</Text>}
            </View>
            <Text style={[mk.exTitle, !ex.done && mk.exTitleTodo]}>{ex.t}</Text>
            <Text style={mk.exSub}>{ex.s}</Text>
          </View>
        ))}
      </View>
      <View style={mk.progressWrap}>
        <View style={mk.progressBar}><View style={mk.progressFill} /></View>
        <Text style={mk.progressText}>2/4</Text>
      </View>
    </View>
  );
}

function MiniTapWord() {
  const pulse = useRef(new Animated.Value(0)).current;
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
      <Text style={mk.promptLabel}>TRADUZA PARA O INGLÊS</Text>
      <View style={mk.bubble}>
        <Text style={mk.bubbleText}><Text style={mk.bubbleWord}>maçã</Text> = apple</Text>
      </View>
      <View style={mk.bubbleArrow} />
      <Text style={mk.promptText}>
        Eu como uma{' '}
        <Text style={mk.tappedWord}>maçã</Text>
        {' '}todo dia.
      </Text>
      <Animated.View style={[mk.tapHint, {
        opacity: pulse.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }),
        transform: [{ scale: pulse.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1.05] }) }],
      }]}>
        <Text style={mk.tapHintText}>👆</Text>
      </Animated.View>
    </View>
  );
}

function MiniReview() {
  return (
    <View style={mk.card}>
      <View style={mk.reviewHeader}>
        <Text style={mk.reviewIcon}>📚</Text>
        <View style={{ flex: 1 }}>
          <Text style={mk.reviewTitle}>Revisão</Text>
          <Text style={mk.reviewSub}>frases que você errou</Text>
        </View>
        <View style={mk.badge}><Text style={mk.badgeText}>7</Text></View>
      </View>
      <View style={mk.srsRow}>
        {['1 dia', '3 dias', '7 dias', '14 dias'].map((d, i) => (
          <View key={d} style={mk.srsStep}>
            <View style={[mk.srsDot, i === 0 && mk.srsDotActive]} />
            <Text style={[mk.srsLabel, i === 0 && mk.srsLabelActive]}>{d}</Text>
          </View>
        ))}
      </View>
      <Text style={mk.srsCaption}>Cada acerto adia a próxima revisão — o que você quase esquece volta na hora certa.</Text>
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

        <Animated.View style={[s.body, { opacity: fade }]}>
          <View style={s.mockWrap}>{slide.render()}</View>
          <Text style={s.title}>{slide.title}</Text>
          <Text style={s.text}>{slide.body}</Text>
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
  body: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
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
  tapHint: { position: 'absolute', left: 92, bottom: 2 },
  tapHintText: { fontSize: 22 },
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
