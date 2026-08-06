import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, Modal, Pressable } from 'react-native';
import { AI_CHECK_URL } from '../utils/aiCheck';
import { subscribeDismiss, dismissAllBubbles } from '../utils/dismissBubbles';
import { C } from '../theme';

const BUBBLE_MAX_WIDTH = 220;
const BUBBLE_GAP = 10; // space between bubble and the word above which it sits
const DEFAULT_BUBBLE_H = 40;
const SCREEN_MARGIN = 8;

// Duolingo-style tappable sentence: each word can be tapped to show its
// translation in a bubble positioned right above that specific word.
//
// The bubble renders inside a transparent Modal instead of a locally
// absolutely-positioned sibling — a local overlay's coordinates are relative
// to its own parent, which almost never sits at the screen's (0,0), and it
// can get clipped by an ancestor ScrollView. A Modal renders in its own
// layer anchored to the screen, so screen coordinates from measureInWindow
// (captured at tap time, not via onLayout — nested <Text> layout events are
// unreliable in RN and go stale the moment the screen scrolls) line up
// correctly, and its full-screen backdrop closes the bubble on any outside
// tap for free.
// `language` is the module's foreign language (the worker dictionary is
// bilingual pt ↔ that language). `contextLang` is the ACTUAL language `text`
// is written in — defaults to `language`, but must be 'pt' when this text is
// a Portuguese prompt (most modules show the prompt in Portuguese and only
// the answer in the foreign language; only reverse-mode modules flip that).
// `ensureConsent` (optional async → bool) gates the DeepSeek call.
export default function TappableSentence({ text, language, contextLang, textStyle, ensureConsent }) {
  const [sel, setSel] = useState(null); // { idx, word, state, translation, rect: {x,y,width,height} }
  const [bubbleH, setBubbleH] = useState(DEFAULT_BUBBLE_H);
  const wordRefs = useRef({});
  const screenW = Dimensions.get('window').width;

  // Dismiss when the sentence itself changes (next sentence/exercise), or
  // when a bubble opens in a DIFFERENT TappableSentence instance on the same
  // screen — otherwise two bubbles from different sentences can end up open
  // and stacked at once (e.g. Diálogos, which mounts several at a time).
  useEffect(() => { setSel(null); wordRefs.current = {}; }, [text]);
  useEffect(() => subscribeDismiss(() => setSel(null)), []);

  async function tapWord(rawWord, idx) {
    const word = rawWord.replace(/[.,!?¿¡;:'"()«»。，？！、]/g, '').trim();
    if (!word) return;
    if (sel && sel.idx === idx) { setSel(null); return; } // tap again to dismiss

    const nodeRef = wordRefs.current[idx];
    if (!nodeRef?.measureInWindow) return;
    nodeRef.measureInWindow(async (x, y, width, height) => {
      if (ensureConsent) {
        const ok = await ensureConsent();
        if (!ok) return;
      }
      const rect = { x, y, width, height };
      dismissAllBubbles(); // close any bubble open in another instance first
      setBubbleH(DEFAULT_BUBBLE_H);
      setSel({ idx, word, state: 'loading', rect });
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
        setSel(s => (s && s.idx === idx ? { ...s, state: 'done', translation } : s));
      } catch {
        setSel(s => (s && s.idx === idx ? { ...s, state: 'error' } : s));
      }
    });
  }

  const segments = String(text ?? '').split(/(\s+)/);
  let wordIdx = -1;

  const rect = sel?.rect;
  const bubbleLeft = rect
    ? Math.max(SCREEN_MARGIN, Math.min(rect.x, screenW - BUBBLE_MAX_WIDTH - SCREEN_MARGIN))
    : 0;
  const arrowLeft = rect
    ? Math.max(10, Math.min(rect.x + rect.width / 2 - bubbleLeft - 7, BUBBLE_MAX_WIDTH - 20))
    : 10;
  const bubbleTop = rect ? Math.max(SCREEN_MARGIN, rect.y - bubbleH - BUBBLE_GAP) : 0;

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
    <View>
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
              ref={el => { wordRefs.current[idx] = el; }}
              suppressHighlighting
              onPress={() => tapWord(seg, idx)}
              style={isSel ? styles.wordSelected : styles.word}>
              {seg}
            </Text>
          );
        })}
      </Text>

      <Modal visible={!!sel} transparent animationType="none" onRequestClose={() => setSel(null)}>
        <Pressable style={StyleSheet.absoluteFill} onPress={() => setSel(null)}>
          {sel && (
            <View
              style={[styles.bubbleWrapAbs, { left: bubbleLeft, top: bubbleTop }]}
              onLayout={e => setBubbleH(e.nativeEvent.layout.height - 7)}>
              <View style={styles.bubble}>{renderBubbleContent()}</View>
              <View style={[styles.bubbleArrow, { marginLeft: arrowLeft }]} />
            </View>
          )}
        </Pressable>
      </Modal>
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
  bubbleWrapAbs: { position: 'absolute', alignItems: 'flex-start' },
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
