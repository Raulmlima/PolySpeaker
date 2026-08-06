// Tiny pub-sub so opening a translation bubble in one TappableSentence
// instance closes any other bubble open elsewhere on screen — matters on
// screens like Diálogos where several TappableSentence instances (past
// lines + the current feedback line) are mounted at once, and without this
// two bubbles could end up stacked on top of each other.
const listeners = new Set();

export function subscribeDismiss(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function dismissAllBubbles() {
  listeners.forEach(fn => fn());
}
