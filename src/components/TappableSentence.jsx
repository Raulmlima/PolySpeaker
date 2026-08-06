import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { AI_CHECK_URL } from '../utils/aiCheck';
import { C } from '../theme';

// In-memory translation cache — a word tapped once never refetches this session
const cache = {};

// Duolingo-style tappable sentence: each word can be tapped to show its
// translation in a bubble above the sentence. `language` is the module's
// foreign language (the worker dictionary is bilingual pt ↔ that language).
// `contextLang` is the ACTUAL language `text` is written in — defaults to
// `language`, but must be 'pt' when this text is a Portuguese prompt (most
// modules show the prompt in Portuguese and only the answer in the foreign
// language; only reverse-mode modules flip that). Getting this wrong makes
// the model think a Portuguese sentence is already in the target language
// and echo the word back untranslated instead of translating it.
// `ensureConsent` (optional async → bool) gates the DeepSeek call.
export default function TappableSentence({ text, language, contextLang, textStyle, ensureConsent }) {
  const [sel, setSel] = useState(null); // { idx, word, state: 'loading'|'done'|'error', translation }

  async function tapWord(rawWord, idx) {
    const word = rawWord.replace(/[.,!?¿¡;:'"()«»。，？！、]/g, '').trim();
    if (!word) return;
    if (sel && sel.idx === idx) { setSel(null); return; } // tap again to dismiss

    if (ensureConsent) {
      const ok = await ensureConsent();
      if (!ok) return;
    }

    // Keyed by sentence too — the same word can mean something different
    // depending on its conjugation/gender/number in this specific sentence.
    const key = `${language}:${(text ?? '').toLowerCase()}:${word.toLowerCase()}`;
    if (cache[key]) {
      setSel({ idx, word, state: 'done', translation: cache[key] });
      return;
    }
    setSel({ idx, word, state: 'loading' });
    try {
      const res = await fetch(`${AI_CHECK_URL}/dict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, language, context: text, contextLang: contextLang ?? language }),
      });
      const data = await res.json();
      // Safety net: a single tapped word should never come back as a full
      // sentence — cap it so a model slip-up can't blow up the whole layout.
      const translation = String(data.translation ?? '').slice(0, 80);
      if (!res.ok || !translation) throw new Error('no translation');
      cache[key] = translation;
      setSel(s => (s && s.idx === idx ? { idx, word, state: 'done', translation } : s));
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
