import React, { useState, useRef, useEffect } from 'react';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet, Animated, Easing, ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Poly from './Poly';
import { C, cardShadow } from '../theme';
import { t, getUILang } from '../utils/uiLang';

// First-run tutorial. Each slide pairs a short explanation with a miniature
// of the real UI, so the concept is shown rather than only described.
//
// Text follows the DEVICE's system language (pt/en/ar, English as fallback)
// — separate from whichever language the user ends up studying — so a
// first-time user understands onboarding before they've learned anything.

// These mockups are fixed-size illustrative diagrams, not real content — they
// shouldn't reflow when the device's system text-size (accessibility) setting
// is increased, or the tight hand-tuned layout breaks.
function MockText(props) {
  return <Text allowFontScaling={false} {...props} />;
}

const TR = {
  pt: {
    header: 'Como funciona', skip: 'Pular', back: '← Voltar', next: 'Próximo →', start: 'Começar a estudar',
    slides: [
      { title: 'Sua trilha, etapa por etapa', body: 'O conteúdo vai de Fundamentos a Avançado. Cada etapa reúne módulos que você desbloqueia no seu ritmo — o Poly marca onde você parou.' },
      { title: 'Módulos em blocos de 5 frases', body: 'Cada módulo tem 3 ou 4 exercícios, e cada exercício traz 5 frases. Dá pra avançar um bloco de cada vez, mesmo com pouco tempo.' },
      { title: 'Travou numa palavra? Toque nela', body: 'Qualquer palavra da frase pode ser tocada para ver a tradução na hora, sem sair do exercício e sem precisar de dicionário.' },
      { title: 'O que você erra, você revê', body: 'Toda frase errada entra na Revisão e volta em intervalos crescentes. É repetição espaçada — o método com mais evidência para fixar de verdade.' },
    ],
    trail: { stage: 'Fundamentos', stageSub: 'As bases do idioma', nodes: ['Artigos e substantivos', 'Ser e estar', 'Presente simples'] },
    exercises: { module: 'Ser e estar', exLabel: 'Exercício', sentences: '5 frases' },
    tap: { label: 'TRADUZA PARA O PORTUGUÊS', bubbleWord: 'apple', bubbleTrans: 'maçã', words: ['I', 'eat', 'an', 'apple', 'every', 'day.'], tappedIdx: 3, caption: '👆 toque em qualquer palavra pra ver a tradução' },
    review: { title: 'Revisão', sub: 'frases que você errou', steps: ['1 dia', '3 dias', '7 dias', '14 dias'], caption: 'Cada acerto adia a próxima revisão — o que você quase esquece volta na hora certa.' },
  },
  en: {
    header: 'How it works', skip: 'Skip', back: '← Back', next: 'Next →', start: 'Start studying',
    slides: [
      { title: 'Your path, stage by stage', body: 'Content goes from Fundamentals to Advanced. Each stage groups modules you unlock at your own pace — Poly marks where you left off.' },
      { title: 'Modules in blocks of 5 sentences', body: 'Each module has 3 or 4 exercises, and each exercise has 5 sentences. You can move one block at a time, even with little time.' },
      { title: 'Stuck on a word? Tap it', body: 'Any word in a sentence can be tapped to see its translation instantly, without leaving the exercise and without needing a dictionary.' },
      { title: 'What you get wrong, you review', body: 'Every wrong sentence goes into Review and comes back at growing intervals. That’s spaced repetition — the method with the most evidence behind it.' },
    ],
    trail: { stage: 'Fundamentals', stageSub: 'The basics of the language', nodes: ['Articles and nouns', 'To be & to have', 'Simple present'] },
    exercises: { module: 'To be & to have', exLabel: 'Exercise', sentences: '5 sentences' },
    tap: { label: 'TRANSLATE TO PORTUGUESE', bubbleWord: 'apple', bubbleTrans: 'maçã', words: ['I', 'eat', 'an', 'apple', 'every', 'day.'], tappedIdx: 3, caption: '👆 tap any word to see its translation' },
    review: { title: 'Review', sub: 'sentences you got wrong', steps: ['1 day', '3 days', '7 days', '14 days'], caption: 'Every correct answer pushes the next review further out — what you’re about to forget comes back right on time.' },
  },
  ar: {
    header: 'كيف يعمل التطبيق', skip: 'تخطي', back: '→ رجوع', next: 'التالي ←', start: 'ابدأ الدراسة',
    slides: [
      { title: 'مسارك، مرحلة بمرحلة', body: 'يمتد المحتوى من الأساسيات إلى المستوى المتقدم. تضم كل مرحلة وحدات تفتحها بالوتيرة التي تناسبك — ويحدد بولي أين توقفت.' },
      { title: 'وحدات في مجموعات من 5 جمل', body: 'تحتوي كل وحدة على 3 أو 4 تمارين، وكل تمرين يضم 5 جمل. يمكنك التقدم مجموعة تلو الأخرى، حتى مع وقت قصير.' },
      { title: 'توقفت عند كلمة؟ اضغط عليها', body: 'يمكن الضغط على أي كلمة في الجملة لرؤية ترجمتها فورًا، دون مغادرة التمرين ودون الحاجة إلى قاموس.' },
      { title: 'ما تخطئ فيه، تراجعه', body: 'كل جملة خاطئة تدخل في المراجعة وتعود على فترات متزايدة — هذا هو التكرار المتباعد، الطريقة الأكثر إثباتًا علميًا لترسيخ التعلم.' },
    ],
    trail: { stage: 'الأساسيات', stageSub: 'أساسيات اللغة', nodes: ['أدوات التعريف والأسماء', 'الكينونة والامتلاك', 'المضارع البسيط'] },
    exercises: { module: 'الكينونة والامتلاك', exLabel: 'تمرين', sentences: '5 جمل' },
    tap: { label: 'ترجم إلى البرتغالية', bubbleWord: 'apple', bubbleTrans: 'maçã', words: ['I', 'eat', 'an', 'apple', 'every', 'day.'], tappedIdx: 3, caption: '👆 اضغط على أي كلمة لرؤية ترجمتها' },
    review: { title: 'المراجعة', sub: 'الجمل التي أخطأت فيها', steps: ['يوم واحد', '3 أيام', '7 أيام', '14 يومًا'], caption: 'كل إجابة صحيحة تؤجل المراجعة التالية — ما توشك على نسيانه يعود في الوقت المناسب.' },
  },
};

function MiniTrail({ L }) {
  const states = ['done', 'current', 'todo'];
  const nodes = L.trail.nodes.map((label, i) => ({ n: String(i + 1), label, state: states[i] }));
  return (
    <View style={mk.card}>
      <View style={mk.stageHeader}>
        <View style={mk.ring}><MockText style={mk.ringText}>40%</MockText></View>
        <View style={{ flex: 1 }}>
          <MockText style={mk.stageTitle}>{L.trail.stage}</MockText>
          <MockText style={mk.stageSub}>{L.trail.stageSub}</MockText>
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

function MiniExercises({ L }) {
  const rows = [1, 2, 3, 4].map(n => ({ t: `${L.exercises.exLabel} ${n}`, s: L.exercises.sentences, done: n <= 2 }));
  return (
    <View style={mk.card}>
      <MockText style={mk.moduleName}>{L.exercises.module}</MockText>
      <View style={mk.exList}>
        {rows.map(ex => (
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

function MiniTapWord({ L, isRTL }) {
  const pulse = useRef(new Animated.Value(0)).current;
  const [wordRect, setWordRect] = useState(null); // { x, y, width } relative to the card
  const [bubbleSize, setBubbleSize] = useState({ width: 0, height: 0 });
  const [tapped, setTapped] = useState(false); // this mockup is a real tap target, not an auto-shown demo

  useEffect(() => {
    if (tapped) return; // stop hinting once they've actually tapped it
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 900, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0, duration: 900, easing: Easing.in(Easing.quad), useNativeDriver: true }),
      ])
    ).start();
  }, [tapped]);

  // Same technique as the real tap-to-translate feature: measure the actual
  // word's position and place the bubble above THAT, instead of guessing —
  // a static offset breaks the moment font/text/device differs.
  const bubbleLeft = wordRect
    ? Math.max(0, Math.min(wordRect.x + wordRect.width / 2 - bubbleSize.width / 2, 300 - bubbleSize.width))
    : 0;
  const arrowLeft = wordRect
    ? Math.max(10, Math.min(wordRect.x + wordRect.width / 2 - bubbleLeft - 7, bubbleSize.width - 20))
    : 10;
  const bubbleTop = wordRect ? Math.max(0, wordRect.y - bubbleSize.height - 10) : 0;

  return (
    <View style={mk.card}>
      <Text style={mk.promptLabel} allowFontScaling={false}>{L.tap.label}</Text>

      {tapped && wordRect && (
        <View
          style={[mk.bubbleWrapAbs, { left: bubbleLeft, top: bubbleTop }]}
          onLayout={e => setBubbleSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height - 7 })}>
          <View style={mk.bubble}>
            <Text style={mk.bubbleText} allowFontScaling={false}>
              <Text style={mk.bubbleWord}>{L.tap.bubbleWord}</Text> = {L.tap.bubbleTrans}
            </Text>
          </View>
          <View style={[mk.bubbleArrow, { marginLeft: arrowLeft }]} />
        </View>
      )}

      <View style={[mk.promptRow, isRTL && mk.promptRowRTL]}>
        {L.tap.words.map((w, i) => {
          const isTappable = i === L.tap.tappedIdx;
          const wordText = (
            <Text
              key={i}
              allowFontScaling={false}
              suppressHighlighting={isTappable}
              onPress={isTappable ? () => setTapped(v => !v) : undefined}
              onLayout={isTappable ? e => setWordRect(e.nativeEvent.layout) : undefined}
              style={[mk.promptText, isTappable && (tapped ? mk.tappedWordActive : mk.tappedWord)]}>
              {w}
            </Text>
          );
          if (!isTappable) return wordText;
          return (
            <Animated.View key={i} style={{
              transform: [{ scale: pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.06] }) }],
            }}>
              {wordText}
            </Animated.View>
          );
        })}
      </View>

      <Text style={mk.tapCaption} allowFontScaling={false}>{L.tap.caption}</Text>
    </View>
  );
}

function MiniReview({ L }) {
  return (
    <View style={mk.card}>
      <View style={mk.reviewHeader}>
        <MockText style={mk.reviewIcon}>📚</MockText>
        <View style={{ flex: 1 }}>
          <MockText style={mk.reviewTitle}>{L.review.title}</MockText>
          <MockText style={mk.reviewSub}>{L.review.sub}</MockText>
        </View>
        <View style={mk.badge}><MockText style={mk.badgeText}>5</MockText></View>
      </View>
      <View style={mk.srsRow}>
        {L.review.steps.map((d, i) => (
          <View key={d} style={mk.srsStep}>
            <View style={[mk.srsDot, i === 0 && mk.srsDotActive]} />
            <MockText style={[mk.srsLabel, i === 0 && mk.srsLabelActive]}>{d}</MockText>
          </View>
        ))}
      </View>
      <MockText style={mk.srsCaption}>{L.review.caption}</MockText>
    </View>
  );
}

export default function TutorialOverlay({ visible, onFinish }) {
  const [idx, setIdx] = useState(0);
  const fade = useRef(new Animated.Value(1)).current;
  const L = t(TR);
  const isRTL = getUILang() === 'ar';
  const SLIDES = L.slides.map((sl, i) => ({
    key: ['trilha', 'exercicios', 'toque', 'revisao'][i],
    title: sl.title,
    body: sl.body,
    render: () => [
      <MiniTrail L={L} key="trilha" />,
      <MiniExercises L={L} key="exercicios" />,
      <MiniTapWord L={L} isRTL={isRTL} key="toque" />,
      <MiniReview L={L} key="revisao" />,
    ][i],
  }));
  const isLast = idx === SLIDES.length - 1;
  // SafeAreaView doesn't reliably pick up safe-area insets for content
  // presented inside a <Modal> on iOS (it portals to a separate native root)
  // — read the insets explicitly instead so the title never sits under the
  // notch/Dynamic Island and the button never hugs the home-indicator edge.
  const insets = useSafeAreaInsets();

  function go(next) {
    Animated.timing(fade, { toValue: 0, duration: 130, useNativeDriver: true }).start(() => {
      setIdx(next);
      Animated.timing(fade, { toValue: 1, duration: 180, useNativeDriver: true }).start();
    });
  }

  const slide = SLIDES[idx];

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onFinish}>
      <View style={[s.safe, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View style={[s.topRow, isRTL && s.rowRTL]}>
          <View style={[s.brandRow, isRTL && s.rowRTL]}>
            <Poly size={22} mood="happy" />
            <Text style={s.brand}>{L.header}</Text>
          </View>
          <TouchableOpacity onPress={onFinish} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={s.skip}>{L.skip}</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={[s.bodyFlex, { opacity: fade }]}>
          <ScrollView
            contentContainerStyle={s.bodyScroll}
            showsVerticalScrollIndicator={false}>
            <View style={s.mockWrap}>{slide.render()}</View>
            <Text style={[s.title, isRTL && s.textRTL]}>{slide.title}</Text>
            <Text style={[s.text, isRTL && s.textRTL]}>{slide.body}</Text>
          </ScrollView>
        </Animated.View>

        <View style={s.dots}>
          {SLIDES.map((sl, i) => (
            <View key={sl.key} style={[s.dot, i === idx && s.dotActive]} />
          ))}
        </View>

        <View style={[s.controls, isRTL && s.rowRTL]}>
          {idx > 0 ? (
            <TouchableOpacity style={s.backBtn} onPress={() => go(idx - 1)}>
              <Text style={s.backText}>{L.back}</Text>
            </TouchableOpacity>
          ) : <View style={s.backBtn} />}
          <TouchableOpacity
            style={s.nextBtn}
            activeOpacity={0.85}
            onPress={() => (isLast ? onFinish() : go(idx + 1))}>
            <Text style={s.nextText}>{isLast ? L.start : L.next}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  topRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 4,
  },
  rowRTL: { flexDirection: 'row-reverse' },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brand: { fontSize: 15, fontWeight: '800', color: C.brand },
  skip: { fontSize: 14, color: C.textMuted, fontWeight: '600' },
  bodyFlex: { flex: 1 },
  bodyScroll: { flexGrow: 1, paddingHorizontal: 24, justifyContent: 'center', paddingVertical: 12 },
  mockWrap: { marginBottom: 28 },
  title: { fontSize: 24, fontWeight: '800', color: C.text, marginBottom: 10, lineHeight: 31 },
  text: { fontSize: 15, color: C.textMuted, lineHeight: 23 },
  textRTL: { textAlign: 'right', writingDirection: 'rtl' },
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
    padding: 16, position: 'relative', ...cardShadow,
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
  promptLabel: { fontSize: 9, color: C.textMuted, letterSpacing: 2, fontWeight: '700', marginBottom: 34 },
  bubbleWrapAbs: { position: 'absolute', alignItems: 'flex-start', zIndex: 10 },
  bubble: { alignSelf: 'flex-start', backgroundColor: C.navy, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  bubbleText: { color: '#fff', fontSize: 13 },
  bubbleWord: { fontWeight: '800' },
  bubbleArrow: {
    width: 0, height: 0, marginLeft: 26,
    borderLeftWidth: 7, borderRightWidth: 7, borderTopWidth: 7,
    borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: C.navy,
    marginBottom: 8,
  },
  promptRow: { flexDirection: 'row', flexWrap: 'wrap' },
  promptRowRTL: { flexDirection: 'row-reverse' },
  promptText: { fontSize: 19, color: C.text, fontWeight: '600', lineHeight: 28, marginRight: 5 },
  tappedWord: { color: C.accent, textDecorationLine: 'underline', textDecorationStyle: 'dotted' },
  tappedWordActive: { color: C.accent, textDecorationLine: 'underline', textDecorationStyle: 'solid', fontWeight: '800' },
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
