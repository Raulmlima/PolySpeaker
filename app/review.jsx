import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, KeyboardAvoidingView, Platform, BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import * as Speech from 'expo-speech';
import { LANGUAGES } from '../src/storage';
import { checkAnswer } from '../src/utils/compare';
import { getReviewsDue, markReviewCorrect, markReviewWrong } from '../src/db/database';
import { playCorrect, playWrong } from '../src/utils/sounds';
import { C } from '../src/theme';

export default function ReviewScreen() {
  const router = useRouter();
  const db = useSQLiteContext();
  const [items, setItems] = useState(null);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null); // null | 'correct' | 'incorrect'
  const [done, setDone] = useState(false);
  const [correct, setCorrect] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    getReviewsDue(db).then(rows => {
      setItems(rows);
    }).catch(() => setItems([]));
  }, []);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      router.back();
      return true;
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (items?.length && !done) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [idx, items]);

  if (items === null) {
    return (
      <SafeAreaView style={s.safe}>
        <Text style={s.loading}>Carregando revisão…</Text>
      </SafeAreaView>
    );
  }

  if (items.length === 0 || done) {
    const total = items.length;
    return (
      <SafeAreaView style={s.safe}>
        <ScrollView contentContainerStyle={s.doneScroll}>
          <Text style={s.doneEmoji}>{done && correct === total ? '🎉' : done ? '📚' : '✓'}</Text>
          <Text style={s.doneTitle}>
            {!done ? 'Nada para revisar hoje!' : 'Revisão concluída!'}
          </Text>
          {done && (
            <Text style={s.doneScore}>
              {correct}/{total} corretas
            </Text>
          )}
          <Text style={s.doneBody}>
            {!done
              ? 'Você está em dia. Continue praticando os módulos regulares para acumular frases para revisar.'
              : correct === total
                ? 'Excelente! Memória de trabalho em dia. As frases acertadas serão revisitadas em intervalos maiores.'
                : 'As frases erradas serão revisadas novamente amanhã. Persistência é a chave do aprendizado real.'}
          </Text>
          <Text style={s.doneRef}>
            Baseado em Ebbinghaus (1885) — repetição espaçada dobra a retenção.
          </Text>
          <TouchableOpacity style={s.doneBtn} onPress={() => router.back()}>
            <Text style={s.doneBtnText}>Voltar ao início</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const item = items[idx];
  const isLast = idx >= items.length - 1;
  const langInfo = LANGUAGES.find(l => l.id === item.language) ?? LANGUAGES[0];

  async function handleSubmit() {
    if (!input.trim() || feedback) return;
    const ok = checkAnswer(input, [item.correct_answer]);
    setFeedback(ok ? 'correct' : 'incorrect');
    if (ok) {
      playCorrect();
      setCorrect(c => c + 1);
      await markReviewCorrect(db, item.id, item.review_count).catch(() => {});
    } else {
      playWrong();
      await markReviewWrong(db, item.id).catch(() => {});
    }
    inputRef.current?.blur();
  }

  function handleNext() {
    setInput('');
    setFeedback(null);
    if (isLast) {
      setDone(true);
    } else {
      setIdx(i => i + 1);
    }
  }

  function speak() {
    Speech.stop();
    const ttsText = langInfo.id === 'zh' && item.correct_answer?.includes(' — ')
      ? item.correct_answer.split(' — ').pop().trim()
      : item.correct_answer;
    Speech.speak(ttsText, { language: langInfo.tts, rate: 0.85 });
  }

  const progress = (idx + (feedback ? 1 : 0)) / items.length;
  const reviewLabel = item.review_count === 0
    ? '1ª revisão'
    : item.review_count === 1
      ? '2ª revisão'
      : item.review_count === 2
        ? '3ª revisão'
        : 'Revisão final';

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()} style={s.backBtn}>
          <Text style={s.backBtnText}>✕ Sair</Text>
        </TouchableOpacity>
        <View style={s.headerCenter}>
          <Text style={s.headerTitle}>Revisão SRS</Text>
          <Text style={s.headerMeta}>{idx + 1}/{items.length} · {reviewLabel}</Text>
        </View>
        <View style={{ width: 70 }} />
      </View>

      <View style={s.progressBar}>
        <View style={[s.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={s.scroll} keyboardShouldPersistTaps="handled">

          <View style={s.contextBadge}>
            <Text style={s.contextBadgeText}>
              Módulo: {item.module_id.replace(/-/g, ' ')}
            </Text>
          </View>

          <View style={s.promptBox}>
            <Text style={s.promptLabel}>
              {langInfo.reverseMode ? 'Como se diz em português?' : `Traduza para o ${langInfo.label?.toLowerCase()}`}
            </Text>
            <Text style={s.promptText}>{item.prompt}</Text>
          </View>

          <TextInput
            ref={inputRef}
            style={[
              s.input,
              feedback === 'correct' && s.inputCorrect,
              feedback === 'incorrect' && s.inputIncorrect,
            ]}
            placeholder="Escreva a tradução..."
            placeholderTextColor={C.textMuted}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmit}
            returnKeyType="done"
            editable={!feedback}
            autoCapitalize="none"
            multiline
          />

          {!feedback ? (
            <TouchableOpacity
              style={[s.verifyBtn, !input.trim() && s.btnDisabled]}
              onPress={handleSubmit}
              disabled={!input.trim()}>
              <Text style={s.verifyBtnText}>Verificar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={s.nextBtn} onPress={handleNext}>
              <Text style={s.nextBtnText}>
                {isLast ? 'Concluir revisão ✓' : 'Próxima →'}
              </Text>
            </TouchableOpacity>
          )}

          {feedback === 'correct' && (
            <View style={[s.feedbackBox, s.feedbackCorrect]}>
              <Text style={s.feedbackLabel}>✓ Correto! A frase está agendada para revisão em {
                item.review_count + 1 >= 3 ? '14 dias' :
                item.review_count + 1 === 2 ? '7 dias' :
                item.review_count + 1 === 1 ? '3 dias' : '1 dia'
              }.</Text>
              <View style={s.answerRow}>
                <Text style={s.feedbackAnswer}>{item.correct_answer}</Text>
                <TouchableOpacity onPress={speak} hitSlop={{top:10,bottom:10,left:10,right:10}}>
                  <Text style={s.speakerIcon}>🔊</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {feedback === 'incorrect' && (
            <View style={[s.feedbackBox, s.feedbackIncorrect]}>
              <Text style={s.feedbackLabel}>✗ Incorreto — frase volta para revisão amanhã.</Text>
              <View style={s.answerRow}>
                <Text style={s.feedbackAnswer}>{item.correct_answer}</Text>
                <TouchableOpacity onPress={speak} hitSlop={{top:10,bottom:10,left:10,right:10}}>
                  <Text style={s.speakerIcon}>🔊</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{ height: 60 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  loading: { padding: 24, fontFamily: 'serif', color: C.textMuted, textAlign: 'center', marginTop: 40 },
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 12,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  headerMeta: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, marginTop: 2 },
  backBtn: { paddingVertical: 6, paddingHorizontal: 10, minWidth: 70 },
  backBtnText: { fontFamily: 'serif', fontSize: 14, color: C.incorrect, fontWeight: '700' },
  progressBar: { height: 3, backgroundColor: C.border },
  progressFill: { height: 3, backgroundColor: '#8B6F47' },
  scroll: { paddingHorizontal: 22, paddingTop: 20 },
  contextBadge: {
    alignSelf: 'flex-start',
    borderWidth: 1, borderColor: C.border, borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 4, marginBottom: 16,
  },
  contextBadgeText: { fontFamily: 'serif', fontSize: 11, color: C.textMuted },
  promptBox: { marginBottom: 22 },
  promptLabel: {
    fontFamily: 'serif', fontSize: 10, color: C.textMuted,
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12,
  },
  promptText: { fontFamily: 'serif', fontSize: 22, color: C.text, fontWeight: '600', lineHeight: 32 },
  input: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8,
    paddingHorizontal: 16, paddingVertical: 14,
    fontFamily: 'serif', fontSize: 17, color: C.text,
    backgroundColor: C.bgAlt, minHeight: 62, marginBottom: 14,
  },
  inputCorrect: { borderColor: C.correct, backgroundColor: C.correctBg },
  inputIncorrect: { borderColor: C.incorrect, backgroundColor: C.incorrectBg },
  verifyBtn: {
    backgroundColor: C.accent, borderRadius: 8,
    paddingVertical: 15, alignItems: 'center', marginBottom: 16,
  },
  btnDisabled: { opacity: 0.35 },
  verifyBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  nextBtn: {
    backgroundColor: C.correct, borderRadius: 8,
    paddingVertical: 15, alignItems: 'center', marginBottom: 16,
  },
  nextBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  feedbackBox: { borderRadius: 8, padding: 16, marginBottom: 12 },
  feedbackCorrect: { backgroundColor: C.correctBg, borderLeftWidth: 4, borderLeftColor: C.correct },
  feedbackIncorrect: { backgroundColor: C.incorrectBg, borderLeftWidth: 4, borderLeftColor: C.incorrect },
  feedbackLabel: { fontFamily: 'serif', fontSize: 13, fontWeight: '700', color: C.text, marginBottom: 8 },
  answerRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  feedbackAnswer: { fontFamily: 'serif', fontSize: 18, color: C.text, fontWeight: '600', flex: 1 },
  speakerIcon: { fontSize: 20 },
  // Done screen
  doneScroll: { padding: 32, alignItems: 'center', justifyContent: 'center', flex: 1 },
  doneEmoji: { fontSize: 56, marginBottom: 16 },
  doneTitle: { fontFamily: 'serif', fontSize: 26, fontWeight: '700', color: C.text, textAlign: 'center', marginBottom: 8 },
  doneScore: { fontFamily: 'serif', fontSize: 18, color: C.accent, fontWeight: '600', marginBottom: 16 },
  doneBody: { fontFamily: 'serif', fontSize: 15, color: C.textMuted, textAlign: 'center', lineHeight: 24, marginBottom: 20 },
  doneRef: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, fontStyle: 'italic', textAlign: 'center', marginBottom: 32 },
  doneBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 15, paddingHorizontal: 40, alignItems: 'center' },
  doneBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
});
