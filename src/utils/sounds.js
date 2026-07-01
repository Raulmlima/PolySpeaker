import * as FileSystem from 'expo-file-system/legacy';
import { createAudioPlayer, setAudioModeAsync } from 'expo-audio';

// Generate a minimal 8-bit mono WAV in memory, returns base64 string
function generateWAV(frequency, durationMs, volume = 80) {
  const sampleRate = 22050;
  const numSamples = Math.floor(sampleRate * durationMs / 1000);
  const buf = new Uint8Array(44 + numSamples);
  const u16 = (off, v) => { buf[off] = v & 0xff; buf[off + 1] = (v >> 8) & 0xff; };
  const u32 = (off, v) => { buf[off] = v & 0xff; buf[off+1] = (v>>8)&0xff; buf[off+2] = (v>>16)&0xff; buf[off+3] = (v>>24)&0xff; };
  buf.set([82,73,70,70], 0);   // RIFF
  u32(4, 36 + numSamples);
  buf.set([87,65,86,69], 8);   // WAVE
  buf.set([102,109,116,32], 12); // fmt
  u32(16, 16); u16(20, 1); u16(22, 1);
  u32(24, sampleRate); u32(28, sampleRate);
  u16(32, 1); u16(34, 8);
  buf.set([100,97,116,97], 36); // data
  u32(40, numSamples);
  const dur = durationMs / 1000;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.min(1, Math.min(t * 30, (dur - t) * 30));
    buf[44 + i] = Math.round(volume * env * Math.sin(2 * Math.PI * frequency * t)) + 128;
  }
  let binary = '';
  for (let i = 0; i < buf.length; i++) binary += String.fromCharCode(buf[i]);
  return btoa(binary);
}

let playerCorrect = null;
let playerWrong = null;
let audioModeSet = false;

async function ensurePlayer(ref, freq, dur) {
  if (ref) return ref;
  const filename = `polysound_${freq}_${dur}.wav`;
  const path = FileSystem.cacheDirectory + filename;
  const info = await FileSystem.getInfoAsync(path);
  if (!info.exists) {
    const b64 = generateWAV(freq, dur);
    await FileSystem.writeAsStringAsync(path, b64, { encoding: FileSystem.EncodingType.Base64 });
  }
  return createAudioPlayer({ uri: path });
}

export async function playCorrect() {
  try {
    if (!audioModeSet) { await setAudioModeAsync({ playsInSilentMode: true }); audioModeSet = true; }
    playerCorrect = await ensurePlayer(playerCorrect, 880, 120);
    playerCorrect.seekTo(0);
    playerCorrect.play();
  } catch (_) {}
}

export async function playWrong() {
  try {
    if (!audioModeSet) { await setAudioModeAsync({ playsInSilentMode: true }); audioModeSet = true; }
    playerWrong = await ensurePlayer(playerWrong, 220, 200);
    playerWrong.seekTo(0);
    playerWrong.play();
  } catch (_) {}
}
