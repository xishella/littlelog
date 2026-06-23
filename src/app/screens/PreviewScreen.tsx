import { useNavigate } from "react-router";
import { ChevronLeft, Sparkle, PencilIcon, ShareIcon } from "../components/icons";
import { useApp } from "../state/AppState";

const para = { margin: "0 0 14px", fontSize: 15, lineHeight: 1.72, color: "#4A443B", whiteSpace: "pre-wrap" as const };
const hl = (bg: string, color: string) => ({ background: bg, padding: "1px 6px", borderRadius: 8, color });

export function PreviewScreen() {
  const navigate = useNavigate();
  const { noteEdited, editTitle, editText, reviewedInEditor, setShowShare, setShowConfirm, setShareSent } = useApp();

  const editedParas = editText.split(/\n\n+/).map((t) => t.trim()).filter(Boolean);

  const requestShare = () => {
    if (reviewedInEditor) {
      setShareSent(null);
      setShowShare(true);
    } else {
      setShowConfirm(true);
    }
  };

  return (
    <div className="ll-screen" style={{ background: "#F4ECE1" }}>
      <div style={{ flex: "none", background: "#FBF4EA", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 22px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("/handoff")} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(44,44,46,.06)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24, color: "#23303B", lineHeight: 1 }}>Handoff preview</h2>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: 4, background: "#FBEAD6", padding: "4px 10px", borderRadius: 14 }}>
          <Sparkle size={11} color="#C77F3E" />
          <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, color: "#9C5A33" }}>AI draft</span>
        </span>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "22px 30px" }}>
        <p style={{ margin: 0, fontFamily: "var(--ui)", fontSize: 11.5, letterSpacing: ".13em", textTransform: "uppercase", color: "#B79A6E" }}>Friday, June 5 · for Mom &amp; Dad</p>
        <h1 style={{ margin: "10px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 34, lineHeight: 1.1, color: "#23303B" }}>{editTitle}</h1>

        {!noteEdited ? (
          <div style={{ marginTop: 18 }}>
            <p style={{ ...para, margin: 0 }}>Hi Mom &amp; Dad,</p>
            <p style={{ ...para, marginBottom: 0, marginTop: 14 }}>
              Max had such a <span style={hl("#E4ECDC", "#44502F")}>calm, playful</span> day. He went down for{" "}
              <span style={hl("#DCE3EE", "#3A4256")}>three naps</span> — the longest right after lunch — and took{" "}
              <span style={hl("#D9EAE7", "#2F5050")}>four bottles</span> like a champ.
            </p>
            <p style={{ ...para, marginBottom: 0, marginTop: 14 }}>
              At lunch we tried <span style={hl("#F3E0CE", "#6E4327")}>sweet potato puree</span> for the first time and he loved it. He was happiest in the afternoon, and adored stacking his soft blocks today.
            </p>
            <p style={{ ...para, marginBottom: 0, marginTop: 14 }}>A tiny bit fussy before lunch, but a bottle settled him right away. All in all, a lovely one. ♥</p>
            <p style={{ margin: "18px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 19, color: "#6B6357" }}>— Logged with care by Anna</p>
          </div>
        ) : (
          <div style={{ marginTop: 18 }}>
            {editedParas.map((text, i) => (
              <p key={i} style={para}>{text}</p>
            ))}
          </div>
        )}
      </div>

      <div style={{ flex: "none", padding: "14px 24px 26px", background: "#FBF4EA", borderTop: "1px solid var(--ll-hairline)", display: "flex", gap: 11 }}>
        <button onClick={() => navigate("/edit-note?return=preview")} style={{ flex: "none", width: 120, background: "#FBF4EA", border: "1px solid rgba(44,44,46,.14)", color: "#3D3730", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <PencilIcon color="currentColor" />Edit
        </button>
        <button onClick={requestShare} style={{ flex: 1, background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: "0 8px 20px rgba(45,95,123,.26)" }}>
          <ShareIcon color="currentColor" />Share with parent
        </button>
      </div>
    </div>
  );
}
