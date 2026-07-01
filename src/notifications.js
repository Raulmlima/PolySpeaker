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

function todayStr() {
  return new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
}

export async function requestNotificationPermission() {
  if (!Device.isDevice) return false;
  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

// Call this whenever a sentence is completed — marks today as practiced
export async function markPracticedToday(getProfileFn, saveProfileFn) {
  try {
    const p = await getProfileFn();
    if (!p) return;
    const today = todayStr();
    if (p.lastPracticeDate === today) return; // already marked
    await saveProfileFn({ ...p, lastPracticeDate: today });
    // Cancel streak reminder for today — user already practiced
    await cancelStreakReminderIfPracticed(today);
  } catch (_) {}
}

// Cancels and reschedules streak reminder only if user hasn't practiced today
async function cancelStreakReminderIfPracticed(today) {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const n of scheduled) {
    if (n.content?.data?.screen === 'index') {
      await Notifications.cancelScheduledNotificationAsync(n.identifier);
    }
  }
  // Reschedule for tomorrow — user is done today
  await Notifications.scheduleNotificationAsync({
    identifier: 'streak-reminder',
    content: {
      title: 'Não perca sua sequência! 🔥',
      body: 'Ainda dá tempo de praticar hoje. Só alguns minutos mantêm o ritmo.',
      data: { screen: 'index' },
    },
    trigger: { type: 'daily', hour: 21, minute: 0 },
  });
}

// Call on app open — if user already practiced today, silence the streak reminder
export async function refreshStreakReminder(lastPracticeDate) {
  if (!Device.isDevice) return;
  const granted = await requestNotificationPermission().catch(() => false);
  if (!granted) return;
  const today = todayStr();
  if (lastPracticeDate === today) {
    // Already practiced — make sure streak reminder won't fire today
    // Re-schedule to tomorrow (repeats daily, so it's already set — no action needed)
    return;
  }
  // Not practiced yet — ensure streak reminder is scheduled
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const hasStreak = scheduled.some(n => n.identifier === 'streak-reminder');
  if (!hasStreak) {
    await Notifications.scheduleNotificationAsync({
      identifier: 'streak-reminder',
      content: {
        title: 'Não perca sua sequência! 🔥',
        body: 'Ainda dá tempo de praticar hoje. Só alguns minutos mantêm o ritmo.',
        data: { screen: 'index' },
      },
      trigger: { type: 'daily', hour: 21, minute: 0 },
    });
  }
}

export async function scheduleSRSReminder() {
  if (!Device.isDevice) return;
  const granted = await requestNotificationPermission();
  if (!granted) return;
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const hasSRS = scheduled.some(n => n.identifier === 'srs-reminder');
  if (hasSRS) return;
  await Notifications.scheduleNotificationAsync({
    identifier: 'srs-reminder',
    content: {
      title: 'Hora de revisar! 📚',
      body: 'Você tem frases aguardando revisão. 10 minutos e sua memória agradece.',
      data: { screen: 'review' },
    },
    trigger: { type: 'daily', hour: 20, minute: 0 },
  });
}

export async function scheduleStreakReminder() {
  if (!Device.isDevice) return;
  const granted = await requestNotificationPermission();
  if (!granted) return;
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const hasStreak = scheduled.some(n => n.identifier === 'streak-reminder');
  if (hasStreak) return;
  await Notifications.scheduleNotificationAsync({
    identifier: 'streak-reminder',
    content: {
      title: 'Não perca sua sequência! 🔥',
      body: 'Ainda dá tempo de praticar hoje. Só alguns minutos mantêm o ritmo.',
      data: { screen: 'index' },
    },
    trigger: { type: 'daily', hour: 21, minute: 0 },
  });
}

export async function cancelAllReminders() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
