(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/languages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES,
    "getLanguageByCode",
    ()=>getLanguageByCode
]);
const SUPPORTED_LANGUAGES = [
    {
        code: "af",
        name: "Afrikaans",
        flag: "🇿🇦"
    },
    {
        code: "ak",
        name: "Akan",
        flag: "🇬🇭"
    },
    {
        code: "sq",
        name: "Albanian",
        flag: "🇦🇱"
    },
    {
        code: "am",
        name: "Amharic",
        flag: "🇪🇹"
    },
    {
        code: "ar",
        name: "Arabic",
        flag: "🇸🇦"
    },
    {
        code: "hy",
        name: "Armenian",
        flag: "🇦🇲"
    },
    {
        code: "as",
        name: "Assamese",
        flag: "🇮🇳"
    },
    {
        code: "az",
        name: "Azerbaijani",
        flag: "🇦🇿"
    },
    {
        code: "eu",
        name: "Basque",
        flag: "🇪🇺"
    },
    {
        code: "be",
        name: "Belarusian",
        flag: "🇧🇾"
    },
    {
        code: "bn",
        name: "Bengali",
        flag: "🇧🇩"
    },
    {
        code: "bs",
        name: "Bosnian",
        flag: "🇧🇦"
    },
    {
        code: "bg",
        name: "Bulgarian",
        flag: "🇧🇬"
    },
    {
        code: "my",
        name: "Burmese",
        flag: "🇲🇲"
    },
    {
        code: "yue",
        name: "Cantonese",
        flag: "🇭🇰"
    },
    {
        code: "ca",
        name: "Catalan",
        flag: "🇪🇺"
    },
    {
        code: "ceb",
        name: "Cebuano",
        flag: "🇵🇭"
    },
    {
        code: "zh",
        name: "Chinese",
        flag: "🇨🇳"
    },
    {
        code: "hr",
        name: "Croatian",
        flag: "🇭🇷"
    },
    {
        code: "cs",
        name: "Czech",
        flag: "🇨🇿"
    },
    {
        code: "da",
        name: "Danish",
        flag: "🇩🇰"
    },
    {
        code: "nl",
        name: "Dutch",
        flag: "🇳🇱"
    },
    {
        code: "en",
        name: "English",
        flag: "🇺🇸"
    },
    {
        code: "et",
        name: "Estonian",
        flag: "🇪🇪"
    },
    {
        code: "fo",
        name: "Faroese",
        flag: "🇫🇴"
    },
    {
        code: "fil",
        name: "Filipino",
        flag: "🇵🇭"
    },
    {
        code: "fi",
        name: "Finnish",
        flag: "🇫🇮"
    },
    {
        code: "fr",
        name: "French",
        flag: "🇫🇷"
    },
    {
        code: "gl",
        name: "Galician",
        flag: "🇪🇺"
    },
    {
        code: "ka",
        name: "Georgian",
        flag: "🇬🇪"
    },
    {
        code: "de",
        name: "German",
        flag: "🇩🇪"
    },
    {
        code: "el",
        name: "Greek",
        flag: "🇬🇷"
    },
    {
        code: "gu",
        name: "Gujarati",
        flag: "🇮🇳"
    },
    {
        code: "ha",
        name: "Hausa",
        flag: "🇳🇬"
    },
    {
        code: "iw",
        name: "Hebrew",
        flag: "🇮🇱"
    },
    {
        code: "hi",
        name: "Hindi",
        flag: "🇮🇳"
    },
    {
        code: "hu",
        name: "Hungarian",
        flag: "🇭🇺"
    },
    {
        code: "is",
        name: "Icelandic",
        flag: "🇮🇸"
    },
    {
        code: "id",
        name: "Indonesian",
        flag: "🇮🇩"
    },
    {
        code: "ga",
        name: "Irish",
        flag: "🇮🇪"
    },
    {
        code: "it",
        name: "Italian",
        flag: "🇮🇹"
    },
    {
        code: "ja",
        name: "Japanese",
        flag: "🇯🇵"
    },
    {
        code: "kn",
        name: "Kannada",
        flag: "🇮🇳"
    },
    {
        code: "kk",
        name: "Kazakh",
        flag: "🇰🇿"
    },
    {
        code: "km",
        name: "Khmer",
        flag: "🇰🇭"
    },
    {
        code: "rw",
        name: "Kinyarwanda",
        flag: "🇷🇼"
    },
    {
        code: "ko",
        name: "Korean",
        flag: "🇰🇷"
    },
    {
        code: "ku",
        name: "Kurdish",
        flag: "🌍"
    },
    {
        code: "ky",
        name: "Kyrgyz",
        flag: "🇰🇬"
    },
    {
        code: "lo",
        name: "Lao",
        flag: "🇱🇦"
    },
    {
        code: "lv",
        name: "Latvian",
        flag: "🇱🇻"
    },
    {
        code: "lt",
        name: "Lithuanian",
        flag: "🇱🇹"
    },
    {
        code: "mk",
        name: "Macedonian",
        flag: "🇲🇰"
    },
    {
        code: "ms",
        name: "Malay",
        flag: "🇲🇾"
    },
    {
        code: "ml",
        name: "Malayalam",
        flag: "🇮🇳"
    },
    {
        code: "mt",
        name: "Maltese",
        flag: "🇲🇹"
    },
    {
        code: "mi",
        name: "Maori",
        flag: "🇳🇿"
    },
    {
        code: "mr",
        name: "Marathi",
        flag: "🇮🇳"
    },
    {
        code: "mn",
        name: "Mongolian",
        flag: "🇲🇳"
    },
    {
        code: "ne",
        name: "Nepali",
        flag: "🇳🇵"
    },
    {
        code: "nb",
        name: "Norwegian",
        flag: "🇳🇴"
    },
    {
        code: "or",
        name: "Odia",
        flag: "🇮🇳"
    },
    {
        code: "om",
        name: "Oromo",
        flag: "🇪🇹"
    },
    {
        code: "ps",
        name: "Pashto",
        flag: "🇦🇫"
    },
    {
        code: "fa",
        name: "Persian",
        flag: "🇮🇷"
    },
    {
        code: "pl",
        name: "Polish",
        flag: "🇵🇱"
    },
    {
        code: "pt",
        name: "Portuguese",
        flag: "🇵🇹"
    },
    {
        code: "pa",
        name: "Punjabi",
        flag: "🇮🇳"
    },
    {
        code: "qu",
        name: "Quechua",
        flag: "🇵🇪"
    },
    {
        code: "ro",
        name: "Romanian",
        flag: "🇷🇴"
    },
    {
        code: "rm",
        name: "Romansh",
        flag: "🇨🇭"
    },
    {
        code: "ru",
        name: "Russian",
        flag: "🇷🇺"
    },
    {
        code: "sr",
        name: "Serbian",
        flag: "🇷🇸"
    },
    {
        code: "sd",
        name: "Sindhi",
        flag: "🇵🇰"
    },
    {
        code: "si",
        name: "Sinhala",
        flag: "🇱🇰"
    },
    {
        code: "sk",
        name: "Slovak",
        flag: "🇸🇰"
    },
    {
        code: "sl",
        name: "Slovenian",
        flag: "🇸🇮"
    },
    {
        code: "so",
        name: "Somali",
        flag: "🇸🇴"
    },
    {
        code: "st",
        name: "Southern Sotho",
        flag: "🇱🇸"
    },
    {
        code: "es",
        name: "Spanish",
        flag: "🇪🇸"
    },
    {
        code: "sw",
        name: "Swahili",
        flag: "🇰🇪"
    },
    {
        code: "sv",
        name: "Swedish",
        flag: "🇸🇪"
    },
    {
        code: "tg",
        name: "Tajik",
        flag: "🇹🇯"
    },
    {
        code: "ta",
        name: "Tamil",
        flag: "🇮🇳"
    },
    {
        code: "te",
        name: "Telugu",
        flag: "🇮🇳"
    },
    {
        code: "th",
        name: "Thai",
        flag: "🇹🇭"
    },
    {
        code: "tn",
        name: "Tswana",
        flag: "🇧🇼"
    },
    {
        code: "tr",
        name: "Turkish",
        flag: "🇹🇷"
    },
    {
        code: "tk",
        name: "Turkmen",
        flag: "🇹🇲"
    },
    {
        code: "uk",
        name: "Ukrainian",
        flag: "🇺🇦"
    },
    {
        code: "ur",
        name: "Urdu",
        flag: "🇵🇰"
    },
    {
        code: "uz",
        name: "Uzbek",
        flag: "🇺🇿"
    },
    {
        code: "vi",
        name: "Vietnamese",
        flag: "🇻🇳"
    },
    {
        code: "cy",
        name: "Welsh",
        flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    },
    {
        code: "fy",
        name: "Western Frisian",
        flag: "🇳🇱"
    },
    {
        code: "wo",
        name: "Wolof",
        flag: "🇸🇳"
    },
    {
        code: "yo",
        name: "Yoruba",
        flag: "🇳🇬"
    },
    {
        code: "zu",
        name: "Zulu",
        flag: "🇿🇦"
    }
];
function getLanguageByCode(code) {
    return SUPPORTED_LANGUAGES.find((lang)=>lang.code === code);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/languages.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function LanguageSelector({ sessionId, currentLanguage, onLanguageChange }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeLanguageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentLanguage);
    // Keep ref in sync with current language
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            activeLanguageRef.current = currentLanguage;
        }
    }["LanguageSelector.useEffect"], [
        currentLanguage
    ]);
    // Unsubscribe on unmount (attendee disconnects)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSelector.useEffect": ()=>{
            return ({
                "LanguageSelector.useEffect": ()=>{
                    const lang = activeLanguageRef.current;
                    if (lang && lang !== "original") {
                        const payload = JSON.stringify({
                            sessionId,
                            targetLanguage: lang
                        });
                        const blob = new Blob([
                            payload
                        ], {
                            type: "application/json"
                        });
                        // sendBeacon is reliable during page unload
                        const sent = navigator.sendBeacon?.("/api/translate/unsubscribe", blob);
                        if (!sent) {
                            fetch("/api/translate/unsubscribe", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: payload,
                                keepalive: true
                            }).catch({
                                "LanguageSelector.useEffect": ()=>{}
                            }["LanguageSelector.useEffect"]);
                        }
                    }
                }
            })["LanguageSelector.useEffect"];
        }
    }["LanguageSelector.useEffect"], [
        sessionId
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageSelector.useCallback[handleChange]": async (e)=>{
            const langCode = e.target.value;
            const previousLanguage = activeLanguageRef.current;
            setError(null);
            if (langCode === "original") {
                // Unsubscribe from the current translation
                if (previousLanguage && previousLanguage !== "original") {
                    fetch("/api/translate", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            sessionId,
                            targetLanguage: previousLanguage
                        })
                    }).catch({
                        "LanguageSelector.useCallback[handleChange]": ()=>{}
                    }["LanguageSelector.useCallback[handleChange]"]);
                }
                onLanguageChange("original", null);
                return;
            }
            setLoading(true);
            try {
                const res = await fetch("/api/translate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        sessionId,
                        targetLanguage: langCode,
                        previousLanguage: previousLanguage !== "original" ? previousLanguage : undefined
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Translation request failed");
                }
                onLanguageChange(langCode, data.translatorIdentity);
            } catch (err) {
                setError(err.message);
                console.error("Translation request error:", err);
            } finally{
                setLoading(false);
            }
        }
    }["LanguageSelector.useCallback[handleChange]"], [
        sessionId,
        onLanguageChange
    ]);
    const currentLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLanguageByCode"])(currentLanguage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "language-select",
                className: "label",
                style: {
                    display: "block",
                    marginBottom: 10
                },
                children: "Language"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "language-select",
                        className: "select-field",
                        value: currentLanguage,
                        onChange: handleChange,
                        disabled: loading,
                        style: {
                            opacity: loading ? 0.5 : 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "original",
                                children: "Original audio"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                label: "Translations",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$languages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: lang.code,
                                        children: [
                                            lang.name,
                                            " ",
                                            lang.flag
                                        ]
                                    }, lang.code, true, {
                                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: 40,
                            top: "50%",
                            transform: "translateY(-50%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "spinner"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 10,
                    minHeight: 20
                },
                children: [
                    currentLanguage !== "original" && currentLang && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "status status--active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-dot pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            "Translating to ",
                            currentLang.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "status status--waiting",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-dot pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            "Starting translation…"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "status status--error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(LanguageSelector, "np3YY0i1mrlOYzDT9/l4cw0FAQU=");
_c = LanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "LanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/session/[id]/watch/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WatchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Q0GUQkyk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/room-Q0GUQkyk.mjs [app-client] (ecmascript) <export L as LiveKitRoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__ParticipantTile$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export P as ParticipantTile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__TrackLoop$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export j as TrackLoop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-DqcPwJ_9.mjs [app-client] (ecmascript) <export T as TrackToggle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-DzwYztG5.mjs [app-client] (ecmascript) <export f as useRoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-CA4A5LBF.mjs [app-client] (ecmascript) <export t as useTracks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/hooks-CA4A5LBF.mjs [app-client] (ecmascript) <export X as useRemoteParticipants>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$session$2f5b$id$5d2f$watch$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/session/[id]/watch/components/LanguageSelector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AttendeeView({ sessionId, attendeeIdentity }) {
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"])();
    const [currentLanguage, setCurrentLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("original");
    const [translatorIdentity, setTranslatorIdentity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [qaStatus, setQaStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        sessionId,
        pendingSpeakerIdentities: [],
        activeSpeakerIdentity: null,
        activeTranslatorIdentity: null,
        organizerTargetLanguage: "uk",
        requestedByCurrentUser: false,
        approvedForCurrentUser: false
    });
    const [transcripts, setTranscripts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const transcriptEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentLanguageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(currentLanguage);
    const remoteParticipants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__["useRemoteParticipants"])();
    const audioTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone
    ]);
    const cameraTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Camera
    ]);
    const screenShareTracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.ScreenShare
    ]);
    const organizerParticipant = remoteParticipants.find((p)=>p.identity.startsWith("organizer-"));
    // Listen for transcription data from translator bots
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendeeView.useEffect": ()=>{
            if (!room) return;
            const handleData = {
                "AttendeeView.useEffect.handleData": (payload, participant, kind, topic)=>{
                    // Only handle transcription topic
                    if (topic !== "transcription") return;
                    try {
                        const data = JSON.parse(new TextDecoder().decode(payload));
                        console.log("🚀 ~ data:", data);
                        if (data.type !== "transcription") return;
                        // Only show transcriptions for the currently selected language
                        if (data.language !== currentLanguageRef.current) return;
                        setTranscripts({
                            "AttendeeView.useEffect.handleData": (prev)=>{
                                const existing = prev.findIndex({
                                    "AttendeeView.useEffect.handleData.existing": (t)=>t.id === data.segmentId
                                }["AttendeeView.useEffect.handleData.existing"]);
                                const entry = {
                                    id: data.segmentId,
                                    text: data.text,
                                    language: data.language,
                                    final: data.final,
                                    timestamp: data.timestamp
                                };
                                if (existing >= 0) {
                                    const updated = [
                                        ...prev
                                    ];
                                    updated[existing] = {
                                        ...updated[existing],
                                        text: updated[existing].text + data.text,
                                        final: data.final
                                    };
                                    return updated;
                                }
                                const next = [
                                    ...prev,
                                    entry
                                ];
                                return next.slice(-50);
                            }
                        }["AttendeeView.useEffect.handleData"]);
                    } catch  {
                    // Not a JSON transcription message
                    }
                }
            }["AttendeeView.useEffect.handleData"];
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, handleData);
            return ({
                "AttendeeView.useEffect": ()=>{
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, handleData);
                }
            })["AttendeeView.useEffect"];
        }
    }["AttendeeView.useEffect"], [
        room
    ]);
    // Auto-scroll transcript
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendeeView.useEffect": ()=>{
            transcriptEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AttendeeView.useEffect"], [
        transcripts
    ]);
    // Manage which audio tracks are subscribed based on selected language
    // autoSubscribe: false means nothing plays by default
    // We explicitly subscribe only to the selected language's track
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendeeView.useEffect": ()=>{
            if (!room) return;
            const updateSubscriptions = {
                "AttendeeView.useEffect.updateSubscriptions": ()=>{
                    const participants = room.remoteParticipants;
                    for (const [, participant] of participants){
                        const isOrganizer = participant.identity.startsWith("organizer-");
                        const isSelectedTranslator = translatorIdentity && participant.identity === translatorIdentity;
                        for (const [, pub] of participant.trackPublications){
                            if (pub.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video) {
                                pub.setSubscribed(true);
                            }
                            if (pub.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) {
                                if (currentLanguage === "original") {
                                    pub.setSubscribed(isOrganizer);
                                } else {
                                    pub.setSubscribed(!!isSelectedTranslator);
                                }
                            }
                        }
                    }
                }
            }["AttendeeView.useEffect.updateSubscriptions"];
            updateSubscriptions();
            const handleUpdate = {
                "AttendeeView.useEffect.handleUpdate": ()=>updateSubscriptions()
            }["AttendeeView.useEffect.handleUpdate"];
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished, handleUpdate);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, handleUpdate);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished, handleUpdate);
            return ({
                "AttendeeView.useEffect": ()=>{
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished, handleUpdate);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, handleUpdate);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished, handleUpdate);
                }
            })["AttendeeView.useEffect"];
        }
    }["AttendeeView.useEffect"], [
        room,
        currentLanguage,
        translatorIdentity,
        remoteParticipants
    ]);
    const isReceivingAudio = audioTracks.some((t)=>{
        const pub = t.publication;
        if (currentLanguage === "original") {
            return t.participant.identity.startsWith("organizer-") && pub.isSubscribed;
        }
        return !!translatorIdentity && t.participant.identity === translatorIdentity && pub.isSubscribed;
    });
    const isCameraOn = cameraTracks.some((t)=>t.participant.isLocal);
    const isMicOn = audioTracks.some((t)=>t.participant.isLocal);
    const fetchQaStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AttendeeView.useCallback[fetchQaStatus]": async ()=>{
            if (!attendeeIdentity) return;
            try {
                const res = await fetch(`/api/questions?sessionId=${sessionId}&identity=${attendeeIdentity}`);
                const data = await res.json();
                if (data.error) return;
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to fetch Q&A status:", err);
            }
        }
    }["AttendeeView.useCallback[fetchQaStatus]"], [
        sessionId,
        attendeeIdentity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendeeView.useEffect": ()=>{
            const bootstrap = setTimeout({
                "AttendeeView.useEffect.bootstrap": ()=>{
                    void fetchQaStatus();
                }
            }["AttendeeView.useEffect.bootstrap"], 0);
            const interval = setInterval(fetchQaStatus, 2000);
            return ({
                "AttendeeView.useEffect": ()=>{
                    clearTimeout(bootstrap);
                    clearInterval(interval);
                }
            })["AttendeeView.useEffect"];
        }
    }["AttendeeView.useEffect"], [
        fetchQaStatus
    ]);
    const requestQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AttendeeView.useCallback[requestQuestion]": async ()=>{
            try {
                const res = await fetch("/api/questions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        action: "request",
                        sessionId,
                        requesterIdentity: attendeeIdentity,
                        attendeeIdentity
                    })
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to request question:", err);
            }
        }
    }["AttendeeView.useCallback[requestQuestion]"], [
        sessionId,
        attendeeIdentity
    ]);
    const cancelQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AttendeeView.useCallback[cancelQuestion]": async ()=>{
            try {
                const res = await fetch("/api/questions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        action: "cancel",
                        sessionId,
                        requesterIdentity: attendeeIdentity,
                        attendeeIdentity
                    })
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setQaStatus(data);
            } catch (err) {
                console.error("Failed to cancel question:", err);
            }
        }
    }["AttendeeView.useCallback[cancelQuestion]"], [
        sessionId,
        attendeeIdentity
    ]);
    // Unsubscribe from translation when tab closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendeeView.useEffect": ()=>{
            const handleBeforeUnload = {
                "AttendeeView.useEffect.handleBeforeUnload": ()=>{
                    // Use sendBeacon for reliable fire-and-forget during page unload
                    if (currentLanguageRef.current && currentLanguageRef.current !== "original") {
                        const body = JSON.stringify({
                            sessionId,
                            targetLanguage: currentLanguageRef.current
                        });
                        navigator.sendBeacon("/api/translate/unsubscribe", new Blob([
                            body
                        ], {
                            type: "application/json"
                        }));
                    }
                    if (attendeeIdentity) {
                        const body = JSON.stringify({
                            action: "cancel",
                            sessionId,
                            requesterIdentity: attendeeIdentity,
                            attendeeIdentity
                        });
                        navigator.sendBeacon("/api/questions", new Blob([
                            body
                        ], {
                            type: "application/json"
                        }));
                    }
                }
            }["AttendeeView.useEffect.handleBeforeUnload"];
            window.addEventListener("beforeunload", handleBeforeUnload);
            return ({
                "AttendeeView.useEffect": ()=>{
                    window.removeEventListener("beforeunload", handleBeforeUnload);
                    // Also fire on React unmount (e.g. navigation away)
                    handleBeforeUnload();
                }
            })["AttendeeView.useEffect"];
        }
    }["AttendeeView.useEffect"], [
        sessionId,
        attendeeIdentity
    ]);
    const handleLanguageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AttendeeView.useCallback[handleLanguageChange]": (langCode, newTranslatorIdentity)=>{
            // Unsubscribe from the previous language
            const prev = currentLanguageRef.current;
            if (prev && prev !== "original" && prev !== langCode) {
                fetch("/api/translate/unsubscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        sessionId,
                        targetLanguage: prev
                    })
                }).catch({
                    "AttendeeView.useCallback[handleLanguageChange]": ()=>{}
                }["AttendeeView.useCallback[handleLanguageChange]"]);
            }
            setCurrentLanguage(langCode);
            currentLanguageRef.current = langCode;
            setTranslatorIdentity(newTranslatorIdentity);
            // Clear transcripts when switching languages
            setTranscripts([]);
        }
    }["AttendeeView.useCallback[handleLanguageChange]"], [
        sessionId
    ]);
    const isConnected = organizerParticipant !== undefined;
    const primaryScreenTrack = screenShareTracks[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container enter",
        style: {
            maxWidth: 980
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display display-lg",
                        style: {
                            marginBottom: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "Listening"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono",
                        children: sessionId
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 24
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
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 331,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 330,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-stage-placeholder",
                        style: {
                            marginBottom: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm",
                            children: "Waiting for shared screen"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-strip",
                        children: cameraTracks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "video-tile-empty",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm",
                                children: "No participant cameras yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 343,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__TrackLoop$3e$__["TrackLoop"], {
                            tracks: cameraTracks,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__P__as__ParticipantTile$3e$__["ParticipantTile"], {}, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 32
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `waveform ${isReceivingAudio ? "active" : "idle"}`,
                                children: Array.from({
                                    length: 5
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "waveform-bar"
                                    }, i, false, {
                                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status status--active",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "status-dot pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    currentLanguage === "original" ? "Original" : currentLanguage.toUpperCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 370,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status status--waiting",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "status-dot pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 17
                                    }, this),
                                    "Waiting for broadcast"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "24px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        style: {
                            display: "block",
                            marginBottom: 10
                        },
                        children: "Your video"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
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
                        children: isCameraOn ? "Turn off camera" : "Turn on camera"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "24px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "label",
                        style: {
                            display: "block",
                            marginBottom: 10
                        },
                        children: "Ask a question"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    qaStatus.approvedForCurrentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm",
                                style: {
                                    marginBottom: 10
                                },
                                children: "You are live. Speak in your language, organizer hears translated audio."
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__T__as__TrackToggle$3e$__["TrackToggle"], {
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Source.Microphone,
                                style: {
                                    width: "100%",
                                    padding: "14px 20px",
                                    fontFamily: "var(--font-body)",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    border: isMicOn ? "1px solid var(--error)" : "1px solid var(--fg)",
                                    borderRadius: 0,
                                    background: isMicOn ? "transparent" : "var(--fg)",
                                    color: isMicOn ? "var(--error)" : "var(--bg)",
                                    cursor: "pointer"
                                },
                                children: isMicOn ? "Mute mic" : "Unmute mic"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : qaStatus.requestedByCurrentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "body-sm",
                                style: {
                                    marginBottom: 10
                                },
                                children: "Request pending approval from organizer."
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-outline",
                                onClick: cancelQuestion,
                                children: "Cancel request"
                            }, void 0, false, {
                                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-outline",
                        onClick: requestQuestion,
                        children: "Request to speak"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "28px 0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$session$2f5b$id$5d2f$watch$2f$components$2f$LanguageSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sessionId: sessionId,
                    currentLanguage: currentLanguage,
                    onLanguageChange: handleLanguageChange
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 474,
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
                            display: "block",
                            marginBottom: 16
                        },
                        children: "Transcription"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: 240,
                            overflowY: "auto",
                            paddingRight: 8
                        },
                        children: transcripts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "body-sm italic",
                            children: currentLanguage === "original" ? "Select a language to see transcription" : "Waiting for translated speech…"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 6
                            },
                            children: [
                                transcripts.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-body)",
                                            fontSize: 15,
                                            lineHeight: 1.6,
                                            color: t.final ? "var(--fg)" : "var(--fg-tertiary)",
                                            transition: "color 0.3s ease"
                                        },
                                        children: t.text
                                    }, `${t.id}-${i}`, false, {
                                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: transcriptEndRef
                                }, void 0, false, {
                                    fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "rule"
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "body-sm",
                style: {
                    paddingTop: 28
                },
                children: "Each language activates a dedicated Gemini Live API session for real-time translation."
            }, void 0, false, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
        lineNumber: 317,
        columnNumber: 5
    }, this);
}
_s(AttendeeView, "C1dYIY8EzWcpXYM4gbnqIC/7Pwg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$DzwYztG5$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__f__as__useRoomContext$3e$__["useRoomContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__X__as__useRemoteParticipants$3e$__["useRemoteParticipants"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$hooks$2d$CA4A5LBF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__useTracks$3e$__["useTracks"]
    ];
});
_c = AttendeeView;
function WatchPage({ params }) {
    _s1();
    const { id: sessionId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [livekitUrl, setLivekitUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attendeeIdentity, setAttendeeIdentity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchPage.useEffect": ()=>{
            async function fetchToken() {
                try {
                    const identity = `attendee-${Math.random().toString(36).slice(2, 8)}`;
                    const res = await fetch(`/api/token?room=${sessionId}&identity=${identity}&role=attendee`);
                    const data = await res.json();
                    if (data.error) throw new Error(data.error);
                    setAttendeeIdentity(identity);
                    setToken(data.token);
                    setLivekitUrl(data.serverUrl);
                } catch (err) {
                    setError(err.message);
                }
            }
            fetchToken();
        }
    }["WatchPage.useEffect"], [
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
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 564,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm",
                        style: {
                            marginBottom: 32
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 567,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-outline",
                        onClick: ()=>window.location.reload(),
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 563,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
            lineNumber: 562,
            columnNumber: 7
        }, this);
    }
    if (!token || !livekitUrl || !attendeeIdentity) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono",
                        children: "Joining…"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 584,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 582,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
            lineNumber: 581,
            columnNumber: 7
        }, this);
    }
    if (!started) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container enter",
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "display display-lg",
                        style: {
                            marginBottom: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "Ready"
                        }, void 0, false, {
                            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 594,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "body-sm",
                        style: {
                            marginBottom: 40
                        },
                        children: "Tap below to join the broadcast and enable audio."
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 597,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn",
                        onClick: ()=>setStarted(true),
                        children: "Start listening"
                    }, void 0, false, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 600,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono",
                        style: {
                            marginTop: 32,
                            fontSize: 12
                        },
                        children: [
                            "Session ",
                            sessionId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                lineNumber: 593,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
            lineNumber: 592,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page page-top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$Q0GUQkyk$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__["LiveKitRoom"], {
            video: false,
            audio: false,
            token: token,
            serverUrl: livekitUrl,
            connectOptions: {
                autoSubscribe: false
            },
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$DqcPwJ_9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                    lineNumber: 629,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttendeeView, {
                    sessionId: sessionId,
                    attendeeIdentity: attendeeIdentity
                }, void 0, false, {
                    fileName: "[project]/src/app/session/[id]/watch/page.tsx",
                    lineNumber: 630,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/session/[id]/watch/page.tsx",
            lineNumber: 616,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/session/[id]/watch/page.tsx",
        lineNumber: 615,
        columnNumber: 5
    }, this);
}
_s1(WatchPage, "Hvmwh+KyPvuBHhhfMvYik6r9BLE=");
_c1 = WatchPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "AttendeeView");
__turbopack_context__.k.register(_c1, "WatchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0kgmy88._.js.map