import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

function AIPrediction() {
  const { language } = useLanguage();

  const [currentDemand, setCurrentDemand] = useState(7.4);
  const [predictedDemand, setPredictedDemand] = useState(7.8);
  const [confidence, setConfidence] = useState(94);

  useEffect(() => {
    const interval = setInterval(() => {
      const demand = 7 + Math.random() * 1.2;
      const prediction =
        demand + 0.2 + Math.random() * 0.5;
      const aiConfidence =
        91 + Math.floor(Math.random() * 7);

      setCurrentDemand(
        Number(demand.toFixed(2))
      );

      setPredictedDemand(
        Number(prediction.toFixed(2))
      );

      setConfidence(aiConfidence);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const risk =
    predictedDemand > 8.2
      ? "High"
      : predictedDemand > 7.8
      ? "Medium"
      : "Low";

  const riskColor =
    risk === "High"
      ? "#EF4444"
      : risk === "Medium"
      ? "#F59E0B"
      : "#22C55E";

  const text =
    language === "uz"
      ? {
          title: "🤖 AI elektr quvvati prognozi",
          subtitle:
            "Real vaqt SCADA ma’lumotlari asosida simulyatsiya qilingan AI prognozi.",
          currentDemand: "Joriy talab",
          predictedDemand: "Prognoz qilingan talab",
          confidence: "AI ishonchliligi",
          gridRisk: "Tarmoq xavfi",
          high: "Yuqori",
          medium: "O‘rta",
          low: "Past",
        }
      : language === "ru"
      ? {
          title: "🤖 Прогноз энергопотребления с помощью AI",
          subtitle:
            "Симулируемый прогноз AI на основе данных SCADA в реальном времени.",
          currentDemand: "Текущий спрос",
          predictedDemand: "Прогнозируемый спрос",
          confidence: "Точность AI",
          gridRisk: "Риск сети",
          high: "Высокий",
          medium: "Средний",
          low: "Низкий",
        }
      : {
          title: "🤖 AI Power Prediction",
          subtitle:
            "Simulated AI forecast based on real-time SCADA data.",
          currentDemand: "Current Demand",
          predictedDemand: "Predicted Demand",
          confidence: "AI Confidence",
          gridRisk: "Grid Risk",
          high: "High",
          medium: "Medium",
          low: "Low",
        };

  const translatedRisk =
    risk === "High"
      ? text.high
      : risk === "Medium"
      ? text.medium
      : text.low;

  return (
    <div
      style={{
        background: "#1E293B",
        padding: "25px",
        borderRadius: "16px",
        marginTop: "25px",
        color: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "8px",
          color: "#FFFFFF",
        }}
      >
        {text.title}
      </h2>

      <p
        style={{
          color: "#94A3B8",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {text.subtitle}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "18px",
          marginTop: "25px",
        }}
      >
        {/* Current Demand */}
        <div
          style={{
            background: "#0F172A",
            padding: "20px",
            borderRadius: "12px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#94A3B8",
              margin: 0,
            }}
          >
            {text.currentDemand}
          </p>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#FFFFFF",
            }}
          >
            {currentDemand} GW
          </h2>
        </div>

        {/* Predicted Demand */}
        <div
          style={{
            background: "#0F172A",
            padding: "20px",
            borderRadius: "12px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#94A3B8",
              margin: 0,
            }}
          >
            {text.predictedDemand}
          </p>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#38BDF8",
            }}
          >
            {predictedDemand} GW
          </h2>
        </div>

        {/* AI Confidence */}
        <div
          style={{
            background: "#0F172A",
            padding: "20px",
            borderRadius: "12px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#94A3B8",
              margin: 0,
            }}
          >
            {text.confidence}
          </p>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#22C55E",
            }}
          >
            {confidence}%
          </h2>
        </div>

        {/* Grid Risk */}
        <div
          style={{
            background: "#0F172A",
            padding: "20px",
            borderRadius: "12px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#94A3B8",
              margin: 0,
            }}
          >
            {text.gridRisk}
          </p>

          <h2
            style={{
              margin: "10px 0 0",
              color: riskColor,
            }}
          >
            ● {translatedRisk}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AIPrediction;