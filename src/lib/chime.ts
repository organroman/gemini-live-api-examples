let audioContext: AudioContext | null = null;

/**
 * Creates (or resumes) the shared AudioContext. Must be called from a real
 * user gesture (click/tap) — browsers block audio playback otherwise, and
 * this is what "primes" the context so playChime() can fire later from a
 * data-channel event with no gesture attached.
 */
export function primeAudio(): void {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }
}

/** Short two-note chime — no audio asset needed, synthesized on the fly. */
export function playChime(): void {
  if (!audioContext) return;
  const ctx = audioContext;
  const now = ctx.currentTime;

  [880, 1320].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;

    const start = now + i * 0.12;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.2, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);

    osc.connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.35);
  });
}
