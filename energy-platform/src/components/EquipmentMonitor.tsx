import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

type Equipment = {
  name: string;
  location: string;
  type: string;
  temperature: number;
  voltage: number;
  health: number;
  status: "Online" | "Warning" | "Offline";
};

const initialEquipment: Equipment[] = [
  {
    name: "Tashkent Transformer T-01",
    location: "Tashkent",
    type: "Transformer",
    temperature: 68,
    voltage: 500,
    health: 94,
    status: "Online",
  },
  {
    name: "Navoi Solar Unit S-01",
    location: "Navoi",
    type: "Solar Plant",
    temperature: 42,
    voltage: 220,
    health: 97,
    status: "Online",
  },
  {
    name: "Charvak Generator G-02",
    location: "Tashkent Region",
    type: "Hydropower",
    temperature: 71,
    voltage: 220,
    health: 91,
    status: "Online",
  },
  {
    name: "Samarkand Substation S-03",
    location: "Samarkand",
    type: "Substation",
    temperature: 82,
    voltage: 500,
    health: 76,
    status: "Warning",
  },
];

function EquipmentMonitor() {
  const { language } = useLanguage();

  const [equipment, setEquipment] =
    useState<Equipment[]>(initialEquipment);

  useEffect(() => {
    const interval = setInterval(() => {
      setEquipment((current) =>
        current.map((item) => {
          const temperatureChange =
            Math.random() * 4 - 2;

          const healthChange =
            Math.random() * 2 - 1;

          const newTemperature = Math.max(
            20,
            Math.round(
              item.temperature + temperatureChange
            )
          );

          const newHealth = Math.min(
            100,
            Math.max(
              0,
              Math.round(item.health + healthChange)
            )
          );

          let newStatus: Equipment["status"] =
            item.status;

          if (newHealth < 70) {
            newStatus = "Offline";
          } else if (newHealth < 85) {
            newStatus = "Warning";
          } else {
            newStatus = "Online";
          }

          return {
            ...item,
            temperature: newTemperature,
            health: newHealth,
            status: newStatus,
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statusColor = (
    status: Equipment["status"]
  ) => {
    if (status === "Online") return "#22C55E";
    if (status === "Warning") return "#F59E0B";
    return "#EF4444";
  };

  const healthColor = (health: number) => {
    if (health >= 90) return "#22C55E";
    if (health >= 80) return "#F59E0B";
    return "#EF4444";
  };

  const text =
    language === "uz"
      ? {
          title: "⚙️ Uskunalarni monitoring qilish",
          subtitle:
            "SCADA sensorlari va AI tahlili asosida uskunalarning real vaqt rejimidagi simulyatsiya qilingan holati.",
          equipment: "Uskuna",
          location: "Joylashuv",
          type: "Turi",
          temperature: "Harorat",
          voltage: "Kuchlanish",
          health: "AI holati",
          status: "Holat",
          online: "Onlayn",
          warning: "Ogohlantirish",
          offline: "O‘chiq",
          transformer: "Transformator",
          solar: "Quyosh elektr stansiyasi",
          hydropower: "GES",
          substation: "Podstansiya",
          tashkentRegion: "Toshkent viloyati",
        }
      : language === "ru"
      ? {
          title: "⚙️ Мониторинг оборудования",
          subtitle:
            "Симулируемое состояние оборудования в реальном времени на основе данных SCADA-сенсоров и AI-анализа.",
          equipment: "Оборудование",
          location: "Расположение",
          type: "Тип",
          temperature: "Температура",
          voltage: "Напряжение",
          health: "Состояние AI",
          status: "Статус",
          online: "Онлайн",
          warning: "Предупреждение",
          offline: "Офлайн",
          transformer: "Трансформатор",
          solar: "Солнечная электростанция",
          hydropower: "Гидроэлектростанция",
          substation: "Подстанция",
          tashkentRegion: "Ташкентская область",
        }
      : {
          title: "⚙️ Equipment Monitoring",
          subtitle:
            "Real-time simulated equipment condition from SCADA sensors and AI analysis.",
          equipment: "Equipment",
          location: "Location",
          type: "Type",
          temperature: "Temperature",
          voltage: "Voltage",
          health: "AI Health",
          status: "Status",
          online: "Online",
          warning: "Warning",
          offline: "Offline",
          transformer: "Transformer",
          solar: "Solar Plant",
          hydropower: "Hydropower",
          substation: "Substation",
          tashkentRegion: "Tashkent Region",
        };

  const getStatusText = (
    status: Equipment["status"]
  ) => {
    if (status === "Online") return text.online;
    if (status === "Warning") return text.warning;
    return text.offline;
  };

  const getTypeText = (type: string) => {
    if (type === "Transformer") return text.transformer;
    if (type === "Solar Plant") return text.solar;
    if (type === "Hydropower") return text.hydropower;
    return text.substation;
  };

  const getLocationText = (location: string) => {
    if (
      location === "Tashkent Region" &&
      language !== "en"
    ) {
      return text.tashkentRegion;
    }

    return location;
  };

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1E293B",
        padding: "25px",
        borderRadius: "16px",
        boxShadow:
          "0 0 18px rgba(0,0,0,0.25)",
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
          marginBottom: "20px",
          lineHeight: "1.5",
        }}
      >
        {text.subtitle}
      </p>

      <div
        style={{
          overflowX: "auto",
          width: "100%",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "900px",
          }}
        >
          <thead>
            <tr
              style={{
                color: "#94A3B8",
                textAlign: "left",
                borderBottom:
                  "1px solid #334155",
              }}
            >
              <th style={{ padding: "14px" }}>
                {text.equipment}
              </th>

              <th style={{ padding: "14px" }}>
                {text.location}
              </th>

              <th style={{ padding: "14px" }}>
                {text.type}
              </th>

              <th style={{ padding: "14px" }}>
                {text.temperature}
              </th>

              <th style={{ padding: "14px" }}>
                {text.voltage}
              </th>

              <th style={{ padding: "14px" }}>
                {text.health}
              </th>

              <th style={{ padding: "14px" }}>
                {text.status}
              </th>
            </tr>
          </thead>

          <tbody>
            {equipment.map((item) => (
              <tr
                key={item.name}
                style={{
                  borderBottom:
                    "1px solid #334155",
                }}
              >
                <td
                  style={{
                    padding: "16px 14px",
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color: "#CBD5E1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getLocationText(item.location)}
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color: "#CBD5E1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getTypeText(item.type)}
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color:
                      item.temperature >= 80
                        ? "#F59E0B"
                        : "#FFFFFF",
                    fontWeight:
                      item.temperature >= 80
                        ? "bold"
                        : "normal",
                  }}
                >
                  {item.temperature} °C
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color: "#FFFFFF",
                  }}
                >
                  {item.voltage} kV
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color: healthColor(
                      item.health
                    ),
                    fontWeight: "bold",
                  }}
                >
                  {item.health}%
                </td>

                <td
                  style={{
                    padding: "16px 14px",
                    color: statusColor(
                      item.status
                    ),
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  ● {getStatusText(item.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EquipmentMonitor;