import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { AI_CHECK_URL } from '../utils/aiCheck';
import { C } from '../theme';

// In-memory translation cache — a word tapped once never refetches this session
const cache = {};

// Duolingo-style tappable sentence: each word can be tapped to show its
// translation in a bubble above the sentence. `language` is the module's
// target language (the worker dictionary is bilingual pt ↔ target).
// `ensureConsent` (optional async → bool) gates the DeepSeek call.
export default function TappableSentence({ text, language, textStyle, ensureConsent }) {
  const [sel, setSel] = useState(null); // { idx, word, state: 'loading'|'done'|'error', translation }

  async function tapWord(rawWord, idx) {
    const word = rawWord.replace(/[.,!?¿¡;:'"()«»。，？！、]/g, '').trim();
    if (!word) return;
    if (sel && sel.idx === idx) { setSel(null); return; } // tap again to dismiss

    if (ensureConsent) {
      const ok = await ensureConsent();
      if (!ok) return;
    }

    const key = `${language}:${word.toLowerCase()}`;
    if (cache[key]) {
      setSel({ idx, word, state: 'done', translation: cache[key] });
      return;
    }
    setSel({ idx, word, state: 'loading' });
    try {
      const res = await fetch(`${AI_CHECK_URL}/dict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, language }),
      });
      const data = await res.json();
      if (!res.ok || !data.translation) throw new Error('no translation');
      cache[key] = data.translation;
      setSel(s => (s && s.idx === idx ? { idx, word, state: 'done', translation: data.translation } : s));
    } catch {
      setSel(s => (s && s.idx === idx ? { idx, word, state: 'error' } : s));
    }
  }

  const segments = String(text ?? '').split(/(\s+)/);
  let wordIdx = -1;

  return (
    <View>
      {sel && (
        <View style={styles.bubbleWrap}>
          <View style={styles.bubble}>
            {sel.state === 'loading' ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : sel.state === 'error' ? (
              <Text style={styles.bubbleText}>Tradução indisponível</Text>
            ) : (
              <Text style={styles.bubbleText}>
                <Text style={styles.bubbleWord}>{sel.word}</Text> = {sel.translation}
              </Text>
            )}
          </View>
          <View style={styles.bubbleArrow} />
        </View>
      )}
      <Text style={textStyle}>
        {segments.map((seg, i) => {
          if (/^\s+$/.test(seg) || seg === '') {
            return <Text key={i}>{seg}</Text>;
          }
          wordIdx++;
          const idx = wordIdx;
          const isSel = sel && sel.idx === idx;
          return (
            <Text
              key={i}
              suppressHighlighting
              onPress={() => tapWord(seg, idx)}
              style={isSel ? styles.wordSelected : styles.word}>
              {seg}
            </Text>
          );
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  word: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: C.border,
  },
  wordSelected: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: C.accent,
    color: C.accent,
  },
  bubbleWrap: { alignSelf: 'flex-start', marginBottom: 6, alignItems: 'flex-start' },
  bubble: {
    backgroundColor: C.navy,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: 300,
  },
  bubbleText: { color: '#fff', fontSize: 14 },
  bubbleWord: { fontWeight: '800' },
  bubbleArrow: {
    width: 0, height: 0, marginLeft: 16,
    borderLeftWidth: 7, borderRightWidth: 7, borderTopWidth: 7,
    borderLeftColor: 'transparent', borderRightColor: 'transparent',
    borderTopColor: C.navy,
  },
});
