import { useNavigate } from "react-router";
import { SignOutIcon } from "../icons";
import { useApp } from "../../state/AppState";

export function SignOutModal() {
  const navigate = useNavigate();
  const { showSignOut, setShowSignOut } = useApp();
  if (!showSignOut) return null;

  const cancel = () => setShowSignOut(false);
  const confirm = () => {
    setShowSignOut(false);
    navigate("/");
  };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 80, display: "flex", alignItems: "center", justifyContent: "center", padding: 30 }}>
      <div onClick={cancel} style={{ position: "absolute", inset: 0, background: "rgba(35,30,25,.44)" }} />
      <div style={{ position: "relative", background: "#FAF6F0", borderRadius: 28, padding: "28px 24px 22px", boxShadow: "0 20px 50px rgba(0,0,0,.28)", maxWidth: 320, textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F6E3DC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
          <SignOutIcon />
        </div>
        <h2 style={{ margin: "16px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, lineHeight: 1.1, color: "#23303B" }}>Sign out of LittleLog?</h2>
        <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.55, color: "#6B6357" }}>You can sign back in any time. Max’s logged moments stay saved.</p>
        <button onClick={confirm} style={{ marginTop: 22, width: "100%", background: "#E08A6E", border: "none", color: "#FFF8F4", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Sign out</button>
        <button onClick={cancel} style={{ marginTop: 11, width: "100%", background: "none", border: "none", color: "#9A938A", padding: 8, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer" }}>Cancel</button>
      </div>
    </div>
  );
}
