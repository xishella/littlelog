import { useNavigate } from "react-router";
import { ChevronLeft, AlertIcon, LockIcon } from "../components/icons";

const card = { background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 20, padding: "18px 20px" } as const;
const groupLabel = { margin: "0 0 8px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#A39A8C" } as const;
const bodyText = { margin: 0, fontSize: 14, lineHeight: 1.6, color: "#4A4540" } as const;

export function ChildInfoScreen() {
  const navigate = useNavigate();
  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: "#D5E8E1", padding: "52px 22px 20px", position: "relative", overflow: "hidden" }}>
        <svg viewBox="0 0 390 150" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
          <g stroke="#7FA497" strokeWidth="1.2" fill="none">
            <path d="M-10 50 Q90 24 195 50 T400 42" />
            <path d="M-10 92 Q90 66 195 92 T400 84" />
            <path d="M-10 134 Q90 108 195 134 T400 126" />
          </g>
        </svg>
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => navigate("/profile")} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,.6)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
            <ChevronLeft />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <div style={{ width: 58, height: 58, borderRadius: "50%", background: "#FAF6F0", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 16px rgba(47,79,69,.16)" }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 30, color: "#2F4F45" }}>M</span>
            </div>
            <div>
              <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 28, color: "#23303B", lineHeight: 1 }}>Max</h2>
              <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "#4F6B61", fontFamily: "var(--ui)" }}>8 months · born Oct 3, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "18px 24px 24px" }}>
        {/* allergies */}
        <div style={{ background: "#FBEAD6", border: "1px solid rgba(199,127,62,.22)", borderRadius: 20, padding: "18px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <AlertIcon color="#C77F3E" />
            <h3 style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11, letterSpacing: ".09em", textTransform: "uppercase", color: "#9C5A33" }}>Allergies &amp; sensitivities</h3>
          </div>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#5C4632" }}>Mild dairy sensitivity — avoid cow’s milk. No nuts introduced yet. No known severe allergies.</p>
        </div>

        {/* basics */}
        <div style={{ ...card, marginTop: 14 }}>
          <p style={{ ...groupLabel, margin: "0 0 12px" }}>The basics</p>
          <div style={{ display: "flex", gap: 10 }}>
            {[["Age", "8 months"], ["Born", "Oct 3, 2024"], ["Weight", "18 lb 4 oz"]].map(([k, v]) => (
              <div key={k} style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 12, color: "#A39A8C" }}>{k}</p>
                <p style={{ margin: "3px 0 0", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#2C2C2E" }}>{v}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...card, marginTop: 14 }}>
          <p style={groupLabel}>Feeding &amp; sleep</p>
          <p style={bodyText}>Bottles roughly every 3 hours (6 oz). Two naps plus a short afternoon catnap. Down for the night around 7pm.</p>
        </div>

        <div style={{ ...card, marginTop: 14 }}>
          <p style={groupLabel}>Comfort &amp; soothing</p>
          <p style={bodyText}>Loves his striped bunny and a sound machine for naps. A slow walk usually settles him if he’s fussy.</p>
        </div>

        <div style={{ ...card, marginTop: 14 }}>
          <p style={{ ...groupLabel, margin: "0 0 12px" }}>In an emergency</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
            <div>
              <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14, color: "#2C2C2E" }}>Dr. Patel · Pediatrician</p>
              <p style={{ margin: "1px 0 0", fontSize: 12.5, color: "#A39A8C" }}>Sunnyside Pediatrics</p>
            </div>
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13, color: "#2D5F7B" }}>(555) 040-1180</span>
          </div>
        </div>

        <p style={{ margin: "16px 4px 0", display: "flex", alignItems: "center", gap: 7, fontSize: 12, lineHeight: 1.5, color: "#A39A8C" }}>
          <LockIcon size={13} />Kept up to date by Max’s parents.
        </p>
      </div>
    </div>
  );
}
