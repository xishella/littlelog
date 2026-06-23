import { useLocation, useNavigate } from "react-router";
import { Sparkle } from "../icons";
import { useApp } from "../../state/AppState";

export function ConfirmShareModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showConfirm, setShowConfirm, setShowShare, setShareSent } = useApp();
  if (!showConfirm) return null;

  const close = () => setShowConfirm(false);
  const reviewIt = () => {
    setShowConfirm(false);
    const ret = location.pathname === "/preview" ? "preview" : "handoff";
    navigate(`/edit-note?return=${ret}`);
  };
  const shareAsIs = () => {
    setShowConfirm(false);
    setShareSent(null);
    setShowShare(true);
  };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: 30 }}>
      <div onClick={close} style={{ position: "absolute", inset: 0, background: "rgba(35,30,25,.44)" }} />
      <div style={{ position: "relative", background: "#FAF6F0", borderRadius: 28, padding: "28px 24px 22px", boxShadow: "0 20px 50px rgba(0,0,0,.28)", maxWidth: 330, textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#FBEAD6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
          <Sparkle size={26} color="#C77F3E" />
        </div>
        <h2 style={{ margin: "16px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, lineHeight: 1.1, color: "#23303B" }}>Share without a final read?</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "#6B6357" }}>This handoff was drafted by AI from today’s logs. Want to look it over before it goes to Mom &amp; Dad?</p>
        <button onClick={reviewIt} style={{ marginTop: 22, width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>No, let me review it</button>
        <button onClick={shareAsIs} style={{ marginTop: 11, width: "100%", background: "none", border: "none", color: "#9C7B57", padding: 8, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer" }}>Yes, share as-is</button>
      </div>
    </div>
  );
}
