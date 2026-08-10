import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import { getDialogosForLang } from '../../src/data/dialogos';
import { LANGUAGES } from '../../src/storage';
import { checkAnswer } from '../../src/utils/compare';
import { C } from '../../src/theme';
import TappableSentence from '../../src/components/TappableSentence';
import { hasAiConsent, setAiConsent } from '../../src/utils/aiConsent';
import AiConsentModal from '../../src/components/AiConsentModal';

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
  const [aiConsentVisible, setAiConsentVisible] = useState(false);
  const pendingConsentRef = useRef(null);

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

  async function ensureConsent() {
    if (await hasAiConsent()) return true;
    return new Promise(resolve => {
      pendingConsentRef.current = resolve;
      setAiConsentVisible(true);
    });
  }

  function handleNext() {
    setInput('');
    setChecked(false);
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

  const targetRaw = line[targetKey] ?? line.es ?? '';
  const targetAnswers = Array.isArray(targetRaw) ? targetRaw : [targetRaw];
  const targetText = targetAnswers[0];

  function askIA() {
    const ctx = `Estou praticando ${langInfo.label} com um diálogo. Contexto: "${dialogo.context}".
A linha original em português é: "${line.pt}"
A tradução correta em ${langInfo.label} é: "${targetText}"
Minha resposta foi: "${input}"
Explique detalhadamente a gramática, vocabulário e expressões naturais desta frase. Se minha resposta tiver erros, explique cada um.`;
    Linking.openURL(`https://claude.ai/new?q=${encodeURIComponent(ctx)}`);
  }

  const isCorrect = checkAnswer(input, targetAnswers);

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
          const lRaw = l[targetKey] ?? l.es ?? '';
          const lt = Array.isArray(lRaw) ? lRaw[0] : lRaw;
          return (
            <View key={i} style={[styles.bubble, l.speaker === 'Você' ? styles.bubbleUser : styles.bubbleOther]}>
              <Text style={styles.bubbleSpeaker}>{l.speaker}</Text>
              <Text style={styles.bubblePt}>{l.pt}</Text>
              <View style={styles.bubbleEsRow}>
                <TappableSentence text={lt} language={activeLang} textStyle={styles.bubbleEs} ensureConsent={ensureConsent} />
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
                    <View style={styles.feedbackEsRow}>
                      <TappableSentence text={targetText} language={activeLang} textStyle={styles.feedbackEs} ensureConsent={ensureConsent} />
                      <TouchableOpacity onPress={() => speak(targetText)} style={styles.speakerBtn}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                        <Text style={styles.speakerIcon}>🔊</Text>
                      </TouchableOpacity>
                    </View>
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
        <View style={{ height: 60 }} />
      </ScrollView>

      <AiConsentModal
        visible={aiConsentVisible}
        onAccept={async () => {
          await setAiConsent();
          setAiConsentVisible(false);
          pendingConsentRef.current?.(true);
          pendingConsentRef.current = null;
        }}
        onDecline={() => {
          setAiConsentVisible(false);
          pendingConsentRef.current?.(false);
          pendingConsentRef.current = null;
        }}
      />
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
  emptyText: { fontSize: 15, color: C.textMuted, textAlign: 'center', marginTop: 40, padding: 24 },
  backBtn: { minWidth: 70 },
  backBtnText: { fontSize: 14, color: C.accent },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 15, fontWeight: '700', color: C.text },
  headerMeta: { fontSize: 11, color: C.textMuted, marginTop: 2 },
  scroll: { padding: 18 },
  contextBox: {
    backgroundColor: C.accentLight, borderRadius: 8, padding: 12, marginBottom: 16,
    borderLeftWidth: 3, borderLeftColor: C.accent,
  },
  contextLabel: { fontSize: 9, color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  contextText: { fontSize: 13, color: C.text, fontStyle: 'italic', lineHeight: 20 },
  bubble: { borderRadius: 8, padding: 12, marginBottom: 8 },
  bubbleOther: { backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border },
  bubbleUser: { backgroundColor: C.accentLight, borderWidth: 1, borderColor: C.accent },
  bubbleSpeaker: { fontSize: 10, fontWeight: '700', color: C.textMuted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  bubblePt: { fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 4 },
  bubbleEsRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  bubbleEs: { fontSize: 14, color: C.text, fontWeight: '600', flex: 1 },
  currentBox: { marginTop: 8 },
  currentSpeaker: { fontSize: 10, fontWeight: '700', color: C.accent, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  currentPt: { fontSize: 20, fontWeight: '600', color: C.text, lineHeight: 28, marginBottom: 16 },
  input: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 16, color: C.text,
    backgroundColor: C.bgAlt, minHeight: 56, marginBottom: 12,
  },
  inputCorrect: { borderColor: C.correct, backgroundColor: C.correctBg },
  inputIncorrect: { borderColor: C.incorrect, backgroundColor: C.incorrectBg },
  verifyBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 12 },
  btnDisabled: { opacity: 0.35 },
  verifyBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  feedbackBox: { borderRadius: 8, padding: 14, marginBottom: 10 },
  feedbackCorrect: { backgroundColor: C.correctBg, borderLeftWidth: 4, borderLeftColor: C.correct },
  feedbackIncorrect: { backgroundColor: C.incorrectBg, borderLeftWidth: 4, borderLeftColor: C.incorrect },
  feedbackRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  feedbackIcon: { fontSize: 15, fontWeight: '700', color: C.text },
  feedbackLabel: { fontSize: 13, fontWeight: '700', color: C.text },
  feedbackEsRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  feedbackEs: { fontSize: 17, fontWeight: '600', color: C.text, flex: 1 },
  speakerBtn: { padding: 4 },
  speakerIcon: { fontSize: 18 },
  iaBtn: {
    borderWidth: 1, borderColor: C.accent, borderRadius: 8,
    paddingVertical: 12, alignItems: 'center', marginBottom: 10,
  },
  iaBtnText: { fontSize: 14, color: C.accent },
  npcAudioBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: C.border, borderRadius: 8,
    paddingVertical: 12, marginBottom: 10, backgroundColor: C.bgAlt,
  },
  npcAudioText: { fontSize: 14, color: C.text },
  nextBtn: { backgroundColor: C.correct, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 10 },
  nextBtnText: { fontSize: 16, fontWeight: '700', color: '#fff' },
});
