import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import type { TranslationInfo } from "@/lib/types";
import { LanguagesIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function TranslationsList({
  translations,
}: {
  translations: TranslationInfo[];
}) {
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPanel) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowPanel(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPanel(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPanel]);

  return (
    <div style={{ position: "relative" }} ref={panelRef}>
      <button
        className="btn btn-outline"
        onClick={() => setShowPanel((v) => !v)}
        style={{
          padding: "2px 12px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          position: "relative",
        }}
      >
        <LanguagesIcon width={26} height={26} className="mono" />

        <span
          style={{
            fontSize: 10,
            position: "absolute",
            top: -8,
            right: -8,
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background:
              translations.length > 0 ? "var(--accent)" : "var(--warning)",
            color: "var(--bg)",
            fontWeight: 600,
          }}
        >
          {translations.length}
        </span>
      </button>
      {showPanel && (
        <div className="popover-panel enter">
          <span
            className="label"
            style={{ marginBottom: 14, display: "block" }}
          >
            <span
              className="label"
              style={{ marginBottom: 16, display: "block" }}
            >
              Translations · {translations.length}
            </span>
          </span>

          {translations.length === 0 ? (
            <p className="body-sm italic">
              None yet — attendees can request them
            </p>
          ) : (
            translations.map((t) => {
              const lang = SUPPORTED_LANGUAGES.find(
                (l) => l.code === t.language,
              );
              return (
                <div key={t.language} className="lang-row">
                  <div className="lang-row-left">
                    <span className="lang-flag">{lang?.flag || "🌐"}</span>
                    <span className="lang-name">
                      {lang?.name || t.language.toUpperCase()}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span className="lang-meta">
                      {t.subscriberCount} listener
                      {t.subscriberCount !== 1 ? "s" : ""}
                    </span>
                    <span
                      className={`status status--${t.status === "active" ? "active" : "waiting"}`}
                    >
                      <span className="status-dot pulse" />
                      {t.status}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
