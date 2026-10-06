import { useLanguage } from "../LanguageContext";

function GridStatus() {
  const { language } = useLanguage();

  const text =
    language === "uz"
      ? {
          title: "⚡ Milliy tarmoq holati",
          subtitle:
            "Real vaqt rejimidagi simulyatsiya qilingan hududiy tarmoq sharoitlari",
          gridLoad: "Tarmoq yuklamasi",
          voltage: "Kuchlanish",
          online: "Onlayn",
          warning: "Ogohlantirish",
          offline: "O‘chiq",
        }
      : language === "ru"
      ? {
          title: "⚡ Состояние национальной сети",
          subtitle:
            "Симулируемые региональные условия сети в реальном времени",
          gridLoad: "Нагрузка сети",
          voltage: "Напряжение",
          online: "Онлайн",
          warning: "Предупреждение",
          offline: "Офлайн",
        }
      : {
          title: "⚡ National Grid Status",
          subtitle:
            "Real-time simulated regional grid conditions",
          gridLoad: "Grid Load",
          voltage: "Voltage",
          online: "Online",
          warning: "Warning",
          offline: "Offline",
        };

  const regions = [
    {
      name: "Tashkent",
      status: "online",
      load: 74,
      voltage: 500,
    },
    {
      name: "Samarkand",
      status: "warning",
      load: 94,
      voltage: 500,
    },
    {
      name: "Navoi",
      status: "online",
      load: 58,
      voltage: 220,
    },
    {
      name: "Bukhara",
      status: "online",
      load: 73,
      voltage: 220,
    },
  ];

  const getStatusText = (status: string) => {
    if (status === "warning") return text.warning;
    if (status === "offline") return text.offline;
    return text.online;
  };

  const getStatusColor = (status: string) => {
    if (status === "warning") return "#F59E0B";
    if (status === "offline") return "#EF4444";
    return "#22C55E";
  };

  return (
    <div
      style={{
        marginTop: "35px",
        background: "#1E293B",
        padding: "32px",
        borderRadius: "18px",
        boxSizing: "border-box",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#FFFFFF",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          {text.title}
        </h2>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          {text.subtitle}
        </p>
      </div>

      {/* Regional cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {regions.map((region) => {
          const statusColor = getStatusColor(region.status);

          return (
            <div
              key={region.name}
              style={{
                background: "#0F172A",
                border: `1px solid ${statusColor}`,
                borderRadius: "14px",
                padding: "25px",
                minWidth: 0,
                boxSizing: "border-box",
              }}
            >
              {/* Region name */}
              <h3
                style={{
                  margin: 0,
                  color: "#FFFFFF",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                {region.name}
              </h3>

              {/* Status */}
              <div
                style={{
                  marginTop: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: statusColor,
                  fontWeight: "700",
                  fontSize: "14px",
                  background: "#111827",
                  padding: "6px 10px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  boxSizing: "border-box",
                }}
              >
                <span>●</span>
                <span>{getStatusText(region.status)}</span>
              </div>

              {/* Statistics */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "32px",
                }}
              >
                <div
                  style={{
                    color: "#94A3B8",
                    fontSize: "17px",
                    marginBottom: "8px",
                  }}
                >
                  {text.gridLoad}
                </div>

                <div
                  style={{
                    color:
                      region.load >= 90
                        ? "#F59E0B"
                        : "#3B82F6",
                    fontSize: "36px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  {region.load}%
                </div>

                <div
                  style={{
                    color: "#94A3B8",
                    fontSize: "17px",
                  }}
                >
                  {text.voltage}:{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "600",
                    }}
                  >
                    {region.voltage} kV
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GridStatus;