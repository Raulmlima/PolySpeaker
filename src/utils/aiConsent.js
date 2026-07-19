import AsyncStorage from '@react-native-async-storage/async-storage';

const CONSENT_KEY = 'ai_data_consent_v1';

export async function hasAiConsent() {
  const val = await AsyncStorage.getItem(CONSENT_KEY);
  return val === 'true';
}

export async function setAiConsent() {
  await AsyncStorage.setItem(CONSENT_KEY, 'true');
}
