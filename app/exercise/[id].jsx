import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Keyboard, Modal, KeyboardAvoidingView,
  Linking, Alert, BackHandler, ActivityIndicator, Platform,
} from 'react-native';
// Speech recognition only available in dev/standalone builds, not Expo Go
let ExpoSpeechRecognitionModule = null;
let realUseSpeechRecognitionEvent = null;
try {
  const sr = require('expo-speech-recognition');
  ExpoSpeechRecognitionModule = sr.default ?? sr.ExpoSpeechRecognitionModule;
  realUseSpeechRecognitionEvent = sr.useSpeechRecognitionEvent;
} catch (_) {}
function useSpeechRecognitionEvent(eventName, handler) {
  const noop = () => {};
  const hook = ExpoSpeechRecognitionModule && realUseSpeechRecognitionEvent ? realUseSpeechRecognitionEvent : noop;
  try {
    hook(eventName, handler);
  } catch (_) {}
}
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import * as Speech from 'expo-speech';
import { getAllLanguageModules } from '../../src/data/modules';
import { LANGUAGES, getProfile, saveProfile } from '../../src/storage';
import { checkAnswer } from '../../src/utils/compare';
import { aiCheckAnswer, AI_CHECK_URL } from '../../src/utils/aiCheck';
import { hasAiConsent, setAiConsent } from '../../src/utils/aiConsent';
import AiConsentModal from '../../src/components/AiConsentModal';
import { markSentenceComplete, addWrongSentence, logEvent, getCompletedSentences } from '../../src/db/database';
import { markPracticedToday } from '../../src/notifications';
import { C } from '../../src/theme';
import TheoryRenderer from '../../src/components/TheoryRenderer';
import Poly from '../../src/components/Poly';
import { playCorrect, playWrong } from '../../src/utils/sounds';

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const db = useSQLiteContext();

  const mod = getAllLanguageModules().find(m => m.id === id);
  const langInfo = LANGUAGES.find(l => l.id === (mod?.language ?? 'es')) ?? LANGUAGES[0];
  const [exIdx, setExIdx] = useState(0);
  const [senIdx, setSenIdx] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showVars, setShowVars] = useState(false);
  const [showTheory, setShowTheory] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [dictQuery, setDictQuery] = useState('');
  const [dictResult, setDictResult] = useState(null);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictError, setDictError] = useState(null);
  const [micState, setMicState] = useState('idle'); // idle | listening | result
  const [micTranscript, setMicTranscript] = useState('');
  const [micMatch, setMicMatch] = useState(null);
  const [showDeWarning, setShowDeWarning] = useState(false);
  const [showZhWarning, setShowZhWarning] = useState(false);
  const [showTheoryIntro, setShowTheoryIntro] = useState(false);
  const [aiChecking, setAiChecking] = useState(false);
  const [aiAccepted, setAiAccepted] = useState(null); // { note } when AI accepted an alternate answer
  const [aiMistakeNote, setAiMistakeNote] = useState(null); // short AI explanation when genuinely wrong
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  // Listening exercise phase (after all translation exercises)
  const [listeningPhase, setListeningPhase] = useState(false);
  const [listeningChoice, setListeningChoice] = useState(null); // index chosen
  const [listeningDone, setListeningDone] = useState(false);
  const [optionOrder, setOptionOrder] = useState(null);
  const [resumeReady, setResumeReady] = useState(false);
  const [aiConsentVisible, setAiConsentVisible] = useState(false);
  const [aiConsentGranted, setAiConsentGranted] = useState(null); // null=unknown, true/false
  const pendingAiCallRef = useRef(null);
  const inputRef = useRef(null);
  const dictInputRef = useRef(null);
  const routerRef = useRef(router);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      showExitAlert(routerRef.current);
      return true;
    });
    return () => sub.remove();
  }, []);

  // Resume from the first not-yet-attempted sentence instead of always
  // restarting the module from the beginning.
  useEffect(() => {
    if (!mod?.id || !mod.exercises?.length) { setResumeReady(true); return; }
    (async () => {
      try {
        const completed = await getCompletedSentences(db, mod.id);
        outer:
        for (let ei = 0; ei < mod.exercises.length; ei++) {
          const sentences = mod.exercises[ei].sentences ?? [];
          for (let si = 0; si < sentences.length; si++) {
            if (!completed.has(`${ei}:${si}`)) {
              setExIdx(ei);
              setSenIdx(si);
              break outer;
            }
          }
        }
      } catch (e) {
        console.warn('resume progress error:', e);
      } finally {
        setResumeReady(true);
      }
    })();
  }, [mod?.id]);

  useEffect(() => {
    if (mod?.id) logEvent(db, 'module_open', mod.id, mod.language ?? 'es');
  }, [mod?.id]);

  useEffect(() => {
    if (langInfo?.id !== 'de') return;
    getProfile().then(p => {
      if (!p?.deKeyboardWarningDismissed) setShowDeWarning(true);
    });
  }, []);

  useEffect(() => {
    if (langInfo?.id !== 'zh') return;
    getProfile().then(p => {
      if (!p?.zhKeyboardWarningDismissed) setShowZhWarning(true);
    });
  }, []);

  useEffect(() => {
    if (!mod?.theory) return;
    getProfile().then(p => {
      const seen = p?.seenModules ?? [];
      if (seen.includes(mod.id)) return;
      const deWarningPending = langInfo?.id === 'de' && !p?.deKeyboardWarningDismissed;
      const zhWarningPending = langInfo?.id === 'zh' && !p?.zhKeyboardWarningDismissed;
      if (deWarningPending || zhWarningPending) return;
      setShowTheoryIntro(true);
    });
  }, [mod?.id]);

  function showExitAlert(nav) {
    Keyboard.dismiss();
    Alert.alert(
      'Sair do exercício?',
      'Seu progresso já salvo será mantido.',
      [
        { text: 'Continuar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: () => nav.back() },
      ],
      { cancelable: true }
    );
  }

  function confirmExit() {
    showExitAlert(router);
  }

  if (!mod) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.exitBtn}>
            <Text style={styles.exitBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>Módulo não encontrado.</Text>
      </SafeAreaView>
    );
  }

  if (!mod.exercises?.length) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle} numberOfLines={1}>{mod.title}</Text>
          </View>
          <TouchableOpacity onPress={() => router.back()} style={styles.exitBtn}>
            <Text style={styles.exitBtnText}>Sair</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.comingSoonScroll}>
          <Text style={styles.comingSoonTitle}>{mod.title}</Text>
          <Text style={styles.comingSoonSub}>{mod.subtitle}</Text>
          <View style={styles.soonBadge}><Text style={styles.soonBadgeText}>Exercícios em breve</Text></View>
          {mod.theory ? (
            <View style={[styles.theoryBox, { marginTop: 20, alignSelf: 'stretch' }]}>
              <Text style={styles.theoryLabel}>TEORIA</Text>
              <TheoryRenderer text={mod.theory} />
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    );
  }

  const exercise = mod.exercises?.[exIdx];
  const sentence = exercise?.sentences?.[senIdx];
  const totalEx = mod.exercises?.length ?? 0;
  const totalSen = exercise?.sentences?.length ?? 0;
  const isLastSen = senIdx >= totalSen - 1;
  const isLastEx = exIdx >= totalEx - 1;
  const isModuleDone = isLastSen && isLastEx;

  async function getConsent() {
    if (aiConsentGranted === true) return true;
    if (aiConsentGranted === false) return false;
    const stored = await hasAiConsent();
    if (stored) { setAiConsentGranted(true); return true; }
    return new Promise(resolve => {
      pendingAiCallRef.current = resolve;
      setAiConsentVisible(true);
    });
  }

  async function handleSubmit() {
    if (!input.trim() || feedback || !sentence) return;
    setAiAccepted(null);
    setAiMistakeNote(null);
    let correct = checkAnswer(input, sentence?.answers ?? []);

    if (!correct) {
      const consent = await getConsent();
      if (!consent) {
        setFeedback('incorrect');
        return;
      }
      // Fallback: ask the AI checker if this is a valid alternate translation
      // (e.g. a correct synonym not in the fixed answers list). If it's genuinely
      // wrong, reuse the same call to get a short explanation of the mistake.
      setAiChecking(true);
      const result = await aiCheckAnswer({
        sourceText: sentence.prompt,
        userAnswer: input,
        acceptedAnswers: sentence.answers ?? [],
        language: mod.language ?? 'es',
      });
      setAiChecking(false);
      if (result.valid) {
        correct = true;
        setAiAccepted({ note: result.note });
      } else if (result.note) {
        setAiMistakeNote(result.note);
      }
    }

    setFeedback(correct ? 'correct' : 'incorrect');
    // Attempting a sentence — right or wrong — counts toward module progress.
    // A wrong answer still goes to spaced-repetition review separately.
    try { await markSentenceComplete(db, mod.id, exIdx, senIdx); } catch (e) { console.warn('DB error:', e); }
    if (correct) {
      playCorrect();
      markPracticedToday(getProfile, saveProfile).catch(() => {});
    } else {
      playWrong();
      addWrongSentence(db, mod.id, exIdx, senIdx, sentence.prompt, sentence.answers[0], mod.language ?? 'es')
        .catch(() => {});
    }
    inputRef.current?.blur();
  }

  function handleNext() {
    setInput('');
    setFeedback(null);
    setShowVars(false);
    setDictOpen(false);
    setDictResult(null);
    setDictQuery('');
    setMicState('idle');
    setMicTranscript('');
    setMicMatch(null);
    setAiAccepted(null);
    setAiMistakeNote(null);
    if (!isLastSen) {
      setSenIdx(s => s + 1);
    } else if (!isLastEx) {
      setExIdx(e => e + 1);
      setSenIdx(0);
    } else if (mod.dialogExercise && !listeningPhase) {
      // Enter listening phase
      const opts = mod.dialogExercise.options;
      const shuffled = [...opts.map((o, i) => ({ ...o, _orig: i }))].sort(() => Math.random() - 0.5);
      setOptionOrder(shuffled);
      setListeningPhase(true);
      return;
    } else {
      logEvent(db, 'module_complete', mod.id, mod.language ?? 'es');
      setShowCompleteModal(true);
      return;
    }
    setTimeout(() => inputRef.current?.focus(), 120);
  }

  async function openIA() {
    let prompt;
    if (langInfo.reverseMode) {
      const fromLang = langInfo.group === 'ar' ? 'árabe' : 'inglês';
      prompt = `Estou aprendendo português brasileiro. A frase em ${fromLang} é: "${sentence.prompt}". A tradução correta em português é: "${sentence.answers[0]}". Pode explicar a gramática desta frase e por que essa é a forma correta?`;
    } else {
      prompt = `Estou aprendendo ${langInfo.label.toLowerCase()}. A frase em português é: "${sentence.prompt}". A tradução correta em ${langInfo.label.toLowerCase()} é: "${sentence.answers[0]}". Pode explicar a gramática desta frase e por que essa é a forma correta?`;
    }
    const encoded = encodeURIComponent(prompt);
    const urls = [
      `https://claude.ai/new?q=${encoded}`,
      `https://chatgpt.com/?q=${encoded}`,
      `https://gemini.google.com/app?q=${encoded}`,
    ];
    for (const url of urls) {
      try {
        const can = await Linking.canOpenURL(url);
        if (can) { Linking.openURL(url); return; }
      } catch (_) {}
    }
    Linking.openURL(urls[0]);
  }

  async function searchDict() {
    const word = dictQuery.trim();
    if (!word) return;
    if (word.split(/\s+/).length > 6) {
      setDictError('Use apenas uma palavra ou expressão curta — não frases inteiras.');
      return;
    }
    const consent = await getConsent();
    if (!consent) return;
    setDictLoading(true);
    setDictError(null);
    setDictResult(null);
    try {
      const res = await fetch(`${AI_CHECK_URL}/dict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, language: mod.language ?? 'es' }),
      });
      const data = await res.json();
      if (!res.ok || !data.translation) throw new Error('Não encontrado');
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

  const correctAnswer = sentence?.answers[0];
  const variations = sentence?.answers.slice(1) ?? [];

  function speak(text) {
    // Stop any in-progress utterance first — prevents overlapping playback.
    Speech.stop();
    // Mandarin answers are stored as "pinyin — 汉字". Only speak the hanzi
    // part so TTS doesn't garble the latin romanisation as Chinese syllables.
    const ttsText = langInfo.id === 'zh' && text.includes(' — ')
      ? text.split(' — ').pop().trim()
      : text;
    Speech.speak(ttsText, { language: langInfo.tts, rate: 0.85 });
  }

  useSpeechRecognitionEvent('result', (e) => {
    const transcript = e.results?.[0]?.transcript ?? '';
    setMicTranscript(transcript);
    if (e.isFinal) {
      const norm = (s) => s.toLowerCase().trim().normalize('NFD')
        .replace(/[̀-ͯ]/g, '').replace(/[.,!?¿¡;:'"()\-]/g, '').replace(/\s+/g, ' ').trim();
      // Safely access current sentence via state — safe null-checks since hooks
      // run unconditionally and mod/sentence may not exist during loading.
      const currentAnswers = mod?.exercises?.[exIdx]?.sentences?.[senIdx]?.answers ?? [];
      const matched = currentAnswers.some(a => norm(a) === norm(transcript));
      setMicMatch(matched);
      setMicState('result');
    }
  });
  useSpeechRecognitionEvent('end', () => {
    setMicState(prev => prev === 'listening' ? 'idle' : prev);
  });
  useSpeechRecognitionEvent('error', (e) => {
    setMicState('idle');
    setMicTranscript('');
    setMicMatch(null);
  });

  async function startListening() {
    if (!ExpoSpeechRecognitionModule) {
      Alert.alert('Microfone indisponível', 'Esta função requer um development build. Use npx expo run:android para activá-la.');
      return;
    }
    try {
      const perm = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!perm.granted) { Alert.alert('Permissão necessária', 'Permite o acesso ao microfone nas definições.'); return; }
      setMicState('listening');
      setMicTranscript('');
      setMicMatch(null);
      ExpoSpeechRecognitionModule.start({ lang: langInfo.tts, interimResults: true, maxAlternatives: 3 });
    } catch (e) { setMicState('idle'); }
  }

  function stopListening() {
    ExpoSpeechRecognitionModule?.stop?.();
    setMicState('idle');
  }

  const totalSentencesAll = mod.exercises.reduce((s, ex) => s + (ex.sentences?.length ?? 0), 0);
  const doneSentencesAll = mod.exercises.slice(0, exIdx).reduce((s, ex) => s + (ex.sentences?.length ?? 0), 0) + senIdx;
  const progress = totalSentencesAll > 0 ? doneSentencesAll / totalSentencesAll : 0;

  // ── Listening exercise phase ──────────────────────────────────────
  if (listeningPhase && mod.dialogExercise) {
    const de = mod.dialogExercise;
    const opts = optionOrder ?? de.options;
    const chosen = listeningChoice !== null ? opts[listeningChoice] : null;
    const correct = chosen?.correct ?? false;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={confirmExit} style={styles.exitBtn}>
            <Text style={styles.exitBtnText}>✕ Sair</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>{mod.title}</Text>
            <Text style={styles.headerMeta}>
              Compreensão auditiva · {totalSentencesAll + 1}/{totalSentencesAll + 1}
            </Text>
          </View>
          <View style={{ width: 70 }} />
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '100%' }]} />
        </View>

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.listenBadge}>
            <Text style={styles.listenBadgeText}>🎧 COMPREENSÃO AUDITIVA</Text>
          </View>

          <Text style={styles.listenInstruction}>
            Ouça o áudio e escolha o que a pessoa disse:
          </Text>

          <TouchableOpacity
            style={styles.listenPlayBtn}
            onPress={() => { Speech.stop(); Speech.speak(de.audioText, { language: langInfo.tts, rate: 0.75 }); }}>
            <Text style={styles.listenPlayIcon}>▶</Text>
            <Text style={styles.listenPlayText}>Ouvir áudio</Text>
          </TouchableOpacity>

          <Text style={styles.listenQuestion}>{de.question}</Text>

          {opts.map((opt, i) => {
            const isChosen = listeningChoice === i;
            const showResult = listeningChoice !== null;
            let btnStyle = styles.listenOption;
            if (showResult && isChosen && opt.correct) btnStyle = [styles.listenOption, styles.listenOptionCorrect];
            else if (showResult && isChosen && !opt.correct) btnStyle = [styles.listenOption, styles.listenOptionWrong];
            else if (showResult && opt.correct) btnStyle = [styles.listenOption, styles.listenOptionCorrect];

            return (
              <TouchableOpacity
                key={i}
                style={btnStyle}
                onPress={() => {
                  if (listeningChoice !== null) return;
                  setListeningChoice(i);
                  if (opt.correct) playCorrect(); else playWrong();
                }}
                disabled={listeningChoice !== null}>
                <Text style={styles.listenOptionLetter}>{['A', 'B', 'C', 'D'][i]}</Text>
                <Text style={styles.listenOptionText}>{opt.text}</Text>
              </TouchableOpacity>
            );
          })}

          {listeningChoice !== null && (
            <>
              <View style={[styles.listenFeedback, correct ? styles.listenFeedbackCorrect : styles.listenFeedbackWrong]}>
                <Text style={styles.listenFeedbackText}>
                  {correct ? '✓ Correto! Boa compreensão auditiva.' : `✗ Incorreto. A resposta certa era: "${opts.find(o => o.correct)?.text}"`}
                </Text>
              </View>
              <TouchableOpacity style={styles.nextBtn} onPress={() => setShowCompleteModal(true)}>
                <Text style={styles.nextBtnText}>Concluir módulo ✓</Text>
              </TouchableOpacity>
            </>
          )}

          <View style={{ height: 60 }} />
        </ScrollView>
        <Modal visible={showCompleteModal} transparent animationType="fade">
          <View style={styles.completeOverlay}>
            <View style={styles.completeCard}>
              <Poly size={100} mood="happy" />
              <Text style={styles.completeTitle}>Módulo concluído!</Text>
              <Text style={styles.completeBody}>Poly tá orgulhoso de você. Bora pro próximo?</Text>
              <TouchableOpacity style={styles.completeBtn} onPress={() => router.back()}>
                <Text style={styles.completeBtnText}>Continuar →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>

      <AiConsentModal
        visible={aiConsentVisible}
        onAccept={async () => {
          await setAiConsent();
          setAiConsentGranted(true);
          setAiConsentVisible(false);
          if (pendingAiCallRef.current) { pendingAiCallRef.current(true); pendingAiCallRef.current = null; }
        }}
        onDecline={() => {
          setAiConsentGranted(false);
          setAiConsentVisible(false);
          if (pendingAiCallRef.current) { pendingAiCallRef.current(false); pendingAiCallRef.current = null; }
        }}
      />

      {/* Aviso de teclado alemão — aparece uma vez ao entrar numa aula DE */}
      <Modal visible={showDeWarning} transparent animationType="fade" onRequestClose={() => setShowDeWarning(false)}>
        <View style={styles.deWarnOverlay}>
          <View style={styles.deWarnModal}>
            <Text style={styles.deWarnTitle}>🇩🇪 Dica para o alemão</Text>
            <Text style={styles.deWarnBody}>
              O alemão tem letras que não existem no português:{'\n\n'}
              <Text style={styles.deWarnChars}>Ä  ä  Ö  ö  Ü  ü  ß</Text>
              {'\n\n'}
              Para digitar com mais facilidade, sugerimos trocar o teclado do seu celular para o alemão nas configurações.
              {'\n\n'}
              <Text style={styles.deWarnTip}>Configurações → Gerenciar teclados → Adicionar Alemão</Text>
            </Text>
            <TouchableOpacity style={styles.deWarnBtnSettings} onPress={() => {
              Linking.openURL('intent:#Intent;action=android.settings.INPUT_METHOD_SETTINGS;end').catch(() => Linking.openSettings());
            }}>
              <Text style={styles.deWarnBtnSettingsText}>⌨️ Abrir configurações de teclado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deWarnBtn} onPress={async () => {
              setShowDeWarning(false);
              if (mod?.theory) {
                const p = await getProfile();
                const seen = p?.seenModules ?? [];
                if (!seen.includes(mod.id)) setShowTheoryIntro(true);
              }
            }}>
              <Text style={styles.deWarnBtnText}>Entendido, vamos lá!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deWarnBtnNever} onPress={async () => {
              setShowDeWarning(false);
              const p = await getProfile();
              if (p) {
                await saveProfile({ ...p, deKeyboardWarningDismissed: true });
                const seen = p?.seenModules ?? [];
                if (mod?.theory && !seen.includes(mod.id)) setShowTheoryIntro(true);
              }
            }}>
              <Text style={styles.deWarnBtnNeverText}>Não mostrar mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Aviso de Pinyin / Mandarim — aparece uma vez ao entrar numa aula ZH */}
      <Modal visible={showZhWarning} transparent animationType="fade" onRequestClose={() => setShowZhWarning(false)}>
        <View style={styles.deWarnOverlay}>
          <View style={styles.deWarnModal}>
            <Text style={styles.deWarnTitle}>🇨🇳 Dica para o Mandarim</Text>
            <Text style={styles.deWarnBody}>
              No PolySpeaker, o Mandarim é digitado em{' '}
              <Text style={{ fontWeight: '700', color: C.text }}>Pinyin</Text>
              {' '}— o sistema de romanização oficial, com letras latinas.{'\n\n'}
              Você pode digitar{' '}
              <Text style={{ fontWeight: '700', color: C.text }}>com ou sem as marcas de tom</Text>:{'\n'}
              <Text style={styles.deWarnChars}>nǐ hǎo = ni hao</Text>
              {'\n\n'}
              O app aceita as duas formas e também caracteres chineses.{'\n\n'}
              <Text style={styles.deWarnTip}>
                Sugestão: ative o teclado Pinyin nas configurações do celular para digitar os acentos tonais com mais facilidade.{'\n'}
                Configurações → Gerenciar teclados → Adicionar Chinês (Simplificado — Pinyin)
              </Text>
            </Text>
            <TouchableOpacity style={styles.deWarnBtnSettings} onPress={() => {
              Linking.openURL('intent:#Intent;action=android.settings.INPUT_METHOD_SETTINGS;end').catch(() => Linking.openSettings());
            }}>
              <Text style={styles.deWarnBtnSettingsText}>⌨️ Abrir configurações de teclado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deWarnBtn} onPress={async () => {
              setShowZhWarning(false);
              if (mod?.theory) {
                const p = await getProfile();
                const seen = p?.seenModules ?? [];
                if (!seen.includes(mod.id)) setShowTheoryIntro(true);
              }
            }}>
              <Text style={styles.deWarnBtnText}>Entendido, vamos lá!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deWarnBtnNever} onPress={async () => {
              setShowZhWarning(false);
              const p = await getProfile();
              if (p) {
                await saveProfile({ ...p, zhKeyboardWarningDismissed: true });
                const seen = p?.seenModules ?? [];
                if (mod?.theory && !seen.includes(mod.id)) setShowTheoryIntro(true);
              }
            }}>
              <Text style={styles.deWarnBtnNeverText}>Não mostrar mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Theory intro modal — aparece na primeira vez que o módulo é aberto */}
      <Modal visible={showTheoryIntro} transparent animationType="fade" onRequestClose={async () => {
        setShowTheoryIntro(false);
        const p = await getProfile();
        if (p) {
          const seen = p.seenModules ?? [];
          if (!seen.includes(mod.id)) await saveProfile({ ...p, seenModules: [...seen, mod.id] });
        }
      }}>
        <View style={styles.theoryIntroOverlay}>
          <View style={styles.theoryIntroModal}>
            <Text style={styles.theoryIntroTitle}>{mod.title}</Text>
            {mod.subtitle ? <Text style={styles.theoryIntroSub}>{mod.subtitle}</Text> : null}
            <ScrollView style={styles.theoryIntroScroll} contentContainerStyle={{ paddingBottom: 8 }}>
              <TheoryRenderer text={mod.theory} />
            </ScrollView>
            <TouchableOpacity style={styles.theoryIntroBtn} onPress={async () => {
              setShowTheoryIntro(false);
              const p = await getProfile();
              if (p) {
                const seen = p.seenModules ?? [];
                if (!seen.includes(mod.id)) {
                  await saveProfile({ ...p, seenModules: [...seen, mod.id] });
                }
              }
            }}>
              <Text style={styles.theoryIntroBtnText}>Iniciar exercícios →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity onPress={confirmExit} style={styles.exitBtn} hitSlop={{top:12,bottom:12,left:12,right:12}}>
          <Text style={styles.exitBtnText}>✕ Sair</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle} numberOfLines={1}>{mod.title}</Text>
          <Text style={styles.headerMeta}>
            {exercise?.title ? exercise.title + ' · ' : ''}{doneSentencesAll + 1}/{totalSentencesAll + (mod.dialogExercise ? 1 : 0)}
          </Text>
        </View>
        <View style={{ width: 70 }} />
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={0}>
      <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}>

          {/* Theory toggle */}
          {mod.theory && (
            <>
              <TouchableOpacity style={styles.theoryToggle} onPress={() => setShowTheory(v => !v)}>
                <Text style={styles.theoryToggleText}>
                  {showTheory ? '- Ocultar teoria' : '+ Ver teoria do módulo'}
                </Text>
              </TouchableOpacity>
              {showTheory && (
                <View style={styles.theoryBox}>
                  <TheoryRenderer text={mod.theory} />
                </View>
              )}
            </>
          )}

          {/* Prompt */}
          <View style={styles.promptBox}>
            <Text style={styles.promptLabel}>{langInfo.reverseMode ? 'Como se diz em português?' : `Traduza para o ${langInfo.label.toLowerCase()}`}</Text>
            <Text style={styles.promptText}>{sentence?.prompt}</Text>
          </View>

          {/* Answer input */}
          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              feedback === 'correct' && styles.inputCorrect,
              feedback === 'incorrect' && styles.inputIncorrect,
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

          {/* Action button */}
          {!feedback ? (
            <TouchableOpacity
              style={[styles.verifyBtn, (!input.trim() || aiChecking) && styles.btnDisabled]}
              onPress={handleSubmit}
              disabled={!input.trim() || aiChecking}>
              <Text style={styles.verifyBtnText}>{aiChecking ? 'Poly verificando…' : 'Verificar'}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>
                {isModuleDone ? 'Concluir módulo ✓' : isLastSen ? 'Próximo exercício →' : 'Próxima frase →'}
              </Text>
            </TouchableOpacity>
          )}

          {/* Feedback */}
          {feedback === 'correct' && (
            <View style={[styles.feedbackBox, styles.feedbackCorrect]}>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackIcon}>✓</Text>
                <Text style={styles.feedbackLabel}>
                  {aiAccepted ? 'Correto! (resposta alternativa válida)' : 'Correto!'}
                </Text>
              </View>
              <View style={styles.answerAudioRow}>
                <Text style={styles.feedbackAnswer}>{correctAnswer}</Text>
                <TouchableOpacity onPress={() => speak(correctAnswer)} style={styles.speakerBtn}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Text style={styles.speakerIcon}>🔊</Text>
                </TouchableOpacity>
              </View>
              {aiAccepted && (
                <View style={styles.aiNoteRow}>
                  <Poly size={20} mood="happy" />
                  <Text style={styles.aiAcceptedNote}>
                    Validado pelo Poly{aiAccepted.note ? `: ${aiAccepted.note}` : ''}
                  </Text>
                </View>
              )}
            </View>
          )}

          {feedback === 'incorrect' && (
            <View style={[styles.feedbackBox, styles.feedbackIncorrect]}>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackIcon}>✗</Text>
                <Text style={styles.feedbackLabel}>Incorreto</Text>
              </View>
              <View style={styles.answerAudioRow}>
                <Text style={styles.feedbackAnswer}>{correctAnswer}</Text>
                <TouchableOpacity onPress={() => speak(correctAnswer)} style={styles.speakerBtn}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                  <Text style={styles.speakerIcon}>🔊</Text>
                </TouchableOpacity>
              </View>
              {variations.length > 0 && (
                <TouchableOpacity onPress={() => setShowVars(v => !v)} style={styles.variationsBtn}>
                  <Text style={styles.variationsBtnText}>
                    {showVars ? '- Ocultar variações' : `+ +${variations.length} variação(ões) aceita(s)`}
                  </Text>
                </TouchableOpacity>
              )}
              {showVars && variations.map((v, i) => (
                <Text key={i} style={styles.variation}>• {v}</Text>
              ))}
              {aiMistakeNote && (
                <View style={styles.aiNoteRow}>
                  <Poly size={20} mood="oops" />
                  <Text style={styles.aiMistakeText}>{aiMistakeNote}</Text>
                </View>
              )}
            </View>
          )}

          {/* Pronunciation practice — after feedback */}
          {feedback && (
            <View style={styles.micSection}>
              <Text style={styles.micTitle}>Pronúncia</Text>
              {micState === 'idle' && (
                <TouchableOpacity style={styles.micBtn} onPress={startListening}>
                  <Text style={styles.micBtnText}>🎤 Praticar pronúncia</Text>
                </TouchableOpacity>
              )}
              {micState === 'listening' && (
                <TouchableOpacity style={[styles.micBtn, styles.micBtnListening]} onPress={stopListening}>
                  <Text style={styles.micBtnText}>● Ouvindo… (toque para parar)</Text>
                </TouchableOpacity>
              )}
              {micTranscript.length > 0 && (
                <Text style={styles.micTranscript}>"{micTranscript}"</Text>
              )}
              {micState === 'result' && micMatch !== null && (
                <View style={[styles.micResult, micMatch ? styles.micResultGood : styles.micResultBad]}>
                  <Text style={styles.micResultText}>{micMatch ? '✓ Boa pronúncia!' : '✗ Tenta outra vez'}</Text>
                  <TouchableOpacity onPress={() => { setMicState('idle'); setMicTranscript(''); setMicMatch(null); }}>
                    <Text style={styles.micRetryText}>Repetir</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}

          {/* IA button — only after answering */}
          {feedback && (
            <TouchableOpacity style={styles.iaBtn} onPress={openIA}>
              <Text style={styles.iaBtnText}>Tirar dúvida com IA →</Text>
            </TouchableOpacity>
          )}

          {/* Inline dictionary */}
          <View style={styles.dictSection}>
            <TouchableOpacity
              style={styles.dictToggle}
              onPress={() => {
                Keyboard.dismiss();
                setDictOpen(v => !v);
                if (!dictOpen) setTimeout(() => dictInputRef.current?.focus(), 300);
              }}>
              {!dictOpen && <Poly size={20} mood="neutral" />}
              <Text style={styles.dictToggleText}>
                {dictOpen
                  ? '- Fechar Dicionário Poly'
                  : langInfo.reverseMode
                    ? `Dicionário Poly  ${langInfo.group === 'ar' ? 'AR' : 'EN'} → PT`
                    : `Dicionário Poly  PT → ${langInfo.label}`}
              </Text>
            </TouchableOpacity>

            {dictOpen && (
              <View style={styles.dictBody}>
                <View style={styles.dictSearchRow}>
                  <TextInput
                    ref={dictInputRef}
                    style={styles.dictInput}
                    placeholder={`Palavra em ${langInfo.dictFromLabel ?? 'português'}...`}
                    placeholderTextColor={C.textMuted}
                    value={dictQuery}
                    onChangeText={setDictQuery}
                    onSubmitEditing={searchDict}
                    returnKeyType="search"
                    autoCapitalize="none"
                    maxLength={60}
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
      </KeyboardAvoidingView>
      <Modal visible={showCompleteModal} transparent animationType="fade">
        <View style={styles.completeOverlay}>
          <View style={styles.completeCard}>
            <Poly size={100} mood="happy" />
            <Text style={styles.completeTitle}>Módulo concluído!</Text>
            <Text style={styles.completeBody}>Poly tá orgulhoso de você. Bora pro próximo?</Text>
            <TouchableOpacity style={styles.completeBtn} onPress={() => router.back()}>
              <Text style={styles.completeBtnText}>Continuar →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  errorText: { padding: 24, fontFamily: 'serif', color: C.text },
  loadingCenter: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  headerMeta: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, marginTop: 2 },
  exitBtn: { paddingVertical: 6, paddingHorizontal: 10, minWidth: 70, alignItems: 'flex-start' },
  exitBtnText: { fontFamily: 'serif', fontSize: 14, color: C.incorrect, fontWeight: '700' },
  progressBar: { height: 3, backgroundColor: C.border },
  progressFill: { height: 3, backgroundColor: C.accent },
  scroll: { paddingHorizontal: 22, paddingTop: 20 },
  theoryToggle: { marginBottom: 8 },
  theoryToggleText: { fontFamily: 'serif', fontSize: 13, color: C.accent },
  theoryBox: {
    backgroundColor: C.bgAlt, borderLeftWidth: 3, borderLeftColor: C.accent,
    padding: 14, marginBottom: 20, borderRadius: 4,
  },
  theoryLabel: { fontFamily: 'serif', fontSize: 10, fontWeight: '700', color: C.accent, letterSpacing: 2, marginBottom: 6 },
  theoryText: { fontFamily: 'serif', fontSize: 14, color: C.text, lineHeight: 22 },
  promptBox: { marginTop: 20, marginBottom: 22 },
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
  verifyBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff', letterSpacing: 0.3 },
  nextBtn: {
    backgroundColor: C.correct, borderRadius: 8,
    paddingVertical: 15, alignItems: 'center', marginBottom: 16,
  },
  nextBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  feedbackBox: { borderRadius: 8, padding: 16, marginBottom: 12 },
  feedbackCorrect: { backgroundColor: C.correctBg, borderLeftWidth: 4, borderLeftColor: C.correct },
  feedbackIncorrect: { backgroundColor: C.incorrectBg, borderLeftWidth: 4, borderLeftColor: C.incorrect },
  feedbackRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 2 },
  feedbackIcon: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  feedbackLabel: { fontFamily: 'serif', fontSize: 13, fontWeight: '700', color: C.text },
  feedbackAnswer: { fontFamily: 'serif', fontSize: 18, color: C.text, fontWeight: '600', flex: 1 },
  answerAudioRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 6 },
  aiNoteRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginTop: 10 },
  aiAcceptedNote: { flex: 1, fontFamily: 'serif', fontSize: 12, color: C.accent, fontStyle: 'italic', marginTop: 2 },
  aiMistakeText: { flex: 1, fontFamily: 'serif', fontSize: 12.5, color: C.incorrect, lineHeight: 18, marginTop: 1 },
  completeOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'center', alignItems: 'center', padding: 28 },
  completeCard: {
    backgroundColor: C.bg, borderRadius: 16, padding: 28, alignItems: 'center',
    width: '100%', maxWidth: 320,
  },
  completeTitle: { fontFamily: 'serif', fontSize: 20, fontWeight: '700', color: C.text, marginTop: 14 },
  completeBody: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, textAlign: 'center', marginTop: 8, marginBottom: 22 },
  completeBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 14, paddingHorizontal: 32 },
  completeBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  speakerBtn: { padding: 4 },
  speakerIcon: { fontSize: 20 },
  variationsBtn: { marginTop: 10 },
  variationsBtnText: { fontFamily: 'serif', fontSize: 13, color: C.accent },
  variation: { fontFamily: 'serif', fontSize: 14, color: C.text, marginTop: 4, marginLeft: 4 },
  iaBtn: {
    alignItems: 'center', paddingVertical: 12,
    borderWidth: 1, borderColor: C.border, borderRadius: 8, marginBottom: 20,
  },
  iaBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  // Inline dict
  dictSection: { borderTopWidth: 1, borderTopColor: C.border, paddingTop: 12 },
  dictToggle: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 6 },
  dictToggleText: { fontFamily: 'serif', fontSize: 14, color: C.accent, fontWeight: '600' },
  dictBody: { marginTop: 12 },
  dictSearchRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  dictInput: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 6,
    paddingHorizontal: 12, paddingVertical: 10,
    fontFamily: 'serif', fontSize: 15, color: C.text, backgroundColor: C.bgAlt,
  },
  dictSearchBtn: {
    backgroundColor: C.accent, borderRadius: 6,
    paddingHorizontal: 14, justifyContent: 'center',
  },
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
  // Coming soon
  comingSoonScroll: { padding: 28, alignItems: 'center', justifyContent: 'center', flex: 1 },
  comingSoonTitle: { fontFamily: 'serif', fontSize: 22, fontWeight: '700', color: C.text, textAlign: 'center' },
  comingSoonSub: { fontFamily: 'serif', fontSize: 15, color: C.textMuted, fontStyle: 'italic', marginTop: 6, textAlign: 'center' },
  soonBadge: { marginTop: 16, paddingHorizontal: 14, paddingVertical: 6, borderWidth: 1, borderColor: C.border, borderRadius: 20 },
  soonBadgeText: { fontFamily: 'serif', fontSize: 13, color: C.textMuted },
  theoryIntroOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  theoryIntroModal: { margin: 20, backgroundColor: C.bg, borderRadius: 14, padding: 24, borderWidth: 1, borderColor: C.border, elevation: 10, maxHeight: '85%' },
  theoryIntroTitle: { fontFamily: 'serif', fontSize: 20, fontWeight: '700', color: C.text, marginBottom: 4 },
  theoryIntroSub: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 14 },
  theoryIntroScroll: { maxHeight: 380, marginBottom: 16 },
  theoryIntroBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 14, alignItems: 'center' },
  theoryIntroBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  deWarnOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  deWarnModal: { margin: 28, backgroundColor: C.bg, borderRadius: 14, padding: 28, borderWidth: 1, borderColor: C.border, elevation: 8 },
  deWarnTitle: { fontFamily: 'serif', fontSize: 20, fontWeight: '700', color: C.text, marginBottom: 14 },
  deWarnBody: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, lineHeight: 22, marginBottom: 24 },
  deWarnChars: { fontFamily: 'serif', fontSize: 22, fontWeight: '700', color: C.text, letterSpacing: 6 },
  deWarnTip: { fontFamily: 'serif', fontSize: 12, color: C.accent, fontStyle: 'italic' },
  deWarnBtnSettings: {
    borderWidth: 1.5, borderColor: C.accent, borderRadius: 8,
    paddingVertical: 12, alignItems: 'center', marginBottom: 10,
  },
  deWarnBtnSettingsText: { fontFamily: 'serif', fontSize: 14, color: C.accent, fontWeight: '700' },
  deWarnBtn: { backgroundColor: C.accent, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginBottom: 10 },
  deWarnBtnText: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: '#fff' },
  deWarnBtnNever: { paddingVertical: 8, alignItems: 'center' },
  deWarnBtnNeverText: { fontFamily: 'serif', fontSize: 13, color: C.textMuted },
  micSection: { borderTopWidth: 1, borderTopColor: C.border, paddingTop: 12, marginTop: 4, marginBottom: 8 },
  micTitle: { fontFamily: 'serif', fontSize: 13, fontWeight: '700', color: C.textMuted, marginBottom: 8 },
  micBtn: { backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border, borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  micBtnListening: { borderColor: C.incorrect, backgroundColor: '#FDEDED' },
  micBtnText: { fontFamily: 'serif', fontSize: 14, color: C.text },
  micTranscript: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginTop: 8, textAlign: 'center' },
  micResult: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 8, paddingHorizontal: 14, paddingVertical: 10, marginTop: 8 },
  micResultGood: { backgroundColor: C.correctBg, borderLeftWidth: 3, borderLeftColor: C.correct },
  micResultBad: { backgroundColor: C.incorrectBg, borderLeftWidth: 3, borderLeftColor: C.incorrect },
  micResultText: { fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: C.text },
  micRetryText: { fontFamily: 'serif', fontSize: 13, color: C.accent, textDecorationLine: 'underline' },
  // Listening exercise
  listenBadge: {
    alignSelf: 'flex-start', borderWidth: 1, borderColor: '#8B6F47',
    borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4, marginBottom: 20,
  },
  listenBadgeText: { fontFamily: 'serif', fontSize: 10, color: '#8B6F47', letterSpacing: 2, fontWeight: '700' },
  listenInstruction: { fontFamily: 'serif', fontSize: 16, color: C.text, marginBottom: 20, lineHeight: 24 },
  listenPlayBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    backgroundColor: C.accent, borderRadius: 12,
    paddingVertical: 18, marginBottom: 24, gap: 12,
  },
  listenPlayIcon: { fontSize: 22, color: '#fff' },
  listenPlayText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff' },
  listenQuestion: { fontFamily: 'serif', fontSize: 15, color: C.textMuted, marginBottom: 14, fontStyle: 'italic' },
  listenOption: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 12,
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8,
    padding: 14, marginBottom: 10, backgroundColor: C.bgAlt,
  },
  listenOptionCorrect: { borderColor: C.correct, backgroundColor: C.correctBg },
  listenOptionWrong: { borderColor: C.incorrect, backgroundColor: C.incorrectBg },
  listenOptionLetter: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.accent, minWidth: 20 },
  listenOptionText: { fontFamily: 'serif', fontSize: 15, color: C.text, flex: 1, lineHeight: 22 },
  listenFeedback: { borderRadius: 8, padding: 14, marginTop: 8, marginBottom: 16 },
  listenFeedbackCorrect: { backgroundColor: C.correctBg, borderLeftWidth: 4, borderLeftColor: C.correct },
  listenFeedbackWrong: { backgroundColor: C.incorrectBg, borderLeftWidth: 4, borderLeftColor: C.incorrect },
  listenFeedbackText: { fontFamily: 'serif', fontSize: 14, color: C.text, fontWeight: '600' },
});
