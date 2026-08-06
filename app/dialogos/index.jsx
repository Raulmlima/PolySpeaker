import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getDialogosForLang } from '../../src/data/dialogos';
import { LANGUAGES, LANGUAGE_GROUPS } from '../../src/storage';
import { C, cardShadow } from '../../src/theme';
import TabBar from '../../src/components/TabBar';
import Poly from '../../src/components/Poly';

const LEVELS = ['basico', 'intermediario', 'avancado', 'fluente'];

export default function DialogosScreen() {
  const router = useRouter();
  const { lang } = useLocalSearchParams();
  const activeLang = lang ?? 'es';
  const DIALOGOS = getDialogosForLang(activeLang);
  const langInfo = LANGUAGES.find(l => l.id === activeLang);
  const langLabel = langInfo?.label ?? 'Espanhol';
  const isReverse = langInfo?.reverseMode ?? false;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Diálogos Reais</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        {!DIALOGOS ? (
          <View style={styles.comingSoon}>
            <Poly size={72} mood="neutral" />
            <Text style={styles.comingSoonTitle}>Diálogos de {langLabel} a caminho</Text>
            <Text style={styles.comingSoonBody}>
              Ainda não temos conversas reais prontas para {langLabel.toLowerCase()}. Estamos
              escrevendo esse conteúdo com cuidado — sem atalhos — e ele chega em breve.
              Enquanto isso, continue pela trilha principal.
            </Text>
          </View>
        ) : (
          <>
            <Text style={styles.intro}>
              {isReverse
                ? `Traduza conversas reais para o português. Escolha um nível:`
                : `Traduza conversas reais do português para o ${langLabel.toLowerCase()}. Escolha um nível:`}
            </Text>
            {LEVELS.map(level => {
              const d = DIALOGOS[level];
              if (!d) return null;
              return (
                <TouchableOpacity
                  key={level}
                  style={styles.levelCard}
                  onPress={() => router.push(`/dialogos/${level}?lang=${activeLang}`)}
                  activeOpacity={0.7}>
                  <Text style={styles.levelLabel}>{d.label}</Text>
                  <Text style={styles.levelDesc}>{d.desc}</Text>
                  <Text style={styles.levelCount}>{d.dialogos.length} diálogos</Text>
                </TouchableOpacity>
              );
            })}
          </>
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
      <TabBar active="dialogos" lang={activeLang} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  backBtn: { minWidth: 70 },
  backBtnText: { fontSize: 14, color: C.accent },
  headerTitle: { fontSize: 17, fontWeight: '700', color: C.text },
  scroll: { padding: 20 },
  intro: { fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 20, lineHeight: 20 },
  levelCard: {
    backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border,
    borderRadius: 10, padding: 18, marginBottom: 12,
  },
  levelLabel: { fontSize: 18, fontWeight: '700', color: C.text, marginBottom: 4 },
  levelDesc: { fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 8 },
  levelCount: { fontSize: 11, color: C.accent },
  comingSoon: { alignItems: 'center', paddingTop: 48, paddingHorizontal: 12 },
  comingSoonTitle: { fontSize: 19, fontWeight: '800', color: C.text, marginTop: 18, textAlign: 'center' },
  comingSoonBody: { fontSize: 14, color: C.textMuted, textAlign: 'center', lineHeight: 21, marginTop: 10 },
});
