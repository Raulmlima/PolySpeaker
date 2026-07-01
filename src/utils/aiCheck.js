// Worker URL is set after deploying polyspeaker-ai-worker (see README in that project).
export const AI_CHECK_URL = 'https://polyspeaker-ai-worker.raulmaerqueslima2.workers.dev';

// Asks the AI backend whether a free-form answer should be accepted as a valid
// translation even though it didn't match the fixed answers list. Fails closed
// (returns invalid) on any network/timeout error so the UX never hangs.
export async function aiCheckAnswer({ sourceText, userAnswer, acceptedAnswers, language }) {
  if (!AI_CHECK_URL || AI_CHECK_URL.includes('YOUR-SUBDOMAIN')) {
    return { valid: false, note: '' };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(AI_CHECK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sourceText, userAnswer, acceptedAnswers, language }),
      signal: controller.signal,
    });
    if (!res.ok) return { valid: false, note: '' };
    const data = await res.json();
    return { valid: Boolean(data.valid), note: data.note ?? '' };
  } catch (_) {
    return { valid: false, note: '' };
  } finally {
    clearTimeout(timeout);
  }
}
