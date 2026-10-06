import UzbekistanMap from "../components/UzbekistanMap";

function MapPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1324",
        color: "#FFFFFF",
        padding: "40px 30px 60px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Page header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            margin: "0 0 15px 0",
            color: "#FFFFFF",
            fontSize: "46px",
            fontWeight: "700",
            lineHeight: "1.2",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          🗺️ Uzbekistan Energy Map
        </h1>

        <p
          style={{
            margin: 0,
            color: "#CBD5E1",
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          National visualization of energy infrastructure and power generation
          assets.
        </p>

        <div
          style={{
            width: "320px",
            height: "3px",
            background: "#2196F3",
            margin: "20px auto 0",
            borderRadius: "10px",
            boxShadow: "0 0 12px rgba(33, 150, 243, 0.7)",
          }}
        />
      </div>

      {/* Map */}
      <UzbekistanMap />
    </div>
  );
}

export default MapPage;