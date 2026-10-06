import { useLanguage } from "../LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const buttonStyle = (active: boolean) => ({
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    background: active ? "#2563EB" : "transparent",
    color: "#FFFFFF",
    fontWeight: active ? "bold" : "normal",
    fontSize: "14px",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "#1E293B",
        padding: "5px",
        borderRadius: "8px",
        border: "1px solid #334155",
      }}
    >
      <button
        onClick={() => setLanguage("uz")}
        style={buttonStyle(language === "uz")}
      >
        🇺🇿 O‘zbek
      </button>

      <button
        onClick={() => setLanguage("ru")}
        style={buttonStyle(language === "ru")}
      >
        🇷🇺 Русский
      </button>

      <button
        onClick={() => setLanguage("en")}
        style={buttonStyle(language === "en")}
      >
        🇬🇧 English
      </button>
    </div>
  );
}

export default LanguageSwitcher;