import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: "#0F172A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "40px",
          background: "#1E293B",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "12px",
  }}
>
  <span style={{ fontSize: "50px" }}>⚡</span>

  <h1
    style={{
      margin: 0,
      fontSize: "42px",
      fontWeight: "700",
      color: "white",
    }}
  >
    EnerVision AI
  </h1>
</div>

<p
  style={{
    color: "#94A3B8",
    marginBottom: "35px",
    fontSize: "18px",
  }}
>
  National Energy Intelligence Platform
</p>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "none",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;