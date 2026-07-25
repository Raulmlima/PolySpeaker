// Progress backup — exports profile + SQLite progress to a JSON file the user
// saves wherever they want (iCloud/Drive via the system share sheet), and
// imports it back on a new device. Zero backend.
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import { getProfile, saveProfile } from '../storage';

const BACKUP_VERSION = 1;

export async function exportBackup(db) {
  const profile = await getProfile();
  const progress = await db.getAllAsync('SELECT * FROM progress');
  const wrong = await db.getAllAsync('SELECT * FROM wrong_sentences');

  const payload = JSON.stringify({
    app: 'polyspeaker',
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    profile,
    progress,
    wrong_sentences: wrong,
  });

  const date = new Date().toISOString().slice(0, 10);
  const path = `${FileSystem.documentDirectory}polyspeaker-backup-${date}.json`;
  await FileSystem.writeAsStringAsync(path, payload);

  if (!(await Sharing.isAvailableAsync())) throw new Error('share unavailable');
  await Sharing.shareAsync(path, {
    mimeType: 'application/json',
    dialogTitle: 'Salvar backup do PolySpeaker',
    UTI: 'public.json',
  });
}

export async function importBackup(db) {
  const res = await DocumentPicker.getDocumentAsync({
    type: ['application/json', 'text/plain', '*/*'],
    copyToCacheDirectory: true,
  });
  if (res.canceled || !res.assets?.[0]?.uri) return { imported: false };

  const raw = await FileSystem.readAsStringAsync(res.assets[0].uri);
  const data = JSON.parse(raw);
  if (data.app !== 'polyspeaker' || !data.profile) {
    throw new Error('Arquivo inválido — selecione um backup do PolySpeaker.');
  }

  await saveProfile(data.profile);

  for (const row of data.progress ?? []) {
    await db.runAsync(
      'INSERT OR REPLACE INTO progress (module_id, exercise_idx, sentence_idx, completed) VALUES (?, ?, ?, ?)',
      [row.module_id, row.exercise_idx, row.sentence_idx, row.completed ?? 1]
    );
  }
  for (const row of data.wrong_sentences ?? []) {
    await db.runAsync(
      `INSERT INTO wrong_sentences
         (module_id, exercise_idx, sentence_idx, prompt, correct_answer, language, review_count, next_review)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(module_id, exercise_idx, sentence_idx) DO UPDATE SET
         review_count = excluded.review_count, next_review = excluded.next_review`,
      [row.module_id, row.exercise_idx, row.sentence_idx, row.prompt, row.correct_answer,
       row.language ?? 'es', row.review_count ?? 0, row.next_review ?? Date.now()]
    );
  }
  return { imported: true, sentences: (data.progress ?? []).length };
}
