// Anonymous funnel telemetry. Sends event name + module + language + a random
// install id (no PII whatsoever) to the Cloudflare Worker. Fire-and-forget:
// never blocks UI, never throws, silently drops when offline.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AI_CHECK_URL } from './aiCheck';

const INSTALL_ID_KEY = 'telemetry_install_id';
let cachedId = null;

async function getInstallId() {
  if (cachedId) return cachedId;
  let id = await AsyncStorage.getItem(INSTALL_ID_KEY);
  if (!id) {
    id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    await AsyncStorage.setItem(INSTALL_ID_KEY, id);
  }
  cachedId = id;
  return id;
}

export function sendTelemetry(event, moduleId, language) {
  (async () => {
    try {
      const installId = await getInstallId();
      await fetch(`${AI_CHECK_URL}/t`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, moduleId, language, installId }),
      });
    } catch (_) {}
  })();
}
