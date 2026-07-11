module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/translation-bridge.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "TranslationBridge",
    ()=>TranslationBridge
]);
/**
 * TranslationBridge: Connects a LiveKit room to a Gemini Live API WebSocket
 * for real-time audio translation.
 *
 * Each bridge instance:
 * 1. Joins the LiveKit room as a bot participant (e.g., "translator-es")
 * 2. Subscribes to a source participant's audio track
 * 3. Pipes PCM audio frames to Gemini Live API via WebSocket
 * 4. Receives translated audio back and publishes it as a new track
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__ = __turbopack_context__.i("[externals]/@livekit/rtc-node [external] (@livekit/rtc-node, esm_import, [project]/node_modules/@livekit/rtc-node)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__ = __turbopack_context__.i("[externals]/ws [external] (ws, esm_import, [project]/node_modules/ws)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
class TranslationBridge {
    room = null;
    geminiWs = null;
    audioSource = null;
    localTrack = null;
    publishedTrackSid = "";
    transcriptionSegmentId = 0;
    framesSentToGemini = 0;
    framesReceivedFromGemini = 0;
    targetLanguage;
    sessionId;
    identity;
    sourceParticipantIdentity;
    status = "starting";
    subscriberCount = 0;
    // Gemini Live API config
    geminiApiKey;
    geminiModel = "gemini-3.5-live-translate-preview";
    sampleRate = 24000;
    inputSampleRate = 48000;
    channels = 1;
    // LiveKit config
    livekitUrl;
    livekitApiKey;
    livekitApiSecret;
    geminiSetupComplete = false;
    lastAudioFrameTime = 0;
    captureChain = Promise.resolve();
    constructor(sessionId, targetLanguage, sourceParticipantIdentity, config, botIdentity){
        this.sessionId = sessionId;
        this.targetLanguage = targetLanguage;
        this.sourceParticipantIdentity = sourceParticipantIdentity;
        this.identity = botIdentity || `translator-${targetLanguage}`;
        this.geminiApiKey = config.geminiApiKey;
        this.livekitUrl = config.livekitUrl;
        this.livekitApiKey = config.livekitApiKey;
        this.livekitApiSecret = config.livekitApiSecret;
    }
    async start() {
        console.log(`[TranslationBridge:${this.targetLanguage}] Starting bridge for session ${this.sessionId}`);
        try {
            // 1. Generate token and join LiveKit room
            await this.joinLiveKitRoom();
            // 2. Connect to Gemini Live API
            await this.connectGemini();
            // 3. Subscribe to source participant audio and wire up the pipeline
            await this.subscribeToSourceParticipant();
            this.status = "active";
            console.log(`[TranslationBridge:${this.targetLanguage}] Bridge is active`);
        } catch (error) {
            console.error(`[TranslationBridge:${this.targetLanguage}] Failed to start:`, error);
            this.status = "error";
            throw error;
        }
    }
    async stop() {
        console.log(`[TranslationBridge:${this.targetLanguage}] Stopping bridge`);
        this.status = "closed";
        if (this.geminiWs) {
            this.geminiWs.close();
            this.geminiWs = null;
        }
        if (this.room) {
            await this.room.disconnect();
            this.room = null;
        }
        this.audioSource = null;
        this.localTrack = null;
        this.geminiSetupComplete = false;
    }
    async joinLiveKitRoom() {
        // Generate a token for the bot participant using the server SDK
        const { AccessToken } = await __turbopack_context__.A("[project]/node_modules/livekit-server-sdk/dist/index.js [app-route] (ecmascript, async loader)");
        const at = new AccessToken(this.livekitApiKey, this.livekitApiSecret, {
            identity: this.identity,
            name: `Translator (${this.targetLanguage.toUpperCase()})`
        });
        at.addGrant({
            roomJoin: true,
            room: this.sessionId,
            canPublish: true,
            canSubscribe: true
        });
        const token = await at.toJwt();
        // Create and connect to the room
        this.room = new __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["Room"]();
        this.room.on(__TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["RoomEvent"].Disconnected, ()=>{
            console.log(`[TranslationBridge:${this.targetLanguage}] Disconnected from room`);
            this.status = "closed";
        });
        await this.room.connect(this.livekitUrl, token, {
            autoSubscribe: false,
            dynacast: false
        });
        console.log(`[TranslationBridge:${this.targetLanguage}] Joined room as ${this.identity}`);
        // Create an AudioSource to publish translated audio
        // Gemini outputs 24kHz mono PCM
        this.audioSource = new __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["AudioSource"](this.sampleRate, this.channels);
        this.localTrack = __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["LocalAudioTrack"].createAudioTrack(`translated-audio-${this.targetLanguage}`, this.audioSource);
        const publishOptions = new __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["TrackPublishOptions"]();
        publishOptions.source = __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["TrackSource"].SOURCE_MICROPHONE;
        await this.room.localParticipant.publishTrack(this.localTrack, publishOptions);
        // Save published track SID for transcription
        const pubs = this.room.localParticipant.trackPublications;
        for (const [, pub] of pubs){
            if (pub.track === this.localTrack) {
                this.publishedTrackSid = pub.sid || "";
                break;
            }
        }
        console.log(`[TranslationBridge:${this.targetLanguage}] Published translated audio track (sid: ${this.publishedTrackSid || 'pending'})`);
    }
    async connectGemini() {
        const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${this.geminiApiKey}`;
        return new Promise((resolve, reject)=>{
            this.geminiWs = new __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__["default"](wsUrl);
            this.geminiWs.on("open", ()=>{
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini WebSocket connected`);
                this.sendGeminiSetup();
            });
            this.geminiWs.on("message", (data)=>{
                this.handleGeminiMessage(data);
                if (!this.geminiSetupComplete) {
                // Wait for setup complete message
                // resolve will be called in handleGeminiMessage
                }
            });
            this.geminiWs.on("error", (error)=>{
                console.error(`[TranslationBridge:${this.targetLanguage}] Gemini WebSocket error:`, error);
                if (!this.geminiSetupComplete) {
                    reject(error);
                }
            });
            this.geminiWs.on("close", (code, reason)=>{
                const reasonStr = reason.toString();
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini WebSocket closed`, {
                    code,
                    reason: reasonStr
                });
                if (!this.geminiSetupComplete) {
                    reject(new Error(`Gemini WebSocket closed before setup: code=${code} reason=${reasonStr}`));
                } else if (this.status === "active") {
                    // Auto-reconnect on GoAway or unexpected closure
                    console.log(`[TranslationBridge:${this.targetLanguage}] Reconnecting Gemini WebSocket...`);
                    this.geminiSetupComplete = false;
                    this.reconnectGemini();
                }
            });
            // Store resolve for use when setup complete arrives
            const checkSetup = setInterval(()=>{
                if (this.geminiSetupComplete) {
                    clearInterval(checkSetup);
                    resolve();
                }
            }, 100);
            // Timeout after 15 seconds
            setTimeout(()=>{
                if (!this.geminiSetupComplete) {
                    clearInterval(checkSetup);
                    reject(new Error("Gemini setup timeout"));
                }
            }, 15000);
        });
    }
    /**
   * Reconnect the Gemini WebSocket after a GoAway or unexpected closure.
   * Reuses the existing LiveKit room + audio pipeline.
   */ async reconnectGemini() {
        try {
            const wsUrl = `wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent?key=${this.geminiApiKey}`;
            this.geminiWs = new __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__["default"](wsUrl);
            this.geminiWs.on("open", ()=>{
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini WebSocket reconnected`);
                this.sendGeminiSetup();
            });
            this.geminiWs.on("message", (data)=>{
                if (!this.geminiSetupComplete) {
                    const msg = JSON.parse(data.toString());
                    if (msg.setupComplete) {
                        console.log(`[TranslationBridge:${this.targetLanguage}] Gemini reconnect setup complete`);
                        this.geminiSetupComplete = true;
                        return;
                    }
                }
                this.handleGeminiMessage(data);
            });
            this.geminiWs.on("error", (error)=>{
                console.error(`[TranslationBridge:${this.targetLanguage}] Gemini reconnect error:`, error);
            });
            this.geminiWs.on("close", (code, reason)=>{
                const reasonStr = reason.toString();
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini reconnected WS closed`, {
                    code,
                    reason: reasonStr
                });
                if (this.status === "active") {
                    setTimeout(()=>{
                        this.geminiSetupComplete = false;
                        this.reconnectGemini();
                    }, 1000);
                }
            });
        } catch (error) {
            console.error(`[TranslationBridge:${this.targetLanguage}] Gemini reconnect failed:`, error);
            this.status = "error";
        }
    }
    sendGeminiSetup() {
        const setupMessage = {
            setup: {
                model: `models/${this.geminiModel}`,
                outputAudioTranscription: {},
                generationConfig: {
                    responseModalities: [
                        "AUDIO"
                    ],
                    translationConfig: {
                        targetLanguageCode: this.targetLanguage,
                        echoTargetLanguage: true
                    }
                },
                realtimeInputConfig: {
                    automaticActivityDetection: {
                        disabled: false
                    }
                }
            }
        };
        console.log(`[TranslationBridge:${this.targetLanguage}] Sending Gemini setup:`, JSON.stringify(setupMessage, null, 2));
        this.geminiWs.send(JSON.stringify(setupMessage));
    }
    handleGeminiMessage(data) {
        try {
            const message = JSON.parse(data.toString());
            // Log all messages before setup is complete for debugging
            if (!this.geminiSetupComplete) {
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini message (pre-setup):`, JSON.stringify(message).slice(0, 500));
            }
            // Handle setup complete
            if (message.setupComplete) {
                console.log(`[TranslationBridge:${this.targetLanguage}] Gemini setup complete`);
                this.geminiSetupComplete = true;
                return;
            }
            // Handle audio response
            const serverContent = message?.serverContent;
            const parts = serverContent?.modelTurn?.parts;
            if (parts?.length) {
                for (const part of parts){
                    if (part.inlineData?.data) {
                        this.framesReceivedFromGemini++;
                        if (this.framesReceivedFromGemini <= 3 || this.framesReceivedFromGemini % 100 === 0) {
                            console.log(`[TranslationBridge:${this.targetLanguage}] Received audio frame #${this.framesReceivedFromGemini} from Gemini (${part.inlineData.data.length} bytes base64)`);
                        }
                        // Queue frame for sequential capture (avoid promise pile-up)
                        this.queueAudioFrame(part.inlineData.data);
                    }
                }
            }
            // Handle output transcription (separate field from modelTurn)
            if (serverContent?.outputTranscription?.text) {
                console.log(`[TranslationBridge:${this.targetLanguage}] Transcription:`, serverContent.outputTranscription.text.slice(0, 100));
                this.publishTranscriptionText(serverContent.outputTranscription.text, !serverContent.turnComplete);
            }
            // If turn is complete, advance the segment id
            if (serverContent?.turnComplete) {
                this.transcriptionSegmentId++;
            }
        } catch (error) {
            console.error(`[TranslationBridge:${this.targetLanguage}] Error parsing Gemini message:`, error);
        }
    }
    /**
   * Queue an audio frame for sequential capture.
   * Chains each captureFrame call to avoid promise pile-up.
   */ queueAudioFrame(base64Audio) {
        this.captureChain = this.captureChain.then(()=>this.publishTranslatedAudio(base64Audio));
    }
    async publishTranslatedAudio(base64Audio) {
        if (!this.audioSource || this.status === "closed") return;
        try {
            const pcmBuffer = Buffer.from(base64Audio, "base64");
            const int16 = new Int16Array(pcmBuffer.buffer, pcmBuffer.byteOffset, pcmBuffer.byteLength / 2);
            const frame = new __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["AudioFrame"](int16, this.sampleRate, this.channels, int16.length);
            await this.audioSource.captureFrame(frame);
            const now = Date.now();
            if (this.lastAudioFrameTime && now - this.lastAudioFrameTime > 2000) {
                console.log(`[TranslationBridge:${this.targetLanguage}] Audio resumed after ${now - this.lastAudioFrameTime}ms gap (frame #${this.framesReceivedFromGemini})`);
            }
            this.lastAudioFrameTime = now;
        } catch (error) {
            const msg = error instanceof Error ? error.message : String(error);
            if (msg.includes("InvalidState") || msg.includes("closed")) {
                console.warn(`[TranslationBridge:${this.targetLanguage}] AudioSource closed — stopping capture`);
                this.audioSource = null;
            } else {
                console.error(`[TranslationBridge:${this.targetLanguage}] Error capturing audio frame:`, error);
            }
        }
    }
    async subscribeToSourceParticipant() {
        if (!this.room) return;
        // Subscribe to the source participant's audio track if it's already published.
        // (It may not be yet — e.g. an attendee approved to speak only publishes
        // their mic after they see the approval and tap "Unmute mic".)
        const participants = this.room.remoteParticipants;
        for (const [, participant] of participants){
            if (participant.identity === this.sourceParticipantIdentity) {
                this.subscribeToParticipantAudio(participant);
                break;
            }
        }
        console.log(`[TranslationBridge:${this.targetLanguage}] Waiting for source participant ${this.sourceParticipantIdentity}...`);
        // Always listen for (future) track publications from the source participant —
        // covers both "hasn't joined yet" and "joined but publishes audio later".
        this.room.on(__TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["RoomEvent"].TrackPublished, (publication, participant)=>{
            if (participant.identity === this.sourceParticipantIdentity && publication.kind === __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["TrackKind"].KIND_AUDIO) {
                publication.setSubscribed(true);
            }
        });
        // Once subscribed, pipe to Gemini
        this.room.on(__TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["RoomEvent"].TrackSubscribed, (track, publication, participant)=>{
            if (participant.identity === this.sourceParticipantIdentity && publication.kind === __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["TrackKind"].KIND_AUDIO) {
                this.pipeTrackToGemini(track);
            }
        });
    }
    /**
   * Manually subscribe to a participant's already-published audio tracks
   * (needed when autoSubscribe is off). Future publications are handled by
   * the TrackPublished listener registered in subscribeToSourceParticipant.
   */ subscribeToParticipantAudio(participant) {
        for (const [, publication] of participant.trackPublications){
            if (publication.kind === __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["TrackKind"].KIND_AUDIO) {
                // Manually subscribe — this triggers TrackSubscribed event
                publication.setSubscribed(true);
            }
        }
    }
    pipeTrackToGemini(track) {
        console.log(`[TranslationBridge:${this.targetLanguage}] Subscribed to ${this.sourceParticipantIdentity} audio track, piping to Gemini`);
        const audioStream = new __TURBOPACK__imported__module__$5b$externals$5d2f40$livekit$2f$rtc$2d$node__$5b$external$5d$__$2840$livekit$2f$rtc$2d$node$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$livekit$2f$rtc$2d$node$29$__["AudioStream"](track, {
            sampleRate: this.inputSampleRate,
            numChannels: this.channels,
            frameSizeMs: 100
        });
        // Process frames as they arrive via ReadableStream reader
        const reader = audioStream.getReader();
        const readLoop = async ()=>{
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                this.sendAudioToGemini(value);
            }
        };
        readLoop().catch((err)=>{
            console.error(`[TranslationBridge:${this.targetLanguage}] Audio stream error:`, err);
        });
    }
    sendAudioToGemini(frame) {
        if (!this.geminiWs || this.geminiWs.readyState !== __TURBOPACK__imported__module__$5b$externals$5d2f$ws__$5b$external$5d$__$28$ws$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$ws$29$__["default"].OPEN || !this.geminiSetupComplete) {
            return;
        }
        try {
            // Convert AudioFrame's Int16Array data to base64
            const int16Data = frame.data;
            const buffer = Buffer.from(int16Data.buffer, int16Data.byteOffset, int16Data.byteLength);
            const base64 = buffer.toString("base64");
            this.framesSentToGemini++;
            if (this.framesSentToGemini <= 3 || this.framesSentToGemini % 500 === 0) {
                console.log(`[TranslationBridge:${this.targetLanguage}] Sent audio frame #${this.framesSentToGemini} to Gemini (${base64.length} bytes base64, ${int16Data.length} samples)`);
            }
            const message = {
                realtimeInput: {
                    audio: {
                        mimeType: `audio/pcm;rate=${this.inputSampleRate}`,
                        data: base64
                    }
                }
            };
            this.geminiWs.send(JSON.stringify(message));
        } catch (error) {
            console.error(`[TranslationBridge:${this.targetLanguage}] Error sending audio to Gemini:`, error);
        }
    }
    async publishTranscriptionText(text, interim) {
        if (!this.room || !this.room.localParticipant) return;
        try {
            const payload = JSON.stringify({
                type: "transcription",
                language: this.targetLanguage,
                segmentId: `${this.targetLanguage}-${this.transcriptionSegmentId}`,
                text,
                final: !interim,
                timestamp: Date.now()
            });
            await this.room.localParticipant.publishData(new TextEncoder().encode(payload), {
                reliable: true,
                topic: "transcription"
            });
        } catch (error) {
            console.error(`[TranslationBridge:${this.targetLanguage}] Error publishing transcription:`, error);
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/translation-session-manager.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * TranslationSessionManager: Singleton that enforces "max 1 Gemini Live API
 * session per language per room" constraint.
 *
 * Usage:
 *   const manager = TranslationSessionManager.getInstance();
 *   const bridge = await manager.getOrCreate(sessionId, targetLanguage, organizerIdentity);
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translation-bridge.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
class TranslationSessionManager {
    static instance;
    // Map<sessionId, Map<languageCode, TranslationBridge>>
    translations = new Map();
    // Map<sessionId, SessionInfo>
    sessions = new Map();
    // Map<sessionId, SessionQaState>
    qaStates = new Map();
    // Map<"sessionId:language", in-flight bridge creation> — prevents concurrent
    // getOrCreate calls for the same language from spinning up duplicate bridges
    // that both translate the same source audio (heard as repeated phrases).
    pendingCreations = new Map();
    // Lazily-created client for pushing state to rooms over the LiveKit data
    // channel, so organizer/attendee UIs don't have to poll for QA/translation
    // status.
    roomService = null;
    constructor(){}
    static getInstance() {
        if (!TranslationSessionManager.instance) {
            TranslationSessionManager.instance = new TranslationSessionManager();
        }
        return TranslationSessionManager.instance;
    }
    // Session management
    createSession(sessionId, organizerIdentity) {
        const info = {
            sessionId,
            organizerIdentity,
            createdAt: new Date()
        };
        this.sessions.set(sessionId, info);
        this.qaStates.set(sessionId, {
            pending: new Set(),
            activeSpeakerIdentity: null,
            activeBridge: null,
            organizerTargetLanguage: "uk"
        });
        console.log(`[SessionManager] Created session ${sessionId} for organizer ${organizerIdentity}`);
        return info;
    }
    getSession(sessionId) {
        return this.sessions.get(sessionId);
    }
    // Translation management
    async getOrCreate(sessionId, targetLanguage, organizerIdentity) {
        const languageMap = this.translations.get(sessionId);
        const existingBridge = languageMap?.get(targetLanguage);
        if (existingBridge && existingBridge.status === "active") {
            console.log(`[SessionManager] Reusing existing bridge for ${targetLanguage} in session ${sessionId}`);
            existingBridge.subscriberCount++;
            return existingBridge;
        }
        // Another call is already creating this bridge — wait for it instead of
        // starting a second one (which would double-translate the same audio).
        const key = `${sessionId}:${targetLanguage}`;
        const pending = this.pendingCreations.get(key);
        if (pending) {
            const bridge = await pending;
            bridge.subscriberCount++;
            return bridge;
        }
        // If bridge exists but is in error/closed state, clean it up
        if (existingBridge && (existingBridge.status === "error" || existingBridge.status === "closed")) {
            console.log(`[SessionManager] Cleaning up stale bridge for ${targetLanguage}`);
            await existingBridge.stop();
            languageMap.delete(targetLanguage);
        }
        const creation = this.createBridge(sessionId, targetLanguage, organizerIdentity);
        this.pendingCreations.set(key, creation);
        try {
            const bridge = await creation;
            bridge.subscriberCount++;
            return bridge;
        } finally{
            this.pendingCreations.delete(key);
        }
    }
    async createBridge(sessionId, targetLanguage, organizerIdentity) {
        console.log(`[SessionManager] Creating new bridge for ${targetLanguage} in session ${sessionId}`);
        const bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TranslationBridge"](sessionId, targetLanguage, organizerIdentity, this.getConfig(), `translator-${targetLanguage}`);
        let languageMap = this.translations.get(sessionId);
        if (!languageMap) {
            languageMap = new Map();
            this.translations.set(sessionId, languageMap);
        }
        languageMap.set(targetLanguage, bridge);
        try {
            await bridge.start();
            return bridge;
        } catch (error) {
            // Clean up on failure
            languageMap.delete(targetLanguage);
            throw error;
        }
    }
    getActiveTranslations(sessionId) {
        const languageMap = this.translations.get(sessionId);
        if (!languageMap) return [];
        const result = [];
        for (const [language, bridge] of languageMap){
            result.push({
                language,
                translatorIdentity: bridge.identity,
                status: bridge.status,
                subscriberCount: bridge.subscriberCount
            });
        }
        return result;
    }
    /**
   * Decrement subscriber count for a language. If the last subscriber
   * leaves, stop the bridge and tear down the Gemini session.
   */ async unsubscribe(sessionId, targetLanguage) {
        const languageMap = this.translations.get(sessionId);
        if (!languageMap) return;
        const bridge = languageMap.get(targetLanguage);
        if (!bridge) return;
        bridge.subscriberCount = Math.max(0, bridge.subscriberCount - 1);
        console.log(`[SessionManager] Unsubscribed from ${targetLanguage} in session ${sessionId} (${bridge.subscriberCount} remaining)`);
        if (bridge.subscriberCount === 0) {
            console.log(`[SessionManager] No more subscribers for ${targetLanguage}, tearing down bridge`);
            await bridge.stop();
            languageMap.delete(targetLanguage);
            // Clean up the session map if no bridges remain
            if (languageMap.size === 0) {
                this.translations.delete(sessionId);
            }
        }
    }
    async removeTranslation(sessionId, targetLanguage) {
        const languageMap = this.translations.get(sessionId);
        if (!languageMap) return;
        const bridge = languageMap.get(targetLanguage);
        if (bridge) {
            await bridge.stop();
            languageMap.delete(targetLanguage);
            console.log(`[SessionManager] Removed bridge for ${targetLanguage} in session ${sessionId}`);
        }
    }
    async removeAllTranslations(sessionId) {
        const languageMap = this.translations.get(sessionId);
        if (languageMap) {
            for (const [, bridge] of languageMap){
                await bridge.stop();
            }
            languageMap.clear();
            this.translations.delete(sessionId);
        }
        await this.endActiveQuestion(sessionId);
        this.qaStates.delete(sessionId);
        this.sessions.delete(sessionId);
        console.log(`[SessionManager] Removed all bridges and session for ${sessionId}`);
    }
    getConfig() {
        return {
            geminiApiKey: process.env.GEMINI_API_KEY,
            livekitUrl: process.env.LIVEKIT_URL || ("TURBOPACK compile-time value", "ws://localhost:7880") || "ws://localhost:7880",
            livekitApiKey: process.env.LIVEKIT_API_KEY,
            livekitApiSecret: process.env.LIVEKIT_API_SECRET
        };
    }
    getOrCreateQaState(sessionId) {
        const existing = this.qaStates.get(sessionId);
        if (existing) return existing;
        const state = {
            pending: new Set(),
            activeSpeakerIdentity: null,
            activeBridge: null,
            organizerTargetLanguage: "uk"
        };
        this.qaStates.set(sessionId, state);
        return state;
    }
    requestQuestion(sessionId, attendeeIdentity) {
        const session = this.sessions.get(sessionId);
        if (!session) {
            throw new Error("Session not found");
        }
        const state = this.getOrCreateQaState(sessionId);
        if (state.activeSpeakerIdentity !== attendeeIdentity) {
            state.pending.add(attendeeIdentity);
        }
        return this.getQaStatus(sessionId);
    }
    cancelQuestion(sessionId, attendeeIdentity) {
        const state = this.getOrCreateQaState(sessionId);
        state.pending.delete(attendeeIdentity);
        if (state.activeSpeakerIdentity === attendeeIdentity) {
            void this.endActiveQuestion(sessionId);
        }
        return this.getQaStatus(sessionId);
    }
    async approveQuestion(sessionId, attendeeIdentity, organizerTargetLanguage = "uk") {
        const session = this.sessions.get(sessionId);
        if (!session) {
            throw new Error("Session not found");
        }
        const state = this.getOrCreateQaState(sessionId);
        if (state.activeBridge && state.activeSpeakerIdentity !== attendeeIdentity) {
            await state.activeBridge.stop();
            state.activeBridge = null;
            state.activeSpeakerIdentity = null;
        }
        if (!state.activeBridge || state.activeSpeakerIdentity !== attendeeIdentity) {
            const suffix = attendeeIdentity.replace(/[^a-zA-Z0-9]/g, "").slice(-8) || "speaker";
            const bridge = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$bridge$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TranslationBridge"](sessionId, organizerTargetLanguage, attendeeIdentity, this.getConfig(), `reverse-${organizerTargetLanguage}-${suffix}`);
            await bridge.start();
            bridge.subscriberCount = 1;
            state.activeBridge = bridge;
            state.activeSpeakerIdentity = attendeeIdentity;
        }
        state.pending.delete(attendeeIdentity);
        state.organizerTargetLanguage = organizerTargetLanguage;
        return this.getQaStatus(sessionId);
    }
    async endActiveQuestion(sessionId) {
        const state = this.getOrCreateQaState(sessionId);
        if (state.activeBridge) {
            await state.activeBridge.stop();
        }
        state.activeBridge = null;
        state.activeSpeakerIdentity = null;
        return this.getQaStatus(sessionId);
    }
    getQaStatus(sessionId) {
        const state = this.getOrCreateQaState(sessionId);
        return {
            sessionId,
            pendingSpeakerIdentities: Array.from(state.pending.values()),
            activeSpeakerIdentity: state.activeSpeakerIdentity,
            activeTranslatorIdentity: state.activeBridge?.identity || null,
            organizerTargetLanguage: state.organizerTargetLanguage
        };
    }
    getAllSessions() {
        return Array.from(this.sessions.values());
    }
}
const __TURBOPACK__default__export__ = TranslationSessionManager;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/sessions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$session$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translation-session-manager.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$session$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$session$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const organizerName = body.organizerName || "organizer";
        const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])().slice(0, 8); // Short, readable ID
        const organizerIdentity = `organizer-${organizerName}`;
        const manager = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$session$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getInstance();
        manager.createSession(sessionId, organizerIdentity);
        // Build the attendee join URL
        const protocol = req.headers.get("x-forwarded-proto") || "http";
        const host = req.headers.get("host") || "localhost:3000";
        const joinUrl = `${protocol}://${host}/session/${sessionId}/watch`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            sessionId,
            organizerIdentity,
            joinUrl,
            broadcastUrl: `${protocol}://${host}/session/${sessionId}/broadcast`
        });
    } catch (error) {
        console.error("Error creating session:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create session"
        }, {
            status: 500
        });
    }
}
async function GET() {
    const manager = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translation$2d$session$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getInstance();
    const sessions = manager.getAllSessions();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        sessions
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-kip70._.js.map