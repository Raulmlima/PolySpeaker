import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

export function initNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true,
    }),
  });
}

function dateStr(d = new Date()) {
  // Local date, not UTC — streaks and reminders follow the phone's day
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function todayStr() {
  return dateStr();
}
function yesterdayStr() {
  return dateStr(new Date(Date.now() - 24 * 60 * 60 * 1000));
}

export async function requestNotificationPermission() {
  if (!Device.isDevice) return false;
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

// Call this whenever a sentence is completed — marks today as practiced and
// advances the daily streak (+1 if yesterday was practiced, restart at 1 otherwise).
export async function markPracticedToday(getProfileFn, saveProfileFn) {
  try {
    const p = await getProfileFn();
    if (!p) return;
    const today = todayStr();
    if (p.lastPracticeDate === today) return; // already marked
    const dayStreak = p.lastPracticeDate === yesterdayStr() ? (p.dayStreak ?? 0) + 1 : 1;
    await saveProfileFn({ ...p, lastPracticeDate: today, dayStreak });
  } catch (_) {}
}

// Returns the current daily streak, treating a missed day as broken (0).
export function computeDayStreak(profile) {
  if (!profile?.lastPracticeDate) return 0;
  const d = profile.lastPracticeDate;
  if (d === todayStr() || d === yesterdayStr()) return profile.dayStreak ?? 0;
  return 0;
}

// THE single daily reminder — fires at 18:00 local time, one per day.
// Body is picked from local data (reviews due > streak protection > generic),
// and it's rescheduled on every app open / practice so the copy stays fresh.
export async function scheduleDailyReminder({ reviewCount = 0, dayStreak = 0, practicedToday = false } = {}) {
  if (!Device.isDevice) return;
  const granted = await requestNotificationPermission().catch(() => false);
  if (!granted) return;

  // Replace whatever was scheduled before (including legacy 20h/21h reminders)
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Next 18:00 local — today if still ahead and user hasn't practiced, else tomorrow
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0);
  if (now >= next || practicedToday) next.setDate(next.getDate() + 1);

  let title, body;
  if (reviewCount > 0) {
    title = 'Revisão te esperando 📚';
    body = `Você tem ${reviewCount} frase${reviewCount > 1 ? 's' : ''} pra fixar na memória — 2 minutinhos resolvem.`;
  } else if (dayStreak >= 2) {
    title = `Sequência de ${dayStreak} dias em jogo 🔥`;
    body = 'Uma lição rápida hoje e o Poly continua sorrindo.';
  } else {
    title = 'O Poly sente sua falta 🤖';
    body = 'Que tal alguns minutos de prática hoje?';
  }

  await Notifications.scheduleNotificationAsync({
    identifier: 'daily-reminder',
    content: { title, body, data: { screen: reviewCount > 0 ? 'review' : 'index' } },
    trigger: { type: 'date', date: next },
  });
}

export async function cancelAllReminders() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
