import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Linking, ActivityIndicator, Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { getDialogosForLang } from '../../src/data/dialogos';
import { LANGUAGES } from '../../src/storage';
import { normalize } from '../../src/utils/compare';
import { AI_CHECK_URL } from '../../src/utils/aiCheck';
import { C } from '../../src/theme';
import Poly from '../../src/components/Poly';

export default function DialogoExercise() {
  const { level, lang } = useLocalSearchParams();
  const router = useRouter();
  const activeLang = lang ?? 'es';
  const langInfo = LANGUAGES.find(l => l.id === activeLang) ?? LANGUAGES[0];
  const targetKey = activeLang; // lines have l[activeLang] as translation
  const DIALOGOS = getDialogosForLang(activeLang);
  const levelData = DIALOGOS[level];
  const [dIdx, setDIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [dictQuery, setDictQuery] = useState('');
  const [dictResult, setDictResult] = useState(null);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictError, setDictError] = useState(null);
  const dictInputRef = useRef(null);

  if (!levelData || !levelData.dialogos?.length) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.emptyText}>Nenhum diálogo disponível.</Text>
      </SafeAreaView>
    );
  }
  const dialogo = levelData.dialogos[dIdx];
  const line = dialogo?.lines?.[lineIdx];
  const isUserLine = line?.speaker === 'Você';
  const isLastLine = lineIdx >= (dialogo?.lines?.length ?? 1) - 1;
  const isLastDialogo = dIdx >= levelData.dialogos.length - 1;

  function handleVerify() {
    setChecked(true);
  }

  async function searchDict() {
    const word = dictQuery.trim();
    if (!word) return;
    if (word.split(/\s+/).length > 6) {
      setDictError('Use apenas uma palavra ou expressão curta — não frases inteiras.');
      return;
    }
    setDictLoading(true);
    setDictError(null);
    setDictResult(null);
    try {
      const res = await fetch(`${AI_CHECK_URL}/dict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, language: activeLang }),
      });
      const data = await res.json();
      if (!res.ok || !data.translation) throw new Error();
      setDictResult({
        word,
        main: data.translation,
        pronunciation: data.pronunciation ?? '',
        alts: data.alternates ?? [],
      });
    } catch {
      setDictError('Palavra não encontrada ou sem conexão.');
    } finally {
      setDictLoading(false);
    }
  }

  function handleNext() {
    setInput('');
    setChecked(false);
    setDictOpen(false);
    setDictQuery('');
    setDictResult(null);
    if (!isLastLine) {
      setLineIdx(l => l + 1);
    } else if (!isLastDialogo) {
      setDIdx(d => d + 1);
      setLineIdx(0);
    } else {
      router.back();
    }
  }

  function speak(text) {
    Speech.stop();
    Speech.speak(text, { language: langInfo.tts, rate: 0.85 });
  }

  const targetText = line[targetKey] ?? line.es ?? '';

  function askIA() {
    const ctx = `Estou praticando ${langInfo.label} com um diálogo. Contexto: "${dialogo.context}".
A linha original em português é: "${line.pt}"
A tradução correta em ${langInfo.label} é: "${targetText}"
Minha resposta foi: "${input}"
Explique detalhadamente a gramática, vocabulário e expressões naturais desta frase. Se minha resposta tiver erros, explique cada um.`;
    Linking.openURL(`https://claude.ai/new?q=${encodeURIComponent(ctx)}`);
  }

  const userAnswer = normalize(input);
  const correctAnswer = normalize(targetText);
  const isCorrect = userAnswer === correctAnswer;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{dialogo.title}</Text>
          <Text style={styles.headerMeta}>{levelData.label} · {dIdx + 1}/{levelData.dialogos.length}</Text>
        </View>
        <View style={{ width: 70 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        {/* Context */}
        <View style={styles.contextBox}>
          <Text style={styles.contextLabel}>CONTEXTO</Text>
          <Text style={styles.contextText}>{dialogo.context}</Text>
        </View>

        {/* Previous lines */}
        {dialogo.lines.slice(0, lineIdx).map((l, i) => {
          const lt = l[targetKey] ?? l.es ?? '';
          return (
            <View key={i} style={[styles.bubble, l.speaker === 'Você' ? styles.bubbleUser : styles.bubbleOther]}>
              <Text style={styles.bubbleSpeaker}>{l.speaker}</Text>
              <Text style={styles.bubblePt}>{l.pt}</Text>
              <View style={styles.bubbleEsRow}>
                <Text style={styles.bubbleEs}>{lt}</Text>
                <TouchableOpacity onPress={() => speak(lt)} style={styles.speakerBtn}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Text style={styles.speakerIcon}>🔊</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* Current line */}
        <View style={styles.currentBox}>
          <Text style={styles.currentSpeaker}>{line.speaker}</Text>
          <Text style={styles.currentPt}>{line.pt}</Text>

          {isUserLine ? (
            <>
              <TextInput
                style={[
                  styles.input,
                  checked && isCorrect && styles.inputCorrect,
                  checked && !isCorrect && styles.inputIncorrect,
                ]}
                placeholder={`Escreva em ${langInfo.label.toLowerCase()}...`}
                placeholderTextColor={C.textMuted}
                value={input}
                onChangeText={setInput}
                editable={!checked}
                autoCapitalize="none"
                multiline
              />
              {!checked ? (
                <TouchableOpacity
                  style={[styles.verifyBtn, !input.trim() && styles.btnDisabled]}
                  onPress={handleVerify}
                  disabled={!input.trim()}>
                  <Text style={styles.verifyBtnText}>Verificar</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <View style={[styles.feedbackBox, isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect]}>
                    <View style={styles.feedbackRow}>
                      <Text style={styles.feedbackIcon}>{isCorrect ? '✓' : '✗'}</Text>
                      <Text style={styles.feedbackLabel}>{isCorrect ? 'Muito bem!' : 'Resposta correta:'}</Text>
                    </View>
                    {!isCorrect && (
                      <View style={styles.feedbackEsRow}>
                        <Text style={styles.feedbackEs}>{targetText}</Text>
                        <TouchableOpacity onPress={() => speak(targetText)} style={styles.speakerBtn}
                          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                          <Text style={styles.speakerIcon}>🔊</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {isCorrect && (
                      <View style={styles.feedbackEsRow}>
                        <Text style={styles.feedbackEs}>{targetText}</Text>
                        <TouchableOpacity onPress={() => speak(targetText)} style={styles.speakerBtn}
                          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                          <Text style={styles.speakerIcon}>🔊</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                  <TouchableOpacity style={styles.iaBtn} onPress={askIA}>
                    <Text style={styles.iaBtnText}>Tirar dúvida detalhada com IA →</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                    <Text style={styles.nextBtnText}>
                      {isLastLine && isLastDialogo ? 'Concluir' : isLastLine ? 'Próximo diálogo →' : 'Continuar →'}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          ) : (
            // Non-user line: show audio button and advance
            <>
              <TouchableOpacity onPress={() => speak(targetText)} style={styles.npcAudioBtn}>
                <Text style={styles.npcAudioText}>🔊 Ouvir tradução</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                <Text style={styles.nextBtnText}>Continuar →</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        {/* Inline dictionary */}
        <View style={styles.dictSection}>
          <TouchableOpacity
            style={styles.dictToggle}
            onPress={() => {
              Keyboard.dismiss();
              setDictOpen(v => {
                if (!v) setTimeout(() => dictInputRef.current?.focus(), 300);
                return !v;
              });
            }}>
            {!dictOpen && <Poly size={20} mood="neutral" />}
            <Text style={styles.dictToggleText}>
              {dictOpen ? '- Fechar Dicionário Poly' : `Dicionário Poly  PT → ${langInfo.label.split(' ')[0]}`}
            </Text>
          </TouchableOpacity>
          {dictOpen && (
            <View style={styles.dictBody}>
              <View style={styles.dictSearchRow}>
                <TextInput
                  ref={dictInputRef}
                  style={styles.dictInput}
                  placeholder="Palavra em português..."
                  placeholderTextColor={C.textMuted}
                  value={dictQuery}
                  onChangeText={setDictQuery}
                  onSubmitEditing={searchDict}
                  returnKeyType="search"
                  autoCapitalize="none"
                />
                <TouchableOpacity style={styles.dictSearchBtn} onPress={searchDict}>
                  <Text style={styles.dictSearchBtnText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              {dictLoading && <ActivityIndicator color={C.accent} style={{ marginTop: 16 }} />}
              {dictError && <Text style={styles.dictError}>{dictError}</Text>}
              {dictResult && (
                <View style={styles.dictResult}>
                  <Text style={styles.dictArrow}>↓</Text>
                  <View style={styles.dictResultBox}>
                    <Text style={styles.dictMainTrans}>{dictResult.main}</Text>
                    {dictResult.pronunciation ? (
                      <Text style={styles.dictPronunciation}>{dictResult.pronunciation}</Text>
                    ) : null}
                  </View>
                  {dictResult.alts.map((a, i) => (
                    <Text key={i} style={styles.dictAlt}>• {a}</Text>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>

        <View style={{ height: 60 }} />
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
  emptyText: { fontFamily: 'serif', fontSize: 15, color: C.textMuted, textAlign: 'center', marginTop: 40, padding: 24 },
  backBtn: { minWidth: 70 },
  backBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  headerMeta: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, marginTop: 2 },
  scroll: { padding: 18 },
  contextBox: {
    backgroundColor: C.accentLight, borderRadius: 8, padding: 12, marginBottom: 16,
    borderLeftWidth: 3, borderLeftColor: C.accent,
  },
  contextLabel: { fontFamily: 'serif', fontSize: 9, color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  contextText: { fontFamily: 'serif', fontSize: 13, color: C.text, fontStyle: 'italic', lineHeight: 20 },
  bubble: { borderRadius: 8, padding: 12, marginBottom: 8 },
  bubbleOther: { backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border },
  bubbleUser: { backgroundColor: C.accentLight, borderWidth: 1, borderColor: C.accent },
  bubbleSpeaker: { fontFamily: 'serif', fontSize: 10, fontWeight: '700', color: C.textMuted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  bubblePt: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 4 },
  bubbleEsRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  bubbleEs: { fontFamily: 'serif', fontSize: 14, color: C.text, fontWeight: '600', flex: 1 },
  currentBox: { marginTop: 8 },
  currentSpeaker: { fontFamily: 'serif', fontSize: 10, fontWeight: '700', color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  currentPt: { fontFamily: 'serif', fontSize: 20, fontWeight: '600', color: C.text, lineHeight: 28, marginBottom: 16 },
  input: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8,
    paddingHorizontal: 14, paddingVertical: 12,
    fontFamily: 'serif', fontSize: 16, color: C.text,
    backgroundColor: C.bgAlt, minHeight: 56, marginBottom: 12,
  },
  inputCorrect: { borderColor: C.correct, backgroundColor: C.correctBg },
  inputIncorrect: { borderColor: C.incorrect, backgroundColor: C.incorrectBg },
  verifyBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 12 },
  btnDisabled: { opacity: 0.35 },
  verifyBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  feedbackBox: { borderRadius: 8, padding: 14, marginBottom: 10 },
  feedbackCorrect: { backgroundColor: C.correctBg, borderLeftWidth: 4, borderLeftColor: C.correct },
  feedbackIncorrect: { backgroundColor: C.incorrectBg, borderLeftWidth: 4, borderLeftColor: C.incorrect },
  feedbackRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  feedbackIcon: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  feedbackLabel: { fontFamily: 'serif', fontSize: 13, fontWeight: '700', color: C.text },
  feedbackEsRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  feedbackEs: { fontFamily: 'serif', fontSize: 17, fontWeight: '600', color: C.text, flex: 1 },
  speakerBtn: { padding: 4 },
  speakerIcon: { fontSize: 18 },
  iaBtn: {
    borderWidth: 1, borderColor: C.accent, borderRadius: 8,
    paddingVertical: 12, alignItems: 'center', marginBottom: 10,
  },
  iaBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  npcAudioBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: C.border, borderRadius: 8,
    paddingVertical: 12, marginBottom: 10, backgroundColor: C.bgAlt,
  },
  npcAudioText: { fontFamily: 'serif', fontSize: 14, color: C.text },
  nextBtn: { backgroundColor: C.correct, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 10 },
  nextBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  dictSection: { borderTopWidth: 1, borderTopColor: C.border, paddingTop: 12, marginTop: 8 },
  dictToggle: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 6 },
  dictToggleText: { fontFamily: 'serif', fontSize: 14, color: C.accent, fontWeight: '600' },
  dictBody: { marginTop: 12 },
  dictSearchRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  dictInput: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 6,
    paddingHorizontal: 12, paddingVertical: 10,
    fontFamily: 'serif', fontSize: 15, color: C.text, backgroundColor: C.bgAlt,
  },
  dictSearchBtn: { backgroundColor: C.accent, borderRadius: 6, paddingHorizontal: 14, justifyContent: 'center' },
  dictSearchBtnText: { fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: '#fff' },
  dictError: { fontFamily: 'serif', fontSize: 14, color: C.incorrect, textAlign: 'center', marginTop: 8 },
  dictResult: { paddingTop: 4, paddingBottom: 8 },
  dictArrow: { fontSize: 18, color: C.textMuted, textAlign: 'center', marginBottom: 6 },
  dictResultBox: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 6,
    paddingHorizontal: 14, paddingVertical: 12,
    backgroundColor: C.bgAlt, marginBottom: 8,
  },
  dictMainTrans: { fontFamily: 'serif', fontSize: 20, fontWeight: '700', color: C.text },
  dictPronunciation: { fontFamily: 'serif', fontSize: 14, color: C.accent, fontStyle: 'italic', marginTop: 4 },
  dictAlt: { fontFamily: 'serif', fontSize: 14, color: C.accent, marginTop: 4, marginLeft: 2 },
});
