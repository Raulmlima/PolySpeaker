import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, StatusBar, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { getProfile, saveProfile, getLevels, LANGUAGES, getOrderedLanguageGroups } from '../src/storage';
import { scheduleSRSReminder, scheduleStreakReminder } from '../src/notifications';
import { C } from '../src/theme';
import Poly from '../src/components/Poly';

export default function OnboardingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 = language, 1 = level
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [langFromWelcome, setLangFromWelcome] = useState(false);

  // Se o idioma já foi escolhido no carrossel de boas-vindas, pula direto para o nível
  useEffect(() => {
    getProfile().then(p => {
      if (p?.language) {
        setSelectedLang(p.language);
        setLangFromWelcome(true);
        setStep(1);
      }
    });
  }, []);

  async function finish() {
    try {
      const p = await getProfile();
      const base = p ?? {};
      await saveProfile({ ...base, language: selectedLang, level: selectedLevel });
      scheduleSRSReminder().catch(() => {});
      scheduleStreakReminder().catch(() => {});
      router.replace('/');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar o perfil. Verifique o armazenamento do dispositivo.');
    }
  }

  const langInfo = LANGUAGES.find(l => l.id === selectedLang);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.logoArea}>
          <Poly size={64} mood="happy" />
          <Text style={styles.logoText}>PolySpeaker</Text>
          <Text style={styles.logoSub}>Aprenda idiomas de verdade</Text>
        </View>

        {/* ── Passo 0: seleção de idioma (apenas se não veio do welcome) ── */}
        {step === 0 && (
          <View style={styles.step}>
            <Text style={styles.stepNum}>1 de 2</Text>
            <Text style={styles.question}>Qual idioma você quer aprender?</Text>
            <Text style={styles.questionSub}>
              Começaremos com tradução ativa — o método mais eficaz.
            </Text>
            <View style={styles.options}>
              {getOrderedLanguageGroups().map(group => {
                const groupLangs = LANGUAGES.filter(l => l.group === group.id);
                return (
                  <View key={group.id}>
                    <Text style={styles.groupHeader}>{group.label}</Text>
                    <Text style={styles.groupSub}>{group.sublabel}</Text>
                    {groupLangs.map(lang => (
                      <TouchableOpacity
                        key={lang.id}
                        style={[
                          styles.optionCard,
                          selectedLang === lang.id && styles.optionCardSelected,
                          !lang.available && styles.optionCardDisabled,
                        ]}
                        onPress={() => lang.available && setSelectedLang(lang.id)}
                        activeOpacity={lang.available ? 0.7 : 1}>
                        <View style={styles.optionRow}>
                          <Text style={[styles.optionLabel, !lang.available && styles.optionLabelDisabled]}>
                            {lang.label}
                          </Text>
                          {!lang.available && (
                            <View style={styles.soonBadge}>
                              <Text style={styles.soonBadgeText}>Em breve</Text>
                            </View>
                          )}
                          {lang.available && selectedLang === lang.id && (
                            <Text style={styles.checkIcon}>✓</Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              style={[styles.nextBtn, !selectedLang && styles.nextBtnDisabled]}
              onPress={() => selectedLang && setStep(1)}
              disabled={!selectedLang}>
              <Text style={styles.nextBtnText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ── Passo 1: seleção de nível ── */}
        {step === 1 && (
          <View style={styles.step}>
            {langFromWelcome ? (
              <Text style={styles.stepNum}>ÚLTIMO PASSO</Text>
            ) : (
              <Text style={styles.stepNum}>2 de 2</Text>
            )}
            <Text style={styles.question}>
              {langInfo?.group === 'ar'
                ? 'ما هو مستواك في اللغة البرتغالية؟'
                : langInfo?.group === 'en'
                  ? 'What is your level of Portuguese?'
                  : `Qual é o seu nível de ${langInfo?.label?.toLowerCase() ?? 'espanhol'}?`}
            </Text>
            <Text style={styles.questionSub}>
              {langInfo?.group === 'ar'
                ? 'سنحدد من أين تبدأ. يمكنك تغيير ذلك لاحقًا.'
                : langInfo?.group === 'en'
                  ? "We'll suggest where to start. You can change it later."
                  : 'Indicaremos por onde começar. Você pode mudar depois.'}
            </Text>
            <View style={styles.options}>
              {getLevels(langInfo?.group ?? 'pt').map(level => (
                <TouchableOpacity
                  key={level.id}
                  style={[styles.optionCard, selectedLevel === level.id && styles.optionCardSelected]}
                  onPress={() => setSelectedLevel(level.id)}
                  activeOpacity={0.7}>
                  <View style={styles.optionRow}>
                    <Text style={styles.optionLabel}>{level.label}</Text>
                    {selectedLevel === level.id && <Text style={styles.checkIcon}>✓</Text>}
                  </View>
                  <Text style={styles.optionDesc}>{level.desc}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.btnRow}>
              {!langFromWelcome && (
                <TouchableOpacity
                  style={styles.backBtn}
                  onPress={() => { setStep(0); setSelectedLevel(null); }}>
                  <Text style={styles.backBtnText}>← Voltar</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[styles.nextBtn, styles.nextBtnFlex, !selectedLevel && styles.nextBtnDisabled]}
                onPress={finish}
                disabled={!selectedLevel}>
                <Text style={styles.nextBtnText}>Começar →</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { padding: 28, paddingTop: 20 },
  logoArea: { marginBottom: 40, marginTop: 12, alignItems: 'flex-start' },
  logoImage: { width: 64, height: 64, marginBottom: 12 },
  logoText: {
    fontFamily: 'serif', fontSize: 36, fontWeight: '700', color: C.text, letterSpacing: 1,
  },
  logoSub: {
    fontFamily: 'serif', fontSize: 15, color: C.textMuted, marginTop: 4, fontStyle: 'italic',
  },
  step: {},
  stepNum: {
    fontFamily: 'serif', fontSize: 11, color: C.accent,
    letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10, fontWeight: '700',
  },
  question: {
    fontFamily: 'serif', fontSize: 22, fontWeight: '700', color: C.text,
    marginBottom: 8, lineHeight: 30,
  },
  questionSub: {
    fontFamily: 'serif', fontSize: 14, color: C.textMuted, marginBottom: 28, lineHeight: 20,
  },
  options: { gap: 8, marginBottom: 32 },
  groupHeader: {
    fontFamily: 'serif', fontSize: 11, fontWeight: '700', color: C.accent,
    textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 16, marginBottom: 2,
  },
  groupSub: {
    fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginBottom: 8,
  },
  optionCard: {
    borderWidth: 1.5, borderColor: C.border, borderRadius: 8, padding: 16, backgroundColor: C.bgAlt,
  },
  optionCardSelected: { borderColor: C.accent, backgroundColor: C.accentLight },
  optionCardDisabled: { opacity: 0.45 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  optionLabel: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: C.text },
  optionLabelDisabled: { color: C.textMuted },
  optionDesc: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, marginTop: 4 },
  soonBadge: {
    paddingHorizontal: 8, paddingVertical: 2,
    borderWidth: 1, borderColor: C.border, borderRadius: 10,
  },
  soonBadgeText: { fontFamily: 'serif', fontSize: 10, color: C.textMuted },
  checkIcon: { fontSize: 18, color: C.accent, fontWeight: '700' },
  btnRow: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  backBtn: { paddingVertical: 15, paddingRight: 8 },
  backBtnText: { fontFamily: 'serif', fontSize: 15, color: C.textMuted },
  nextBtn: {
    backgroundColor: C.accent, borderRadius: 8,
    paddingVertical: 15, paddingHorizontal: 28, alignItems: 'center',
  },
  nextBtnFlex: { flex: 1 },
  nextBtnDisabled: { opacity: 0.35 },
  nextBtnText: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: '#fff', letterSpacing: 0.3 },
});
