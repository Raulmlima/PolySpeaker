import * as Localization from 'expo-localization';

// UI chrome language (tutorial, tab bar, etc.) — separate from which
// language the user is STUDYING. Pulled from the device's system locale so
// a first-time user sees onboarding in a language they already understand.
// Only pt/en/ar are supported; anything else falls back to English.
const SUPPORTED = new Set(['pt', 'en', 'ar']);

let cached = null;

export function getUILang() {
  if (cached) return cached;
  try {
    const code = (Localization.getLocales?.()[0]?.languageCode ?? 'en').toLowerCase();
    cached = SUPPORTED.has(code) ? code : 'en';
  } catch {
    cached = 'en';
  }
  return cached;
}

// Pick from a { pt, en, ar } dictionary using the device's UI language.
export function t(dict) {
  const lang = getUILang();
  return dict[lang] ?? dict.en ?? dict.pt;
}
