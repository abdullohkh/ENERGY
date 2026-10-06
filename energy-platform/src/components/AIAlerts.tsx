import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

type Alert = {
  title: string;
  message: string;
  severity: "Low" | "Medium" | "High";
};

function AIAlerts() {
  const { language } = useLanguage();

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      title: "High Grid Load",
      message: "Fergana region approaching 90% load.",
      severity: "Medium",
    },
    {
      title: "Equipment Health",
      message: "Transformer T-04 requires inspection.",
      severity: "Low",
    },
    {
      title: "Demand Increase",
      message: "AI predicts increased evening demand.",
      severity: "High",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((current) => {
        const copy = [...current];

        const randomIndex = Math.floor(
          Math.random() * copy.length
        );

        const selected = copy[randomIndex];

        copy[randomIndex] = {
          ...selected,
          severity:
            Math.random() > 0.7
              ? "High"
              : Math.random() > 0.4
              ? "Medium"
              : "Low",
        };

        return copy;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getColor = (severity: Alert["severity"]) => {
    if (severity === "High") return "#EF4444";
    if (severity === "Medium") return "#F59E0B";
    return "#22C55E";
  };

  const text =
    language === "uz"
      ? {
          title: "🚨 AI ogohlantirishlari va xavflarni aniqlash",
          subtitle:
            "Tarmoq va uskunalardagi ehtimoliy xavflarni avtomatik aniqlash.",
          highGridLoad: "Tarmoq yuklamasi yuqori",
          highGridMessage:
            "Farg‘ona viloyatida yuklama 90% ga yaqinlashmoqda.",
          equipmentHealth: "Uskuna holati",
          equipmentMessage:
            "T-04 transformatorini tekshirish talab etiladi.",
          demandIncrease: "Talab oshishi",
          demandMessage:
            "AI kechki vaqtda talab oshishini prognoz qilmoqda.",
          low: "Past",
          medium: "O‘rta",
          high: "Yuqori",
        }
      : language === "ru"
      ? {
          title: "🚨 AI-предупреждения и обнаружение рисков",
          subtitle:
            "Автоматическое обнаружение потенциальных рисков сети и оборудования.",
          highGridLoad: "Высокая нагрузка сети",
          highGridMessage:
            "Нагрузка в Ферганской области приближается к 90%.",
          equipmentHealth: "Состояние оборудования",
          equipmentMessage:
            "Требуется проверка трансформатора T-04.",
          demandIncrease: "Рост спроса",
          demandMessage:
            "AI прогнозирует увеличение вечернего спроса.",
          low: "Низкий",
          medium: "Средний",
          high: "Высокий",
        }
      : {
          title: "🚨 AI Alerts & Risk Detection",
          subtitle:
            "Automated detection of potential grid and equipment risks.",
          highGridLoad: "High Grid Load",
          highGridMessage:
            "Fergana region approaching 90% load.",
          equipmentHealth: "Equipment Health",
          equipmentMessage:
            "Transformer T-04 requires inspection.",
          demandIncrease: "Demand Increase",
          demandMessage:
            "AI predicts increased evening demand.",
          low: "Low",
          medium: "Medium",
          high: "High",
        };

  const translatedAlerts = alerts.map((alert) => {
    if (alert.title === "High Grid Load") {
      return {
        ...alert,
        title: text.highGridLoad,
        message: text.highGridMessage,
      };
    }

    if (alert.title === "Equipment Health") {
      return {
        ...alert,
        title: text.equipmentHealth,
        message: text.equipmentMessage,
      };
    }

    return {
      ...alert,
      title: text.demandIncrease,
      message: text.demandMessage,
    };
  });

  const getSeverityText = (
    severity: Alert["severity"]
  ) => {
    if (severity === "High") return text.high;
    if (severity === "Medium") return text.medium;
    return text.low;
  };

  return (
    <div
      style={{
        marginTop: "25px",
        background: "#1E293B",
        padding: "25px",
        borderRadius: "16px",
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
        }}
      >
        {text.subtitle}
      </p>

      <div
        style={{
          display: "grid",
          gap: "14px",
          marginTop: "20px",
        }}
      >
        {translatedAlerts.map((alert, index) => (
          <div
            key={index}
            style={{
              background: "#0F172A",
              borderLeft: `5px solid ${getColor(
                alert.severity
              )}`,
              padding: "18px",
              borderRadius: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <strong
                style={{
                  fontSize: "17px",
                  color: "#FFFFFF",
                }}
              >
                {alert.title}
              </strong>

              <span
                style={{
                  color: getColor(alert.severity),
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                {getSeverityText(alert.severity)}
              </span>
            </div>

            <p
              style={{
                color: "#94A3B8",
                marginBottom: 0,
                lineHeight: "1.5",
              }}
            >
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIAlerts;