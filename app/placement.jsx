import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Keyboard, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { PLACEMENT_QUESTIONS, scorePlacement, levelFromScore } from '../src/data/placement';
import { getProfile, saveProfile, LANGUAGES } from '../src/storage';
import { C } from '../src/theme';

function getISOWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

const LEVEL_LABELS = { iniciante: 'Iniciante', basico: 'Básico', intermediario: 'Intermediário', avancado: 'Avançado' };
const LEVEL_DESC = {
  iniciante: 'Comece pelos fundamentos — as bases do idioma.',
  basico: 'Você já tem algum vocabulário. Pule direto para o estágio Básico.',
  intermediario: 'Bom nível! Comece no Intermediário e se desafie.',
  avancado: 'Excelente! Vá direto para o Avançado.',
};

export default function PlacementScreen() {
  const router = useRouter();
  const { lang, fromProfile } = useLocalSearchParams();
  const activeLang = lang ?? 'es';
  const questions = PLACEMENT_QUESTIONS[activeLang] ?? PLACEMENT_QUESTIONS.es;
  const langInfo = LANGUAGES.find(l => l.id === activeLang);
  const langLabel = langInfo?.label ?? 'Espanhol';
  const isReverse = langInfo?.reverseMode ?? false;
  const targetLang = isReverse ? 'português' : langLabel.toLowerCase();

  const [phase, setPhase] = useState('intro'); // intro | test | result
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState([]);
  const [skipped, setSkipped] = useState([]);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  function startTest() { setPhase('test'); setTimeout(() => inputRef.current?.focus(), 300); }

  function submitAnswer(skip = false) {
    Keyboard.dismiss();
    const ans = skip ? '' : input.trim();
    const newAnswers = [...answers, ans];
    const newSkipped = [...skipped, skip];
    if (idx + 1 < questions.length) {
      setAnswers(newAnswers);
      setSkipped(newSkipped);
      setInput('');
      setIdx(i => i + 1);
      setTimeout(() => inputRef.current?.focus(), 200);
    } else {
      setAnswers(newAnswers); // garante que o breakdown usa todas as 20 respostas
      const score = scorePlacement(newAnswers, questions);
      const level = levelFromScore(score);
      setResult({ score, level });
      setPhase('result');
      saveResult(score, level);
    }
  }

  async function saveResult(score, level) {
    try {
      const p = (await getProfile()) ?? { language: activeLang, level: 'iniciante' };
      const week = getISOWeekKey();
      const history = p.placementHistory ?? [];
      const existing = history.findIndex(h => h.week === week && h.lang === activeLang);
      const entry = { week, lang: activeLang, score, level, date: new Date().toISOString() };
      if (existing >= 0) history[existing] = entry;
      else history.push(entry);
      await saveProfile({ ...p, placementHistory: history, level });
    } catch (e) { console.warn('placement save error', e); }
  }

  async function applyLevel() {
    router.replace('/');
  }

  const q = questions[idx];
  const progress = (idx + 1) / questions.length;

  if (phase === 'intro') return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Teste de Nivelamento</Text>
        <View style={{ width: 70 }} />
      </View>
      <ScrollView contentContainerStyle={styles.introScroll}>
        <Text style={styles.introLang}>
          {isReverse
            ? (langInfo?.group === 'ar' ? 'عربي → Português' : 'English → Português')
            : `Português → ${langLabel}`}
        </Text>
        <Text style={styles.introTitle}>Descubra o seu nível real</Text>
        <Text style={styles.introBody}>
          20 perguntas de tradução, do básico ao avançado.{'\n\n'}
          Não precisa saber tudo — responda o que conseguir e pule o resto.
          O teste detecta automaticamente onde você deve começar.{'\n\n'}
          Você pode repetir o teste uma vez por semana para acompanhar sua evolução.
        </Text>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}><Text style={styles.infoNum}>20</Text><Text style={styles.infoLabel}>perguntas</Text></View>
          <View style={styles.infoBox}><Text style={styles.infoNum}>~5</Text><Text style={styles.infoLabel}>minutos</Text></View>
          <View style={styles.infoBox}><Text style={styles.infoNum}>1×</Text><Text style={styles.infoLabel}>por semana</Text></View>
        </View>
        <TouchableOpacity style={styles.startBtn} onPress={startTest}>
          <Text style={styles.startBtnText}>Começar teste</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  if (phase === 'result') return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={{ width: 70 }} />
        <Text style={styles.headerTitle}>Resultado</Text>
        <View style={{ width: 70 }} />
      </View>
      <ScrollView contentContainerStyle={styles.resultScroll}>
        <Text style={styles.resultScore}>{result.score}/20</Text>
        <Text style={styles.resultScoreSub}>respostas corretas</Text>
        <View style={styles.resultLevelBox}>
          <Text style={styles.resultLevelLabel}>O SEU NÍVEL</Text>
          <Text style={styles.resultLevel}>{LEVEL_LABELS[result.level]}</Text>
          <Text style={styles.resultLevelDesc}>{LEVEL_DESC[result.level]}</Text>
        </View>
        <View style={styles.scoreBreakdown}>
          {[
            { label: 'Fundamentos', q: 5, from: 0 },
            { label: 'Básico', q: 5, from: 5 },
            { label: 'Intermediário', q: 5, from: 10 },
            { label: 'Avançado', q: 5, from: 15 },
          ].map(({ label, q: count, from }) => {
            const sectionAnswers = answers.slice(from, from + count);
            const correct = scorePlacement(sectionAnswers, questions.slice(from, from + count));
            return (
              <View key={label} style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>{label}</Text>
                <View style={styles.breakdownBar}>
                  <View style={[styles.breakdownFill, { width: `${(correct / count) * 100}%` }]} />
                </View>
                <Text style={styles.breakdownScore}>{correct}/{count}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.applyBtn} onPress={applyLevel}>
          <Text style={styles.applyBtnText}>Ir para a trilha →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          Alert.alert('Sair do teste?', 'O progresso será perdido.', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Sair', onPress: () => router.back() },
          ]);
        }} style={styles.backBtn}>
          <Text style={styles.backBtnText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{idx + 1} / {questions.length}</Text>
        <View style={{ width: 70 }} />
      </View>

      <View style={styles.progressBarWrap}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <ScrollView contentContainerStyle={styles.testScroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.diffLabel}>{
          idx < 5 ? 'Fundamentos' : idx < 10 ? 'Básico' : idx < 15 ? 'Intermediário' : 'Avançado'
        }</Text>
        <Text style={styles.questionPrompt}>{q.prompt}</Text>
        <Text style={styles.questionHint}>Traduza para o {targetLang}:</Text>

        <TextInput
          ref={inputRef}
          style={styles.answerInput}
          value={input}
          onChangeText={setInput}
          placeholder={`Em ${targetLang}...`}
          placeholderTextColor={C.textMuted}
          autoCapitalize="none"
          multiline
          onSubmitEditing={() => input.trim() && submitAnswer()}
        />

        <TouchableOpacity
          style={[styles.submitBtn, !input.trim() && styles.btnDisabled]}
          onPress={() => submitAnswer()}
          disabled={!input.trim()}>
          <Text style={styles.submitBtnText}>
            {idx + 1 < questions.length ? 'Próxima →' : 'Ver resultado →'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipBtn} onPress={() => submitAnswer(true)}>
          <Text style={styles.skipBtnText}>Não sei — saltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  backBtn: { minWidth: 70 },
  backBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  headerTitle: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: C.text },
  progressBarWrap: { height: 3, backgroundColor: C.border },
  progressFill: { height: 3, backgroundColor: C.accent },

  introScroll: { padding: 24 },
  introLang: { fontFamily: 'serif', fontSize: 11, color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  introTitle: { fontFamily: 'serif', fontSize: 26, fontWeight: '700', color: C.text, marginBottom: 16, lineHeight: 32 },
  introBody: { fontFamily: 'serif', fontSize: 15, color: C.textMuted, lineHeight: 24, marginBottom: 28 },
  infoRow: { flexDirection: 'row', gap: 12, marginBottom: 32 },
  infoBox: { flex: 1, backgroundColor: C.bgAlt, borderRadius: 10, padding: 16, borderWidth: 1, borderColor: C.border, alignItems: 'center' },
  infoNum: { fontFamily: 'serif', fontSize: 24, fontWeight: '700', color: C.accent },
  infoLabel: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, marginTop: 2 },
  startBtn: { backgroundColor: C.accent, borderRadius: 10, paddingVertical: 16, alignItems: 'center' },
  startBtnText: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: '#fff' },

  testScroll: { padding: 24 },
  diffLabel: { fontFamily: 'serif', fontSize: 10, color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 },
  questionPrompt: { fontFamily: 'serif', fontSize: 22, fontWeight: '700', color: C.text, lineHeight: 30, marginBottom: 8 },
  questionHint: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 20 },
  answerInput: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 10,
    paddingHorizontal: 16, paddingVertical: 14,
    fontFamily: 'serif', fontSize: 17, color: C.text,
    backgroundColor: C.bgAlt, minHeight: 64, marginBottom: 14,
  },
  submitBtn: { backgroundColor: C.accent, borderRadius: 10, paddingVertical: 15, alignItems: 'center', marginBottom: 10 },
  btnDisabled: { opacity: 0.35 },
  submitBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  skipBtn: { paddingVertical: 12, alignItems: 'center' },
  skipBtnText: { fontFamily: 'serif', fontSize: 14, color: C.textMuted },

  resultScroll: { padding: 24, alignItems: 'center' },
  resultScore: { fontFamily: 'serif', fontSize: 64, fontWeight: '700', color: C.accent, marginTop: 8 },
  resultScoreSub: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, marginBottom: 28 },
  resultLevelBox: {
    width: '100%', backgroundColor: C.accentLight, borderRadius: 12,
    borderWidth: 1, borderColor: C.accent, padding: 20, marginBottom: 24, alignItems: 'center',
  },
  resultLevelLabel: { fontFamily: 'serif', fontSize: 10, color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  resultLevel: { fontFamily: 'serif', fontSize: 32, fontWeight: '700', color: C.accent, marginBottom: 8 },
  resultLevelDesc: { fontFamily: 'serif', fontSize: 14, color: C.text, textAlign: 'center', lineHeight: 20 },
  scoreBreakdown: { width: '100%', marginBottom: 28 },
  breakdownRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 10 },
  breakdownLabel: { fontFamily: 'serif', fontSize: 13, color: C.text, width: 110 },
  breakdownBar: { flex: 1, height: 6, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  breakdownFill: { height: 6, backgroundColor: C.accent, borderRadius: 3 },
  breakdownScore: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, width: 28, textAlign: 'right' },
  applyBtn: { width: '100%', backgroundColor: C.correct, borderRadius: 10, paddingVertical: 16, alignItems: 'center' },
  applyBtnText: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: '#fff' },
});
