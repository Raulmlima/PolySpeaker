import * as FileSystem from 'expo-file-system/legacy';

function getProfilePath() {
  return FileSystem.documentDirectory + 'lingua_profile.json';
}

export async function getProfile() {
  try {
    const path = getProfilePath();
    const info = await FileSystem.getInfoAsync(path);
    if (!info.exists) return null;
    const raw = await FileSystem.readAsStringAsync(path);
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function saveProfile(profile) {
  await FileSystem.writeAsStringAsync(getProfilePath(), JSON.stringify(profile));
}

function getISOWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

export async function updateWeekStreak(profile) {
  const now = getISOWeekKey();
  const last = profile.lastActiveWeek ?? null;

  if (last === now) return profile; // already counted this week

  // Check if last active week was the immediately preceding week
  const prev = getISOWeekKey(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const streak = last === prev ? (profile.weekStreak ?? 0) + 1 : 1;

  const updated = { ...profile, weekStreak: streak, lastActiveWeek: now };
  await saveProfile(updated);
  return updated;
}

export const LEVELS_BY_GROUP = {
  pt: [
    { id: 'iniciante', label: 'Iniciante', desc: 'Nunca estudei este idioma', startStage: 'Fundamentos' },
    { id: 'basico', label: 'Básico', desc: 'Sei algumas palavras e frases simples', startStage: 'Básico' },
    { id: 'intermediario', label: 'Intermediário', desc: 'Consigo manter uma conversa simples', startStage: 'Intermediário' },
    { id: 'avancado', label: 'Avançado', desc: 'Leio e falo com razoável fluência', startStage: 'Avançado' },
  ],
  en: [
    { id: 'iniciante', label: 'Beginner', desc: "I've never studied this language", startStage: 'Fundamentos' },
    { id: 'basico', label: 'Basic', desc: 'I know some simple words and phrases', startStage: 'Básico' },
    { id: 'intermediario', label: 'Intermediate', desc: 'I can hold a simple conversation', startStage: 'Intermediário' },
    { id: 'avancado', label: 'Advanced', desc: 'I read and speak with reasonable fluency', startStage: 'Avançado' },
  ],
  ar: [
    { id: 'iniciante', label: 'مبتدئ', desc: 'لم أدرس هذه اللغة من قبل', startStage: 'Fundamentos' },
    { id: 'basico', label: 'أساسي', desc: 'أعرف بعض الكلمات والعبارات البسيطة', startStage: 'Básico' },
    { id: 'intermediario', label: 'متوسط', desc: 'أستطيع إجراء محادثة بسيطة', startStage: 'Intermediário' },
    { id: 'avancado', label: 'متقدم', desc: 'أقرأ وأتحدث بطلاقة معقولة', startStage: 'Avançado' },
  ],
};
// Default (Portuguese) level list — kept for any code that hasn't been updated to pass a group
export const LEVELS = LEVELS_BY_GROUP.pt;
export function getLevels(group = 'pt') {
  return LEVELS_BY_GROUP[group] ?? LEVELS_BY_GROUP.pt;
}

// Display labels/descriptions for the internal STAGES keys (which stay in Portuguese
// since they're also used as the literal `stage` field stored in module data).
export const STAGE_LABELS_BY_GROUP = {
  pt: {
    Alfabeto: 'Alfabeto', Fundamentos: 'Fundamentos', 'Básico': 'Básico',
    'Intermediário': 'Intermediário', 'Avançado': 'Avançado', Variados: 'Variados',
  },
  en: {
    Alfabeto: 'Alphabet', Fundamentos: 'Fundamentals', 'Básico': 'Basic',
    'Intermediário': 'Intermediate', 'Avançado': 'Advanced', Variados: 'Mixed',
  },
  ar: {
    Alfabeto: 'الأبجدية', Fundamentos: 'الأساسيات', 'Básico': 'أساسي',
    'Intermediário': 'متوسط', 'Avançado': 'متقدم', Variados: 'متنوع',
  },
};
export const STAGE_DESC_BY_GROUP = {
  pt: {
    Alfabeto: 'Os sons, letras e pronúncia — o ponto de partida.',
    Fundamentos: 'As bases do idioma — sem elas nada funciona.',
    'Básico': 'Os verbos, os tempos, o essencial para se comunicar.',
    'Intermediário': 'Pronomes, subjuntivo e as estruturas que diferenciam.',
    'Avançado': 'Nuances, passiva, condicionais e expressões idiomáticas.',
    Variados: 'Treino livre com frases mistas de todos os níveis.',
  },
  en: {
    Alfabeto: 'Sounds, letters and pronunciation — the starting point.',
    Fundamentos: 'The basics of the language — nothing works without them.',
    'Básico': 'Verbs, tenses, the essentials to communicate.',
    'Intermediário': 'Pronouns, subjunctive and the structures that set you apart.',
    'Avançado': 'Nuances, passive voice, conditionals and idiomatic expressions.',
    Variados: 'Free practice with mixed sentences from every level.',
  },
  ar: {
    Alfabeto: 'الأصوات والحروف والنطق — نقطة البداية.',
    Fundamentos: 'أساسيات اللغة — بدونها لا شيء يعمل.',
    'Básico': 'الأفعال والأزمنة، الأساسيات للتواصل.',
    'Intermediário': 'الضمائر وصيغة الشرط والتراكيب التي تميزك.',
    'Avançado': 'الفوارق الدقيقة، صيغة المجهول، الجمل الشرطية والتعبيرات الاصطلاحية.',
    Variados: 'تدريب حر بجمل مختلطة من جميع المستويات.',
  },
};
export function getStageLabel(stage, group = 'pt') {
  return (STAGE_LABELS_BY_GROUP[group] ?? STAGE_LABELS_BY_GROUP.pt)[stage] ?? stage;
}
export function getStageDesc(stage, group = 'pt') {
  return (STAGE_DESC_BY_GROUP[group] ?? STAGE_DESC_BY_GROUP.pt)[stage] ?? '';
}

export const LANGUAGE_GROUPS = [
  { id: 'pt', label: 'A partir do Português', sublabel: 'Para quem fala português', locales: ['pt'] },
  { id: 'en', label: 'A partir do Inglês',    sublabel: 'For English speakers',      locales: ['en'] },
  { id: 'ar', label: 'A partir do Árabe',     sublabel: 'للناطقين بالعربية',          locales: ['ar'] },
];

export const LANGUAGES = [
  // Grupo: falante de português aprendendo outro idioma
  { id: 'es', label: 'Espanhol',             tts: 'es-ES', dictPair: 'pt|es', dictFromLabel: 'português', available: true,  group: 'pt' },
  { id: 'en', label: 'Inglês',               tts: 'en-US', dictPair: 'pt|en', dictFromLabel: 'português', available: true,  group: 'pt' },
  { id: 'de', label: 'Alemão',               tts: 'de-DE', dictPair: 'pt|de', dictFromLabel: 'português', available: true,  group: 'pt' },
  { id: 'fr', label: 'Francês',              tts: 'fr-FR', dictPair: 'pt|fr', dictFromLabel: 'português', available: true,  group: 'pt' },
  { id: 'it', label: 'Italiano',             tts: 'it-IT', dictPair: 'pt|it', dictFromLabel: 'português', available: true,  group: 'pt' },
  { id: 'zh', label: 'Mandarim',             tts: 'zh-CN', dictPair: 'pt|zh', dictFromLabel: 'português', available: true,  group: 'pt' },
  // Grupo: falante de inglês aprendendo português
  { id: 'pt', label: 'Português Brasileiro', tts: 'pt-BR', dictPair: 'en|pt', dictFromLabel: 'inglês',    available: true,  group: 'en', reverseMode: true },
  // Grupo: falante de árabe aprendendo português
  { id: 'ar', label: 'Português Brasileiro', tts: 'pt-BR', dictPair: 'ar|pt', dictFromLabel: 'árabe',     available: true,  group: 'ar', reverseMode: true },
];

// Detect the user's device locale group ('pt', 'en', 'ar', or null)
export function getDeviceLocaleGroup() {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale ?? '';
    const lang = locale.split('-')[0].toLowerCase();
    if (lang === 'pt') return 'pt';
    if (lang === 'ar') return 'ar';
    if (lang === 'en') return 'en';
    return null;
  } catch (_) {
    return null;
  }
}

// Return LANGUAGE_GROUPS sorted so the device locale group comes first
export function getOrderedLanguageGroups() {
  const detected = getDeviceLocaleGroup();
  if (!detected) return LANGUAGE_GROUPS;
  return [
    ...LANGUAGE_GROUPS.filter(g => g.id === detected),
    ...LANGUAGE_GROUPS.filter(g => g.id !== detected),
  ];
}
