import AIPrediction from "../components/AIPrediction";
import AIAlerts from "../components/AIAlerts";

function AIPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "white",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "36px" }}>
        🤖 AI Energy Intelligence
      </h1>

      <p
        style={{
          color: "#94A3B8",
          fontSize: "17px",
        }}
      >
        Artificial intelligence for energy forecasting,
        risk analysis and predictive maintenance.
      </p>

      <AIPrediction />

      <AIAlerts />

      <div
        style={{
          marginTop: "30px",
          background: "#1E293B",
          padding: "25px",
          borderRadius: "16px",
        }}
      >
        <h2>🧠 AI Capabilities</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#0F172A",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>📈 Demand Forecasting</h3>
            <p style={{ color: "#94A3B8" }}>
              Predict future electricity demand using
              grid data.
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>⚙️ Predictive Maintenance</h3>
            <p style={{ color: "#94A3B8" }}>
              Identify equipment that may require
              maintenance before failure.
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>⚠️ Risk Detection</h3>
            <p style={{ color: "#94A3B8" }}>
              Detect abnormal grid conditions and
              operational risks.
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>🌱 Renewable Optimization</h3>
            <p style={{ color: "#94A3B8" }}>
              Optimize solar, wind and hydropower
              resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIPage;