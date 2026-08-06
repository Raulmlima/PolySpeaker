import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { AI_CHECK_URL } from '../utils/aiCheck';
import { C } from '../theme';

const BUBBLE_MAX_WIDTH = 220;
const BUBBLE_GAP = 10; // space between bubble and the word above which it sits
const DEFAULT_BUBBLE_H = 40;

// Duolingo-style tappable sentence: each word can be tapped to show its
// translation in a bubble positioned right above that specific word (each
// word is measured on layout so the bubble tracks it precisely, instead of
// always floating at a fixed spot regardless of which word was tapped).
// `language` is the module's foreign language (the worker dictionary is
// bilingual pt ↔ that language). `contextLang` is the ACTUAL language `text`
// is written in — defaults to `language`, but must be 'pt' when this text is
// a Portuguese prompt (most modules show the prompt in Portuguese and only
// the answer in the foreign language; only reverse-mode modules flip that).
// Getting this wrong makes the model think a Portuguese sentence is already
// in the target language and echo the word back untranslated.
// `ensureConsent` (optional async → bool) gates the DeepSeek call.
export default function TappableSentence({ text, language, contextLang, textStyle, ensureConsent }) {
  const [sel, setSel] = useState(null); // { idx, word, state: 'loading'|'done'|'error', translation }
  const [containerW, setContainerW] = useState(0);
  const [bubbleH, setBubbleH] = useState(DEFAULT_BUBBLE_H);
  const wordLayouts = useRef({});
  // Arabic sentences render right-to-left; per-word geometric measurement
  // and left-anchored bubble placement doesn't account for bidi reshaping,
  // so that case keeps the simpler always-on-top bubble instead of guessing.
  const isRTL = contextLang === 'ar';

  // Dismiss any open bubble the moment the sentence itself changes (next
  // sentence, next exercise, etc.) — otherwise the old translation for a word
  // that no longer exists on screen just sits there.
  useEffect(() => { setSel(null); wordLayouts.current = {}; }, [text]);

  async function tapWord(rawWord, idx) {
    const word = rawWord.replace(/[.,!?¿¡;:'"()«»。，？！、]/g, '').trim();
    if (!word) return;
    if (sel && sel.idx === idx) { setSel(null); return; } // tap again to dismiss

    if (ensureConsent) {
      const ok = await ensureConsent();
      if (!ok) return;
    }

    // No caching — this is a single learning session, and a stale cached
    // value hanging around after a fix or a rare model slip is worse than
    // the cost of one extra cheap API call per tap.
    setSel({ idx, word, state: 'loading' });
    try {
      const res = await fetch(`${AI_CHECK_URL}/dict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, language, context: text, contextLang: contextLang ?? language }),
      });
      const data = await res.json();
      // Safety net: a single tapped word should never come back as a full
      // sentence — cap it so a model slip-up can't blow up the layout.
      const translation = String(data.translation ?? '').slice(0, 80);
      if (!res.ok || !translation) throw new Error('no translation');
      setSel(s => (s && s.idx === idx ? { idx, word, state: 'done', translation } : s));
    } catch {
      setSel(s => (s && s.idx === idx ? { idx, word, state: 'error' } : s));
    }
  }

  const segments = String(text ?? '').split(/(\s+)/);
  let wordIdx = -1;

  const wl = sel ? wordLayouts.current[sel.idx] : null;
  const bubbleLeft = wl && containerW
    ? Math.max(4, Math.min(wl.x, containerW - BUBBLE_MAX_WIDTH - 4))
    : 0;
  const arrowLeft = wl
    ? Math.max(10, Math.min(wl.x + wl.width / 2 - bubbleLeft - 7, BUBBLE_MAX_WIDTH - 20))
    : 10;
  const bubbleTop = wl ? Math.max(0, wl.y - bubbleH - BUBBLE_GAP) : 0;

  function renderBubbleContent() {
    if (sel.state === 'loading') return <ActivityIndicator size="small" color="#fff" />;
    if (sel.state === 'error') return <Text style={styles.bubbleText}>Tradução indisponível</Text>;
    return (
      <Text style={styles.bubbleText}>
        <Text style={styles.bubbleWord}>{sel.word}</Text> = {sel.translation}
      </Text>
    );
  }

  return (
    <View
      style={isRTL ? undefined : styles.container}
      onLayout={isRTL ? undefined : e => setContainerW(e.nativeEvent.layout.width)}>
      {sel && isRTL && (
        <View style={styles.bubbleWrapStatic}>
          <View style={styles.bubble}>{renderBubbleContent()}</View>
          <View style={styles.bubbleArrow} />
        </View>
      )}
      {sel && !isRTL && (
        <View
          style={[styles.bubbleWrapAbs, { left: bubbleLeft, top: bubbleTop }]}
          onLayout={e => setBubbleH(e.nativeEvent.layout.height - 7)}>
          <View style={styles.bubble}>{renderBubbleContent()}</View>
          <View style={[styles.bubbleArrow, { marginLeft: arrowLeft }]} />
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
              onLayout={isRTL ? undefined : e => { wordLayouts.current[idx] = e.nativeEvent.layout; }}
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
  container: { position: 'relative' },
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
  bubbleWrapStatic: { alignSelf: 'flex-start', marginBottom: 6, alignItems: 'flex-start' },
  bubbleWrapAbs: { position: 'absolute', alignItems: 'flex-start', zIndex: 10 },
  bubble: {
    backgroundColor: C.navy,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: BUBBLE_MAX_WIDTH,
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
