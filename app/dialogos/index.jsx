import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { getDialogosForLang } from '../../src/data/dialogos';
import { LANGUAGES, LANGUAGE_GROUPS } from '../../src/storage';
import { C } from '../../src/theme';

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
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Diálogos Reais</Text>
        <View style={{ width: 70 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
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
        <View style={{ height: 40 }} />
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
  scroll: { padding: 20 },
  intro: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 20, lineHeight: 20 },
  levelCard: {
    backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border,
    borderRadius: 10, padding: 18, marginBottom: 12,
  },
  levelLabel: { fontFamily: 'serif', fontSize: 18, fontWeight: '700', color: C.text, marginBottom: 4 },
  levelDesc: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, fontStyle: 'italic', marginBottom: 8 },
  levelCount: { fontFamily: 'serif', fontSize: 11, color: C.accent },
});
