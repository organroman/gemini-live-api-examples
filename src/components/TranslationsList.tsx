import { SUPPORTED_LANGUAGES } from "@/lib/languages";
import type { TranslationInfo } from "@/lib/types";

export default function TranslationsList({
  translations,
}: {
  translations: TranslationInfo[];
}) {
  return (
    <div style={{ padding: "28px 0" }}>
      <span className="label" style={{ marginBottom: 16, display: "block" }}>
        Translations · {translations.length}
      </span>

      {translations.length === 0 ? (
        <p className="body-sm italic">
          None yet — attendees can request them
        </p>
      ) : (
        translations.map((t) => {
          const lang = SUPPORTED_LANGUAGES.find((l) => l.code === t.language);
          return (
            <div key={t.language} className="lang-row">
              <div className="lang-row-left">
                <span className="lang-flag">{lang?.flag || "🌐"}</span>
                <span className="lang-name">
                  {lang?.name || t.language.toUpperCase()}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
  );
}
