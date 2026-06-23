import { useNavigate } from "react-router";
import { ChevronLeft, LockIcon } from "../components/icons";
import { Toggle } from "../components/Toggle";
import { useApp } from "../state/AppState";
import { PRIVACY_ROWS } from "../data/mock";

export function PrivacyScreen() {
  const navigate = useNavigate();
  const { privacy, togglePrivacy } = useApp();
  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: "#FFFCF7", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 22px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("/profile")} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 25, color: "#23303B" }}>Privacy &amp; sharing</h2>
      </div>
      <div className="ll-scroll" style={{ flex: 1, padding: "18px 24px 24px" }}>
        <p style={{ margin: "0 0 8px", fontSize: 13.5, color: "#8A8276" }}>Control what the family sees about you.</p>
        <div style={{ background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 22, padding: "6px 20px" }}>
          {PRIVACY_ROWS.map(([key, label, sub]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 0", borderBottom: "1px solid rgba(44,44,46,.05)" }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#2C2C2E" }}>{label}</p>
                <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>{sub}</p>
              </div>
              <Toggle on={privacy[key]} onToggle={() => togglePrivacy(key)} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 9, background: "#F4F0EA", borderRadius: 14, padding: "12px 15px" }}>
          <LockIcon />
          <span style={{ fontSize: 12, lineHeight: 1.4, color: "#8A8276" }}>Max’s logs and details are owned by his parents. You can view and add, but only they control access.</span>
        </div>
      </div>
    </div>
  );
}
