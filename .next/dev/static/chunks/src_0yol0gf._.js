(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SessionQRCode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SessionQRCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
function SessionQRCode({ url, size = 160 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "qr-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
            value: url,
            size: size,
            level: "M",
            bgColor: "#ffffff",
            fgColor: "#1A1917"
        }, void 0, false, {
            fileName: "[project]/src/components/SessionQRCode.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SessionQRCode.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SessionQRCode;
var _c;
__turbopack_context__.k.register(_c, "SessionQRCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/session/[id]/broadcast/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BroadcastPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Q0GUQkyk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/room-Q0GUQkyk.mjs [app-client] (ecmascript) <export L as LiveKitRoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-CA4A5LBF.mjs [app-client] (ecmascript) <export C as useLocalParticipant>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-DzwYztG5.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-CA4A5LBF.mjs [app-client] (ecmascript) <export X as useRemoteParticipants>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__ParticipantTile$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export P as ParticipantTile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__TrackLoop$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export j as TrackLoop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export T as TrackToggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-CA4A5LBF.mjs [app-client] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionQRCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SessionQRCode.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FLAGS = {
    en: "🇺🇸",
    es: "🇪🇸",
    fr: "🇫🇷",
    de: "🇩🇪",
    it: "🇮🇹",
    pt: "🇧🇷",
    ja: "🇯🇵",
    ko: "🇰🇷",
    zh: "🇨🇳",
    ar: "🇸🇦",
    hi: "🇮🇳",
    ru: "🇷🇺",
    tr: "🇹🇷",
    nl: "🇳🇱",
    pl: "🇵🇱",
    sv: "🇸🇪"
};
const LANG_NAMES = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    pt: "Portuguese",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    ar: "Arabic",
    hi: "Hindi",
    ru: "Russian",
    tr: "Turkish",
    nl: "Dutch",
    pl: "Polish",
    sv: "Swedish"
};
function BroadcastControls({ sessionId }) {
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const { localParticipant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"])();
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [qaStatus, setQaStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sessionId,
        pendingSpeakerIdentities: [],
        activeSpeakerIdentity: null,
        activeTranslatorIdentity: null,
        organizerTargetLanguage: "uk"
    });
    const audioTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
    ]);
    const cameraTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera
    ]);
    const screenShareTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare
    ]);
    const remoteParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__["useRemoteParticipants"])();
    // Count only real attendees, not translator bots
    const listenerCount = remoteParticipants.filter((p)=>!p.identity.startsWith("translator-") && !p.identity.startsWith("reverse-")).length;
    const joinUrl = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/session/${sessionId}/watch` : "TURBOPACK unreachable";
    const fetchTranslations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BroadcastControls.useCallback[fetchTranslations]": async ()=>{
            try {
                const res = await fetch(`/api/translate/status?sessionId=${sessionId}`);
                const data = await res.json();
                setTranslations(data.translations || []);
            } catch (err) {
                console.error("Failed to fetch translations:", err);
            }
        }
    }["BroadcastControls.useCallback[fetchTranslations]"], [
        sessionId
    ]);
    const fetchQaStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BroadcastControls.useCallback[fetchQaStatus]": async ()=>{
            try {
                const res = await fetch(`/api/questions?sessionId=${sessionId}`);
                const data = await res.json();
                if (data.error) return;
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to fetch question status:", err);
            }
        }
    }["BroadcastControls.useCallback[fetchQaStatus]"], [
        sessionId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BroadcastControls.useEffect": ()=>{
            const bootstrap = setTimeout({
                "BroadcastControls.useEffect.bootstrap": ()=>{
                    void fetchTranslations();
                    void fetchQaStatus();
                }
            }["BroadcastControls.useEffect.bootstrap"], 0);
            const interval = setInterval(fetchTranslations, 3000);
            const qaInterval = setInterval(fetchQaStatus, 2000);
            return ({
                "BroadcastControls.useEffect": ()=>{
                    clearTimeout(bootstrap);
                    clearInterval(interval);
                    clearInterval(qaInterval);
                }
            })["BroadcastControls.useEffect"];
        }
    }["BroadcastControls.useEffect"], [
        fetchTranslations,
        fetchQaStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BroadcastControls.useEffect": ()=>{
            if (!room) return;
            const updateAudioSubscriptions = {
                "BroadcastControls.useEffect.updateAudioSubscriptions": ()=>{
                    const activeTranslatorIdentity = qaStatus.activeTranslatorIdentity;
                    for (const [, participant] of room.remoteParticipants){
                        for (const [, pub] of participant.trackPublications){
                            if (pub.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) continue;
                            pub.setSubscribed(!!activeTranslatorIdentity && participant.identity === activeTranslatorIdentity);
                        }
                    }
                }
            }["BroadcastControls.useEffect.updateAudioSubscriptions"];
            updateAudioSubscriptions();
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished, updateAudioSubscriptions);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, updateAudioSubscriptions);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished, updateAudioSubscriptions);
            return ({
                "BroadcastControls.useEffect": ()=>{
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished, updateAudioSubscriptions);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, updateAudioSubscriptions);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished, updateAudioSubscriptions);
                }
            })["BroadcastControls.useEffect"];
        }
    }["BroadcastControls.useEffect"], [
        room,
        qaStatus.activeTranslatorIdentity
    ]);
    const approveQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BroadcastControls.useCallback[approveQuestion]": async (attendeeIdentity)=>{
            try {
                const res = await fetch("/api/questions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        action: "approve",
                        sessionId,
                        requesterIdentity: localParticipant.identity,
                        attendeeIdentity,
                        organizerTargetLanguage: "uk"
                    })
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to approve question:", err);
            }
        }
    }["BroadcastControls.useCallback[approveQuestion]"], [
        sessionId,
        localParticipant.identity
    ]);
    const endActiveQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BroadcastControls.useCallback[endActiveQuestion]": async ()=>{
            try {
                const res = await fetch("/api/questions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        action: "end",
                        sessionId,
                        requesterIdentity: localParticipant.identity
                    })
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to end active question:", err);
            }
        }
    }["BroadcastControls.useCallback[endActiveQuestion]"], [
        sessionId,
        localParticipant.identity
    ]);
    const primaryScreenTrack = screenShareTracks[0];
    const isMicOn = audioTracks.some((t)=>t.participant.identity === localParticipant.identity);
    const isCameraOn = cameraTracks.some((t)=>t.participant.identity === localParticipant.identity);
    const isScreenSharing = screenShareTracks.some((t)=>t.participant.identity === localParticipant.identity);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container enter",
        style: {
            maxWidth: 980
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 48
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display display-lg",
                        style: {
                            marginBottom: 8
                        },
                        children: "Broadcasting"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono",
                        children: sessionId
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    primaryScreenTrack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-stage-main",
                        style: {
                            marginBottom: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__TrackLoop$3e$__["TrackLoop"], {
                            tracks: [
                                primaryScreenTrack
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__ParticipantTile$3e$__["ParticipantTile"], {}, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-stage-placeholder",
                        style: {
                            marginBottom: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm",
                            children: "Start screen share to present slides and demos"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-strip",
                        children: cameraTracks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-tile-empty",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm",
                                children: "No cameras active yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__TrackLoop$3e$__["TrackLoop"], {
                            tracks: cameraTracks,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__ParticipantTile$3e$__["ParticipantTile"], {}, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 225,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `waveform ${isMicOn ? "active" : "idle"}`,
                                        children: Array.from({
                                            length: 5
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "waveform-bar"
                                            }, i, false, {
                                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "status",
                                        style: {
                                            color: isMicOn ? "var(--success)" : "var(--fg-ghost)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `status-dot ${isMicOn ? "pulse" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            isMicOn ? "Live" : "Muted"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: [
                                    listenerCount,
                                    " listener",
                                    listenerCount !== 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                        source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                        style: {
                            width: "100%",
                            padding: "14px 32px",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            fontWeight: 500,
                            border: isMicOn ? "1px solid var(--error)" : "none",
                            borderRadius: 0,
                            background: isMicOn ? "transparent" : "var(--fg)",
                            color: isMicOn ? "var(--error)" : "var(--bg)",
                            cursor: "pointer"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 10,
                            marginTop: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera,
                                style: {
                                    width: "100%",
                                    padding: "14px 20px",
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    border: isCameraOn ? "1px solid var(--error)" : "1px solid var(--fg)",
                                    borderRadius: 0,
                                    background: isCameraOn ? "transparent" : "var(--fg)",
                                    color: isCameraOn ? "var(--error)" : "var(--bg)",
                                    cursor: "pointer"
                                },
                                children: isCameraOn ? "Stop camera" : "Start camera"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare,
                                style: {
                                    width: "100%",
                                    padding: "14px 20px",
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    border: isScreenSharing ? "1px solid var(--error)" : "1px solid var(--fg)",
                                    borderRadius: 0,
                                    background: isScreenSharing ? "transparent" : "var(--fg)",
                                    color: isScreenSharing ? "var(--error)" : "var(--bg)",
                                    cursor: "pointer"
                                },
                                children: isScreenSharing ? "Stop sharing" : "Share screen"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "32px 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        children: "Share with attendees"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionQRCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        url: joinUrl,
                        size: 140
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono",
                        style: {
                            wordBreak: "break-all",
                            textAlign: "center"
                        },
                        children: joinUrl
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "28px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        style: {
                            marginBottom: 16,
                            display: "block"
                        },
                        children: [
                            "Translations · ",
                            translations.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    translations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm italic",
                        children: "None yet — attendees can request them"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this) : translations.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lang-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lang-row-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lang-flag",
                                            children: FLAGS[t.language] || "🌐"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lang-name",
                                            children: LANG_NAMES[t.language] || t.language.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lang-meta",
                                            children: [
                                                t.subscriberCount,
                                                " listener",
                                                t.subscriberCount !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `status status--${t.status === "active" ? "active" : "waiting"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "status-dot pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this),
                                                t.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.language, true, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "28px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        style: {
                            marginBottom: 16,
                            display: "block"
                        },
                        children: "Listener Q&A"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    qaStatus.activeSpeakerIdentity ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm",
                                style: {
                                    marginBottom: 8
                                },
                                children: [
                                    "Live question: ",
                                    qaStatus.activeSpeakerIdentity
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-outline",
                                onClick: endActiveQuestion,
                                children: "End question"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm italic",
                        style: {
                            marginBottom: 14
                        },
                        children: "No active speaker"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    qaStatus.pendingSpeakerIdentities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm italic",
                        children: "No pending requests"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this) : qaStatus.pendingSpeakerIdentities.map((identity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lang-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lang-row-left",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "lang-name",
                                        children: identity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline",
                                    onClick: ()=>approveQuestion(identity),
                                    style: {
                                        padding: "8px 14px",
                                        fontSize: 12
                                    },
                                    children: "Approve"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, identity, true, {
                            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: 28
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-danger",
                    onClick: ()=>{
                        room.disconnect();
                        window.location.href = "/";
                    },
                    style: {
                        width: "100%"
                    },
                    children: "End broadcast"
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(BroadcastControls, "b1pM+j1YzMtYVhlIe2n2GtxOQlg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useLocalParticipant$3e$__["useLocalParticipant"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__["useRemoteParticipants"]
    ];
});
_c = BroadcastControls;
function BroadcastPage({ params }) {
    _s1();
    const { id: sessionId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [livekitUrl, setLivekitUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BroadcastPage.useEffect": ()=>{
            async function fetchToken() {
                try {
                    const identity = `organizer-host`;
                    const res = await fetch(`/api/token?room=${sessionId}&identity=${identity}&role=organizer`);
                    const data = await res.json();
                    if (data.error) throw new Error(data.error);
                    setToken(data.token);
                    setLivekitUrl(data.serverUrl);
                } catch (err) {
                    setError(err.message);
                }
            }
            fetchToken();
        }
    }["BroadcastPage.useEffect"], [
        sessionId
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "display display-md",
                        style: {
                            marginBottom: 16
                        },
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm",
                        style: {
                            marginBottom: 32
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-outline",
                        onClick: ()=>window.location.href = "/",
                        children: "Go home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                        lineNumber: 486,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
            lineNumber: 480,
            columnNumber: 7
        }, this);
    }
    if (!token || !livekitUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner"
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                lineNumber: 497,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
            lineNumber: 496,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page page-top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Q0GUQkyk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__["LiveKitRoom"], {
            video: false,
            audio: true,
            token: token,
            serverUrl: livekitUrl,
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
            },
            onDisconnected: ()=>{
                setError("Disconnected from LiveKit room. Please check your credentials or network connection.");
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BroadcastControls, {
                    sessionId: sessionId
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/session/[id]/broadcast/page.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s1(BroadcastPage, "YeYHv82i4cs2WQx06qvrYoTC5ZE=");
_c1 = BroadcastPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BroadcastControls");
__turbopack_context__.k.register(_c1, "BroadcastPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0yol0gf._.js.map