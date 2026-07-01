// German umlaut substitutions: ae->a-umlaut, oe->o-umlaut, ue->u-umlaut, ss->sharp-s
function normalizeUmlauts(str) {
  return str
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    .replace(/ss/g, 'ß');
}

export function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[.,!?¿¡;:'"()\-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function checkAnswer(input, acceptedAnswers) {
  if (!acceptedAnswers?.length) return false;
  const normalized = normalize(input);
  if (!normalized) return false;
  // Direct match
  if (acceptedAnswers.some(ans => normalize(ans) === normalized)) return true;
  // German umlaut substitution: allow "ae"->a-umlaut etc. in input
  const normalizedUmlaut = normalize(normalizeUmlauts(input));
  return acceptedAnswers.some(ans => normalize(ans) === normalizedUmlaut);
}
