import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import GridStatus from "../components/GridStatus";
import PowerChart from "../components/PowerChart";
import UzbekistanMap from "../components/UzbekistanMap";
import EquipmentMonitor from "../components/EquipmentMonitor";
import AIPrediction from "../components/AIPrediction";
import AIAlerts from "../components/AIAlerts";

import { getSCADAData } from "../data/scadaData";

function Dashboard() {
  const { language } = useLanguage();

  const [scadaData, setScadaData] = useState(
    getSCADAData()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setScadaData(getSCADAData());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const text =
    language === "uz"
      ? {
          title:
            "Milliy Energetika Intellektual Platformasi",
          subtitle:
            "O‘zbekiston energetika tizimining real vaqt monitoringi",
          totalPower:
            "⚡ Umumiy elektr ishlab chiqarish",
          gridLoad:
            "🔋 Tarmoq yuklamasi",
          renewable:
            "🌱 Qayta tiklanuvchi energiya",
          alerts:
            "🚨 Faol AI ogohlantirishlari",
        }
      : language === "ru"
      ? {
          title:
            "Национальная энергетическая интеллектуальная платформа",
          subtitle:
            "Мониторинг энергетической системы Узбекистана в реальном времени",
          totalPower:
            "⚡ Общая выработка электроэнергии",
          gridLoad:
            "🔋 Нагрузка сети",
          renewable:
            "🌱 Возобновляемая энергия",
          alerts:
            "🚨 Активные AI-предупреждения",
        }
      : {
          title:
            "National Energy Intelligence Platform",
          subtitle:
            "Real-time monitoring of Uzbekistan's energy system",
          totalPower:
            "⚡ Total Power Generation",
          gridLoad:
            "🔋 Grid Load",
          renewable:
            "🌱 Renewable Energy",
          alerts:
            "🚨 Active AI Alerts",
        };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <main
        style={{
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "42px",
              fontWeight: "700",
            }}
          >
            ⚡ EnerVision AI
          </h1>

          <h2
            style={{
              marginTop: "10px",
              marginBottom: "8px",
              color: "#FFFFFF",
              fontSize: "24px",
            }}
          >
            {text.title}
          </h2>

          <p
            style={{
              color: "#94A3B8",
              margin: 0,
              fontSize: "17px",
            }}
          >
            {text.subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <StatCard
            title={text.totalPower}
            value={`${scadaData.totalPower} GW`}
            color="#22C55E"
          />

          <StatCard
            title={text.gridLoad}
            value={`${scadaData.gridLoad}%`}
            color="#3B82F6"
          />

          <StatCard
            title={text.renewable}
            value={`${scadaData.renewable}%`}
            color="#F59E0B"
          />

          <StatCard
            title={text.alerts}
            value={scadaData.aiAlerts.toString()}
            color="#EF4444"
          />
        </div>

        <GridStatus />

        <PowerChart />

        <AIPrediction />

        <AIAlerts />

        <EquipmentMonitor />

        <UzbekistanMap />
      </main>
    </div>
  );
}

export default Dashboard;