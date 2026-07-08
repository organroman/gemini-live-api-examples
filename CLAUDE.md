# CLAUDE.md — Live UA→AZ Translation & Recording Platform

## Project Goal

Adapt Google's `gemini-live-translate-livekit` example into a production-ready tool for running **live training/webinar sessions in Ukrainian, translated in real time to Azerbaijani**, where the session (screen share + translated Azerbaijani audio) is **recorded as a final deliverable**, ideally with Azerbaijani subtitles (.srt).

Base repo: https://github.com/google-gemini/gemini-live-api-examples/tree/main/gemini-live-translate-livekit
Related (multi-party variant, useful reference): https://github.com/livekit-examples/gemini-live-translate

## Why this stack (decision context)

- Zoom was considered but rejected as the core platform: Zoom's native recording captures the original (Ukrainian) mixed audio, not the translation. Integrating translation into Zoom requires a meeting bot (Zoom Meeting SDK raw audio / Recall.ai) — more complexity than value here.
- LiveKit was chosen because: (1) the translated Azerbaijani audio already exists as a **separate track** in the room, (2) **LiveKit Egress** can record room composite or a single track natively, (3) screen share is a first-class SDK feature, (4) subtitles fall out of Gemini's output transcripts for free.
- Fallback options kept in mind (do NOT implement unless asked): Zoom + post-production audio swap via ffmpeg; OBS capture of a "listener machine".

## Architecture (as shipped in the example)

```
Organizer mic → LiveKit room
                  ↓
    TranslationBridge (one per target language, Node.js)
    joins room as bot, subscribes to organizer audio
                  ↓
    Gemini Live API — model: gemini-3.5-live-translate-preview
    translationConfig → targetLanguageCode
                  ↓
    Translated audio published back as track `translator-<lang>`
                  ↓
    Attendee subscribes to translator-<lang> audio track
```

- Frontend: Next.js
- Bridge: long-running Node.js process, WebSocket connections to Gemini + LiveKit
- Recommended deploy target: Google Cloud Run (persistent containers, `--no-cpu-throttling`, `--timeout 3600`, min/max instances 1)
- Env vars: `LIVEKIT_URL`, `LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, `GEMINI_API_KEY`

## Key API facts (verified June–July 2026)

- Model ID: `gemini-3.5-live-translate-preview` (PUBLIC PREVIEW — no SLA, pricing may change; flag this in any client-facing commitments)
- Audio-to-audio: input 16 kHz PCM (100 ms chunks), output 24 kHz translated audio
- **Audio input only** — no text input mode for translation
- Auto-detects source language (70+ languages); config field: `translationConfig.targetLanguageCode`, plus `echoTargetLanguage` (echo input already in target language — default false)
- Optional `inputAudioTranscription` / `outputAudioTranscription` → transcripts with language codes → basis for SRT generation
- Ephemeral tokens (v1alpha) for client-side auth; lock `translationConfig` server-side, or use `lock_additional_fields: []` to let the client pick language
- Known model limitations (from model card): voice can drift/shift after long pauses or in multi-speaker sessions; language detection struggles with heavy accents; background noise can leak artifacts
- ⚠️ **VERIFY FIRST**: Azerbaijani (`az`) presence and quality in the supported-language list. Test UA→AZ in Google AI Studio Live Translate demo before building anything. Ukrainian STT is strong everywhere; Azerbaijani is typically a second-tier language — quality of the UA→AZ pair is the single biggest project risk.

## Required features (roadmap)

### P0 — must have
1. **Screen share**
   - Frontend: add screen share toggle → `room.localParticipant.setScreenShareEnabled(true)`
   - Layout: shared screen as the primary tile (presentation layout), camera thumbnail secondary
2. **Recording (LiveKit Egress)**
   - Room Composite Egress from the perspective of an AZ listener: screen share video + `translator-az` audio track → MP4
   - Alternative/backup: Track Egress on the AZ audio track alone → clean audio file
   - Belt-and-suspenders: in the TranslationBridge, also write Gemini's translated PCM output to disk/GCS as it streams
3. **Azerbaijani target** hardwired or default-selected (`targetLanguageCode: "az"` — verify exact code in docs)

### P1 — should have
4. **SRT subtitle generation** from `outputAudioTranscription` events with timestamps → downloadable .srt after session
5. **Session lifecycle**: start/stop recording button for organizer; recording auto-uploaded to GCS bucket
6. Latency compensation note for post-production: translated audio lags source by a few seconds; if muxing onto other video, shift AZ track earlier (`ffmpeg -itsoffset`)

### P2 — nice to have
7. Multiple simultaneous target languages (the example already supports this pattern — one bridge per language)
8. Organizer dashboard: live captions preview, session timer, participant count
9. UA-language UI for organizer, AZ-language UI for attendees

## Scaling constraints (from the example's own README — keep in mind, don't over-engineer)

- Signaling fan-out is O(n) per join/leave — fine for ≤ ~100 attendees, not for 1000+
- All Gemini WebSocket connections run in a single Node.js process
- One Gemini session per target language, **shared** across all listeners of that language (do not create per-listener sessions)

## Deploy / infra context

- Target: Google Cloud Run (user already runs GCP: existing project with self-hosted n8n on GCE)
- Secrets via Secret Manager (`gemini-api-key`, `livekit-api-key`, `livekit-api-secret`)
- LiveKit: use LiveKit Cloud for the first iteration (Egress included, zero ops); self-hosting LiveKit + Egress workers is possible later but adds significant ops burden
- Local dev: `livekit/livekit-server --dev` in Docker (`devkey`/`secret`), `pnpm` for JS deps

## Working conventions

- Language of code comments and commit messages: English
- UI copy: Ukrainian for organizer-facing, keep strings in a locale file from the start
- Before any significant refactor, check the upstream example for updates — the repo is new and moving fast
- Always test changes against a real UA→AZ audio sample, not just EN→ES
- When touching the bridge, remember output is PERMANENT audio (no mid-utterance revision) — don't buffer/re-chunk Gemini output in ways that add latency

## Definition of done (first milestone)

A session where:
1. Organizer speaks Ukrainian and shares screen
2. Attendee in browser hears Azerbaijani and sees the screen
3. After the session, an MP4 exists in GCS: screen share video + Azerbaijani audio
4. An .srt file in Azerbaijani exists alongside it