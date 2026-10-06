import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useLanguage } from "../LanguageContext";

function PowerChart() {
  const { language } = useLanguage();

  const text =
    language === "uz"
      ? {
          title: "⚡ Elektr ishlab chiqarish dinamikasi",
          subtitle:
            "Real vaqt rejimidagi simulyatsiya qilingan ishlab chiqarish",
          power: "Ishlab chiqarish (GW)",
          time: "Vaqt",
          tooltip: "Ishlab chiqarish",
        }
      : language === "ru"
      ? {
          title: "⚡ Динамика производства электроэнергии",
          subtitle:
            "Симулируемая выработка электроэнергии в реальном времени",
          power: "Выработка (ГВт)",
          time: "Время",
          tooltip: "Выработка",
        }
      : {
          title: "⚡ Power Generation Trend",
          subtitle:
            "Real-time simulated electricity generation",
          power: "Generation (GW)",
          time: "Time",
          tooltip: "Generation",
        };

  const data = [
    { time: "08:00", power: 10.8 },
    { time: "09:00", power: 11.4 },
    { time: "10:00", power: 12.1 },
    { time: "11:00", power: 12.8 },
    { time: "12:00", power: 13.2 },
    { time: "13:00", power: 13.6 },
  ];

  return (
    <div
      style={{
        marginTop: "35px",
        background: "#1E293B",
        padding: "30px",
        borderRadius: "18px",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
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
            marginTop: "10px",
            marginBottom: 0,
            color: "#94A3B8",
            fontSize: "17px",
          }}
        >
          {text.subtitle}
        </p>
      </div>

      {/* Graph */}
      <div
        style={{
          width: "100%",
          height: "330px",
          position: "relative",
        }}
      >
        {/* Left-side label */}
        <div
          style={{
            position: "absolute",
            left: "-2px",
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "center",
            color: "#94A3B8",
            fontSize: "15px",
            fontWeight: "600",
            whiteSpace: "nowrap",
            zIndex: 2,
          }}
        >
          {text.power}
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 60,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              stroke="#94A3B8"
              tick={{
                fill: "#CBD5E1",
                fontSize: 14,
              }}
              label={{
                value: text.time,
                position: "insideBottom",
                offset: -5,
                fill: "#94A3B8",
                fontSize: 14,
              }}
            />

            <YAxis
              stroke="#94A3B8"
              tick={{
                fill: "#CBD5E1",
                fontSize: 14,
              }}
              width={50}
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#FFFFFF",
              }}
              labelStyle={{
                color: "#FFFFFF",
              }}
              formatter={(value) => [
                `${value} GW`,
                text.tooltip,
              ]}
            />

            <Line
              type="monotone"
              dataKey="power"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#3B82F6",
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PowerChart;