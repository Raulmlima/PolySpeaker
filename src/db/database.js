// SRS intervals in milliseconds: 1d, 3d, 7d, 14d — after 4 correct reviews, sentence is mastered
const SRS_INTERVALS = [1, 3, 7, 14].map(d => d * 24 * 60 * 60 * 1000);

export async function initDatabase(db) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS analytics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event TEXT NOT NULL,
      module_id TEXT,
      language TEXT,
      ts INTEGER NOT NULL
    );
  `);
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS progress (
      module_id TEXT NOT NULL,
      exercise_idx INTEGER NOT NULL,
      sentence_idx INTEGER NOT NULL,
      completed INTEGER DEFAULT 0,
      PRIMARY KEY (module_id, exercise_idx, sentence_idx)
    );
  `);
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS wrong_sentences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id TEXT NOT NULL,
      exercise_idx INTEGER NOT NULL,
      sentence_idx INTEGER NOT NULL,
      prompt TEXT NOT NULL,
      correct_answer TEXT NOT NULL,
      language TEXT NOT NULL DEFAULT 'es',
      review_count INTEGER DEFAULT 0,
      next_review INTEGER NOT NULL,
      UNIQUE(module_id, exercise_idx, sentence_idx)
    );
  `);
}

export async function markSentenceComplete(db, moduleId, exerciseIdx, sentenceIdx) {
  await db.runAsync(
    'INSERT OR REPLACE INTO progress (module_id, exercise_idx, sentence_idx, completed) VALUES (?, ?, ?, 1)',
    [moduleId, exerciseIdx, sentenceIdx]
  );
}

export async function getModuleCompletedCount(db, moduleId) {
  const row = await db.getFirstAsync(
    'SELECT COUNT(*) as cnt FROM progress WHERE module_id = ? AND completed = 1',
    [moduleId]
  );
  return row?.cnt ?? 0;
}

export async function getCompletedSentences(db, moduleId) {
  const rows = await db.getAllAsync(
    'SELECT exercise_idx, sentence_idx FROM progress WHERE module_id = ? AND completed = 1',
    [moduleId]
  );
  return new Set(rows.map(r => `${r.exercise_idx}:${r.sentence_idx}`));
}

export async function getAllProgress(db) {
  return await db.getAllAsync(
    'SELECT module_id, COUNT(*) as cnt FROM progress WHERE completed = 1 GROUP BY module_id'
  );
}

export async function resetModuleProgress(db, moduleId) {
  await db.runAsync('DELETE FROM progress WHERE module_id = ?', [moduleId]);
}

export async function addWrongSentence(db, moduleId, exIdx, senIdx, prompt, correctAnswer, language) {
  const nextReview = Date.now() + SRS_INTERVALS[0];
  await db.runAsync(
    `INSERT INTO wrong_sentences
       (module_id, exercise_idx, sentence_idx, prompt, correct_answer, language, review_count, next_review)
     VALUES (?, ?, ?, ?, ?, ?, 0, ?)
     ON CONFLICT(module_id, exercise_idx, sentence_idx) DO UPDATE SET
       review_count = 0, next_review = excluded.next_review`,
    [moduleId, exIdx, senIdx, prompt, correctAnswer, language ?? 'es', nextReview]
  );
}

export async function getReviewsDue(db) {
  return db.getAllAsync(
    'SELECT * FROM wrong_sentences WHERE next_review <= ? ORDER BY next_review ASC',
    [Date.now()]
  );
}

export async function getReviewCount(db) {
  const row = await db.getFirstAsync(
    'SELECT COUNT(*) as cnt FROM wrong_sentences WHERE next_review <= ?',
    [Date.now()]
  );
  return row?.cnt ?? 0;
}

export async function markReviewCorrect(db, id, reviewCount) {
  const nextIdx = reviewCount + 1;
  if (nextIdx >= SRS_INTERVALS.length) {
    await db.runAsync('DELETE FROM wrong_sentences WHERE id = ?', [id]);
  } else {
    await db.runAsync(
      'UPDATE wrong_sentences SET review_count = ?, next_review = ? WHERE id = ?',
      [nextIdx, Date.now() + SRS_INTERVALS[nextIdx], id]
    );
  }
}

// Analytics — fire-and-forget, never throws
export function logEvent(db, event, moduleId, language) {
  db.runAsync(
    'INSERT INTO analytics (event, module_id, language, ts) VALUES (?, ?, ?, ?)',
    [event, moduleId ?? null, language ?? null, Date.now()]
  ).catch(() => {});
}

export async function getAnalyticsSummary(db) {
  const rows = await db.getAllAsync(
    'SELECT event, module_id, language, COUNT(*) as cnt FROM analytics GROUP BY event, module_id, language ORDER BY cnt DESC'
  );
  return rows;
}

export async function markReviewWrong(db, id) {
  await db.runAsync(
    'UPDATE wrong_sentences SET review_count = 0, next_review = ? WHERE id = ?',
    [Date.now() + SRS_INTERVALS[0], id]
  );
}
