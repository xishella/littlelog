import { useNavigate } from "react-router";
import { StatusBar } from "../components/StatusBar";

export function SplashScreen() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/home")}
      style={{
        position: "absolute",
        inset: 0,
        background: "#FAF6F0",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <StatusBar style={{ height: 52, padding: "0 28px 7px", flex: "none" }} />

      <div style={{ position: "absolute", top: 130, left: -44, width: 174, height: 174, background: "#EFE2D1", borderRadius: "60% 40% 55% 45%/52% 60% 40% 48%" }} />
      <div style={{ position: "absolute", bottom: 160, right: -50, width: 196, height: 196, background: "#E7E9DC", borderRadius: "48% 52% 40% 60%/56% 44% 56% 44%" }} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <img
          src="/ll-icon.png"
          alt="LittleLog"
          style={{ width: 150, height: 150, objectFit: "contain", animation: "llfloat 6s ease-in-out infinite", filter: "drop-shadow(0 16px 30px rgba(251,158,90,.26))" }}
        />
        <h1 style={{ margin: "38px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 60, color: "#23303B", lineHeight: 1, letterSpacing: ".5px" }}>LittleLog</h1>
        <p style={{ margin: "18px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 22, color: "#9A8C7C" }}>A softer way to hand off the day</p>
      </div>

      <div style={{ flex: "none", paddingBottom: 64, display: "flex", flexDirection: "column", alignItems: "center", gap: 18, position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "var(--ui)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#BCB0A0" }}>Tap to begin</span>
        <div style={{ display: "flex", gap: 7 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2D5F7B" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D8CFC2" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D8CFC2" }} />
        </div>
      </div>
    </div>
  );
}
