import { Stack, useRouter } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { initDatabase } from '../src/db/database';
import { initNotificationHandler } from '../src/notifications';
import { C } from '../src/theme';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    initNotificationHandler();
    const sub = Notifications.addNotificationResponseReceivedListener(response => {
      const screen = response.notification.request.content.data?.screen;
      if (screen) router.push(`/${screen}`);
    });
    return () => sub.remove();
  }, []);

  return (
    <SQLiteProvider databaseName="lingua3.db" onInit={initDatabase}>
      <StatusBar style="dark" backgroundColor={C.bg} />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: C.bg } }}>
        <Stack.Screen name="welcome" options={{ animation: 'fade', gestureEnabled: false }} />
        <Stack.Screen name="onboarding" options={{ animation: 'fade', gestureEnabled: false }} />
        <Stack.Screen name="index" options={{ gestureEnabled: false }} />
        <Stack.Screen name="theory/[stage]" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="profile" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="dialogos/index" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="dialogos/[level]" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="exercise/[id]" options={{ animation: 'slide_from_right', gestureEnabled: false }} />
        <Stack.Screen name="placement" options={{ animation: 'slide_from_right', gestureEnabled: false }} />
        <Stack.Screen name="review" options={{ animation: 'slide_from_right', gestureEnabled: false }} />
      </Stack>
    </SQLiteProvider>
  );
}
