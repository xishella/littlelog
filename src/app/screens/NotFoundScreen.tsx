import { useNavigate } from "react-router";

export function NotFoundScreen() {
  const navigate = useNavigate();
  return (
    <div className="ll-screen" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40 }}>
      <div style={{ position: "absolute", top: 130, left: -44, width: 174, height: 174, background: "#EFE2D1", borderRadius: "60% 40% 55% 45%/52% 60% 40% 48%" }} />
      <div style={{ position: "absolute", bottom: 160, right: -50, width: 196, height: 196, background: "#E7E9DC", borderRadius: "48% 52% 40% 60%/56% 44% 56% 44%" }} />
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 52, color: "#23303B" }}>Lost a moment</h1>
        <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.6, color: "#6B6357", maxWidth: 260 }}>This page wandered off for a nap. Let’s head back to Max’s day.</p>
        <button onClick={() => navigate("/home")} style={{ marginTop: 26, background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: "14px 28px", borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, cursor: "pointer", boxShadow: "0 10px 24px rgba(45,95,123,.26)" }}>Back home</button>
      </div>
    </div>
  );
}
