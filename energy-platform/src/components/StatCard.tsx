type StatCardProps = {
  title: string;
  value: string;
  color?: string;
};

function StatCard({
  title,
  value,
  color = "#2563EB",
}: StatCardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        borderRadius: "12px",
        padding: "20px",
        minWidth: "220px",
        borderLeft: `6px solid ${color}`,
        color: "white",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "16px", opacity: 0.8 }}>
        {title}
      </h3>

      <h1 style={{ marginTop: "15px", fontSize: "32px" }}>
        {value}
      </h1>
    </div>
  );
}

export default StatCard;
