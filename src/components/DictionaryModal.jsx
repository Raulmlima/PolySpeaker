import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Modal,
  StyleSheet, ActivityIndicator, ScrollView,
  KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import { C } from '../theme';

const { height } = Dimensions.get('window');

export default function DictionaryModal({ visible, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  async function search() {
    const word = query.trim();
    if (!word) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=pt|es`
      );
      const data = await res.json();
      if (data.responseStatus !== 200) throw new Error('Não encontrado');
      setResult({
        original: word,
        translation: data.responseData.translatedText,
        matches: data.matches
          ?.filter(m => m.quality > 70 && m.translation !== data.responseData.translatedText)
          ?.slice(0, 3) ?? [],
      });
    } catch (e) {
      setError('Palavra não encontrada ou sem conexão.');
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setQuery('');
    setResult(null);
    setError(null);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}>
        <TouchableOpacity style={styles.backdrop} onPress={handleClose} activeOpacity={1} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <Text style={styles.title}>Dicionário  PT → ES</Text>
            <TouchableOpacity onPress={handleClose}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchRow}>
            <TextInput
              ref={inputRef}
              style={styles.input}
              placeholder="Palavra em português..."
              placeholderTextColor={C.textMuted}
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={search}
              returnKeyType="search"
              autoCapitalize="none"
              autoFocus
            />
            <TouchableOpacity style={styles.searchBtn} onPress={search}>
              <Text style={styles.searchBtnText}>Buscar</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.results} keyboardShouldPersistTaps="handled">
            {loading && <ActivityIndicator color={C.accent} style={{ marginTop: 24 }} />}

            {error && <Text style={styles.errorText}>{error}</Text>}

            {result && (
              <View style={styles.resultBox}>
                <Text style={styles.originalWord}>{result.original}</Text>
                <Text style={styles.arrow}>↓</Text>
                <Text style={styles.translatedWord}>{result.translation}</Text>

                {result.matches.length > 0 && (
                  <View style={styles.altsBox}>
                    <Text style={styles.altsLabel}>Outras traduções:</Text>
                    {result.matches.map((m, i) => (
                      <Text key={i} style={styles.altText}>• {m.translation}</Text>
                    ))}
                  </View>
                )}
              </View>
            )}
            <View style={{ height: 40 }} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  sheet: {
    backgroundColor: C.bg,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: height * 0.65,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: C.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
    letterSpacing: 0.3,
  },
  closeText: {
    fontSize: 18,
    color: C.textMuted,
  },
  searchRow: {
    flexDirection: 'row',
    padding: 14,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: C.border,
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontFamily: 'serif',
    fontSize: 16,
    color: C.text,
    backgroundColor: C.bgAlt,
  },
  searchBtn: {
    backgroundColor: C.accent,
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  searchBtnText: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  results: {
    paddingHorizontal: 20,
  },
  errorText: {
    fontFamily: 'serif',
    fontSize: 14,
    color: C.incorrect,
    marginTop: 16,
    textAlign: 'center',
  },
  resultBox: {
    paddingTop: 16,
    alignItems: 'center',
  },
  originalWord: {
    fontFamily: 'serif',
    fontSize: 22,
    color: C.textMuted,
    fontStyle: 'italic',
  },
  arrow: {
    fontSize: 20,
    color: C.border,
    marginVertical: 4,
  },
  translatedWord: {
    fontFamily: 'serif',
    fontSize: 28,
    fontWeight: '700',
    color: C.accent,
    marginBottom: 16,
  },
  altsBox: {
    width: '100%',
    backgroundColor: C.bgAlt,
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  altsLabel: {
    fontFamily: 'serif',
    fontSize: 11,
    color: C.textMuted,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  altText: {
    fontFamily: 'serif',
    fontSize: 15,
    color: C.text,
    marginBottom: 3,
  },
});
