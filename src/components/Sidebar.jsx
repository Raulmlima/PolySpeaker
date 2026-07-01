import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  Animated, StyleSheet, Dimensions, ActivityIndicator,
  KeyboardAvoidingView, Platform, Modal,
} from 'react-native';
import { verbTables, PRONOUNS } from '../data/verbTables';
import { C } from '../theme';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = Math.min(width * 0.88, 360);

export default function Sidebar({ visible, onClose }) {
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [tab, setTab] = useState('dict'); // 'dict' | 'verbs'
  const [query, setQuery] = useState('');
  const [dictResult, setDictResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTense, setSelectedTense] = useState(null);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : SIDEBAR_WIDTH,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  async function searchWord() {
    const word = query.trim();
    if (!word) return;
    setLoading(true);
    setError(null);
    setDictResult(null);
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${encodeURIComponent(word)}`);
      if (!res.ok) throw new Error('Palavra não encontrada');
      const data = await res.json();
      setDictResult(data[0]);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Referência</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, tab === 'dict' && styles.tabActive]}
              onPress={() => setTab('dict')}>
              <Text style={[styles.tabText, tab === 'dict' && styles.tabTextActive]}>Dicionário</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, tab === 'verbs' && styles.tabActive]}
              onPress={() => setTab('verbs')}>
              <Text style={[styles.tabText, tab === 'verbs' && styles.tabTextActive]}>Tabelas verbais</Text>
            </TouchableOpacity>
          </View>

          {tab === 'dict' ? (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
              <View style={styles.dictSearch}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Buscar palavra em espanhol..."
                  placeholderTextColor={C.textMuted}
                  value={query}
                  onChangeText={setQuery}
                  onSubmitEditing={searchWord}
                  returnKeyType="search"
                  autoCapitalize="none"
                />
                <TouchableOpacity style={styles.searchBtn} onPress={searchWord}>
                  <Text style={styles.searchBtnText}>Buscar</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.dictResults} keyboardShouldPersistTaps="handled">
                {loading && <ActivityIndicator color={C.accent} style={{ marginTop: 24 }} />}
                {error && <Text style={styles.errorText}>{error}</Text>}
                {dictResult && <DictEntry entry={dictResult} />}
              </ScrollView>
            </KeyboardAvoidingView>
          ) : (
            <ScrollView style={styles.verbList}>
              {verbTables.map((table, i) => (
                <View key={i}>
                  <TouchableOpacity
                    style={styles.tenseRow}
                    onPress={() => setSelectedTense(selectedTense === i ? null : i)}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.tenseName}>{table.tense}</Text>
                      <Text style={styles.tenseDesc}>{table.description}</Text>
                    </View>
                    <Text style={styles.tenseChevron}>{selectedTense === i ? '▲' : '▼'}</Text>
                  </TouchableOpacity>
                  {selectedTense === i && <VerbTableView table={table} />}
                </View>
              ))}
            </ScrollView>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
}

function DictEntry({ entry }) {
  return (
    <View style={styles.dictEntry}>
      <Text style={styles.dictWord}>{entry.word}</Text>
      {entry.phonetics?.[0]?.text && (
        <Text style={styles.dictPhonetic}>{entry.phonetics[0].text}</Text>
      )}
      {entry.meanings?.map((meaning, i) => (
        <View key={i} style={styles.dictMeaning}>
          <Text style={styles.dictPartOfSpeech}>{meaning.partOfSpeech}</Text>
          {meaning.definitions?.slice(0, 3).map((def, j) => (
            <View key={j} style={styles.dictDef}>
              <Text style={styles.dictDefText}>• {def.definition}</Text>
              {def.example && <Text style={styles.dictExample}>"{def.example}"</Text>}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function VerbTableView({ table }) {
  return (
    <View style={styles.verbTableContainer}>
      {table.verbs.map((verb, i) => (
        <View key={i} style={styles.verbBlock}>
          <View style={styles.verbBlockHeader}>
            <Text style={styles.verbInfinitive}>{verb.infinitive}</Text>
            <Text style={styles.verbMeaning}>{verb.meaning}</Text>
          </View>
          {PRONOUNS.map((pronoun, j) => (
            <View key={j} style={[styles.verbRow, j % 2 === 0 && styles.verbRowAlt]}>
              <Text style={styles.verbPronoun}>{pronoun}</Text>
              <Text style={styles.verbForm}>{verb.forms[j]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: C.bg,
    borderLeftWidth: 1,
    borderLeftColor: C.border,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 52,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  headerTitle: {
    fontFamily: 'serif',
    fontSize: 18,
    color: C.text,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  closeBtn: {
    padding: 6,
  },
  closeBtnText: {
    fontSize: 18,
    color: C.textMuted,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 11,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: C.accent,
  },
  tabText: {
    fontSize: 13,
    color: C.textMuted,
    fontFamily: 'serif',
  },
  tabTextActive: {
    color: C.accent,
    fontWeight: '600',
  },
  dictSearch: {
    flexDirection: 'row',
    padding: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: 'serif',
    fontSize: 15,
    color: C.text,
    backgroundColor: C.bgAlt,
  },
  searchBtn: {
    backgroundColor: C.accent,
    borderRadius: 4,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  searchBtnText: {
    color: '#fff',
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '600',
  },
  dictResults: {
    flex: 1,
    paddingHorizontal: 14,
  },
  errorText: {
    color: C.incorrect,
    fontFamily: 'serif',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
  dictEntry: {
    paddingVertical: 12,
  },
  dictWord: {
    fontFamily: 'serif',
    fontSize: 22,
    fontWeight: '700',
    color: C.text,
  },
  dictPhonetic: {
    fontFamily: 'serif',
    fontSize: 14,
    color: C.textMuted,
    marginBottom: 8,
  },
  dictMeaning: {
    marginTop: 10,
  },
  dictPartOfSpeech: {
    fontFamily: 'serif',
    fontSize: 12,
    fontStyle: 'italic',
    color: C.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  dictDef: {
    marginBottom: 6,
  },
  dictDefText: {
    fontFamily: 'serif',
    fontSize: 14,
    color: C.text,
    lineHeight: 20,
  },
  dictExample: {
    fontFamily: 'serif',
    fontSize: 13,
    color: C.textMuted,
    fontStyle: 'italic',
    marginLeft: 12,
    marginTop: 2,
  },
  verbList: {
    flex: 1,
  },
  tenseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  tenseName: {
    fontFamily: 'serif',
    fontSize: 15,
    fontWeight: '700',
    color: C.text,
  },
  tenseDesc: {
    fontFamily: 'serif',
    fontSize: 12,
    color: C.textMuted,
    marginTop: 2,
  },
  tenseChevron: {
    fontSize: 11,
    color: C.textMuted,
  },
  verbTableContainer: {
    backgroundColor: C.bgAlt,
    paddingBottom: 8,
  },
  verbBlock: {
    marginHorizontal: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  verbBlockHeader: {
    backgroundColor: C.accent,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verbInfinitive: {
    fontFamily: 'serif',
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  verbMeaning: {
    fontFamily: 'serif',
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    fontStyle: 'italic',
  },
  verbRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'space-between',
  },
  verbRowAlt: {
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  verbPronoun: {
    fontFamily: 'serif',
    fontSize: 13,
    color: C.textMuted,
    width: 100,
  },
  verbForm: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },
});
