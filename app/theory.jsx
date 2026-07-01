import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { modules, STAGES } from '../src/data/modules';
import { C } from '../src/theme';
import TheoryRenderer from '../src/components/TheoryRenderer';

const STAGE_DESC = {
  'Fundamentos': 'Ser, estar, artigos e as bases do idioma.',
  'Básico': 'Verbos regulares, irregulares, passado e futuro.',
  'Intermediário': 'Reflexivos, pronomes, imperativo e subjuntivo.',
  'Avançado': 'Compostos, condicionais, passiva e expressões.',
  'Variados': 'Treino misto — sem teoria específica.',
};

export default function TheoryScreen() {
  const router = useRouter();
  const [openStage, setOpenStage] = useState(null);
  const [openMod, setOpenMod] = useState(null);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Teoria</Text>
        <View style={{ width: 64 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.intro}>
          Selecione uma etapa para ver a teoria de cada módulo.
        </Text>

        {STAGES.filter(s => s !== 'Variados').map(stage => {
          const stageMods = modules.filter(m => m.stage === stage && m.theory);
          if (!stageMods.length) return null;
          const isStageOpen = openStage === stage;

          return (
            <View key={stage} style={styles.stageBlock}>
              <TouchableOpacity
                style={[styles.stageBtn, isStageOpen && styles.stageBtnOpen]}
                onPress={() => {
                  setOpenStage(isStageOpen ? null : stage);
                  setOpenMod(null);
                }}
                activeOpacity={0.7}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.stageBtnTitle, isStageOpen && styles.stageBtnTitleOpen]}>
                    {stage}
                  </Text>
                  <Text style={styles.stageBtnDesc}>{STAGE_DESC[stage]}</Text>
                </View>
                <Text style={styles.stageChevron}>{isStageOpen ? '▲' : '▼'}</Text>
              </TouchableOpacity>

              {isStageOpen && (
                <View style={styles.modList}>
                  {stageMods.map((mod, i) => {
                    const isModOpen = openMod === mod.id;
                    return (
                      <View key={mod.id}>
                        <TouchableOpacity
                          style={[styles.modBtn, isModOpen && styles.modBtnOpen]}
                          onPress={() => setOpenMod(isModOpen ? null : mod.id)}
                          activeOpacity={0.7}>
                          <View style={styles.modBtnNum}>
                            <Text style={styles.modBtnNumText}>{i + 1}</Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.modBtnTitle}>{mod.title}</Text>
                            {mod.subtitle
                              ? <Text style={styles.modBtnSub}>{mod.subtitle}</Text>
                              : null}
                          </View>
                          <Text style={styles.modChevron}>{isModOpen ? '▲' : '▼'}</Text>
                        </TouchableOpacity>

                        {isModOpen && (
                          <View style={styles.theoryBox}>
                            <TheoryRenderer text={mod.theory} />
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}

        <View style={{ height: 48 }} />
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
  backBtn: { paddingVertical: 4, paddingRight: 12, minWidth: 64 },
  backBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  headerTitle: { fontFamily: 'serif', fontSize: 17, fontWeight: '700', color: C.text },
  scroll: { padding: 18 },
  intro: {
    fontFamily: 'serif', fontSize: 13, color: C.textMuted,
    fontStyle: 'italic', marginBottom: 20, lineHeight: 20,
  },
  stageBlock: { marginBottom: 12 },
  stageBtn: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border,
    borderRadius: 10, paddingVertical: 14, paddingHorizontal: 16,
  },
  stageBtnOpen: {
    backgroundColor: C.accentLight, borderColor: C.accent,
    borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
  },
  stageBtnTitle: { fontFamily: 'serif', fontSize: 16, fontWeight: '700', color: C.text },
  stageBtnTitleOpen: { color: C.accent },
  stageBtnDesc: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 2 },
  stageChevron: { fontSize: 13, color: C.textMuted, marginLeft: 8 },
  modList: {
    borderWidth: 1, borderTopWidth: 0, borderColor: C.accent,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  modBtn: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, paddingHorizontal: 14,
    borderTopWidth: 1, borderTopColor: C.border,
    backgroundColor: C.bg, gap: 10,
  },
  modBtnOpen: { backgroundColor: C.bgAlt },
  modBtnNum: {
    width: 24, height: 24, borderRadius: 12,
    backgroundColor: C.accentLight, alignItems: 'center', justifyContent: 'center',
  },
  modBtnNumText: { fontFamily: 'serif', fontSize: 11, fontWeight: '700', color: C.accent },
  modBtnTitle: { fontFamily: 'serif', fontSize: 14, fontWeight: '700', color: C.text },
  modBtnSub: { fontFamily: 'serif', fontSize: 11, color: C.textMuted, fontStyle: 'italic', marginTop: 1 },
  modChevron: { fontSize: 11, color: C.textMuted },
  theoryBox: {
    backgroundColor: C.bgAlt, borderTopWidth: 1, borderTopColor: C.border,
    paddingHorizontal: 18, paddingVertical: 16,
  },
  theoryText: { fontFamily: 'serif', fontSize: 14, color: C.text, lineHeight: 24 },
});
