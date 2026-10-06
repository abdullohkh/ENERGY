import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../LanguageContext";

function Navbar() {
  const { language } = useLanguage();

  const text =
    language === "uz"
      ? {
          dashboard: "Boshqaruv paneli",
          ai: "AI",
          map: "Xarita",
        }
      : language === "ru"
      ? {
          dashboard: "Панель управления",
          ai: "AI",
          map: "Карта",
        }
      : {
          dashboard: "Dashboard",
          ai: "AI",
          map: "Map",
        };

  return (
    <nav
      style={{
        width: "100%",
        background: "#0F172A",
        borderBottom: "1px solid #334155",
        padding: "15px 30px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <Link
        to="/dashboard"
        style={{
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "22px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        ⚡ EnerVision AI
      </Link>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "#CBD5E1",
            textDecoration: "none",
            padding: "9px 14px",
            borderRadius: "7px",
          }}
        >
          {text.dashboard}
        </Link>

        <Link
          to="/ai"
          style={{
            color: "#CBD5E1",
            textDecoration: "none",
            padding: "9px 14px",
            borderRadius: "7px",
          }}
        >
          🤖 {text.ai}
        </Link>

        <Link
          to="/map"
          style={{
            color: "#CBD5E1",
            textDecoration: "none",
            padding: "9px 14px",
            borderRadius: "7px",
          }}
        >
          🗺️ {text.map}
        </Link>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;