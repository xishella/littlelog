import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { ChevronLeft, ChevronRight, Sparkle, CheckIcon, PlusIcon, PencilIcon, ShareIcon } from "../components/icons";
import { useApp } from "../state/AppState";
import { SIGNATURE } from "../data/mock";

const sectionLabel = { fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#A39A8C" } as const;

function Chip({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E0EBF0", padding: "7px 12px", borderRadius: 16, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12.5, color: "#2D5F7B" }}>
      <CheckIcon color="#2D5F7B" />
      {label}
    </span>
  );
}

function AddChip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "none", border: "1.5px dashed #C9A87E", padding: "7px 12px", borderRadius: 16, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12.5, color: "#9C7B57", cursor: "pointer" }}>
      <PlusIcon size={11} color="#9C7B57" strokeWidth={2.6} />
      {label}
    </button>
  );
}

export function HandoffScreen() {
  const navigate = useNavigate();
  const { noteAdded, updateAdded, editTitle, editText, addedNote, addedUpdate, reviewedInEditor, setShowShare, setShowConfirm, setShareSent } = useApp();

  const doneCount = 4 + (noteAdded ? 1 : 0) + (updateAdded ? 1 : 0);
  const readyPctNum = Math.round((doneCount / 6) * 100);
  const ringOffset = Math.round(226 * (1 - readyPctNum / 100));
  const trackedLabel = `${doneCount} of 6 tracked${doneCount < 6 ? (doneCount === 5 ? ". One quick thing left." : ". Two quick things left.") : ". All set!"}`;
  const allReady = noteAdded && updateAdded;

  let previewBody = editText.replace(/\s*— Logged with care by Anna\s*$/, "").replace(/\s+/g, " ").trim();
  if (previewBody.length > 188) previewBody = previewBody.slice(0, 188).trim() + "…";

  const addNote = () => navigate("/log/note?from=handoff&purpose=note");
  const addUpdate = () => navigate("/log/update?from=handoff&purpose=update");
  const requestShare = () => {
    if (reviewedInEditor) {
      setShareSent(null);
      setShowShare(true);
    } else {
      setShowConfirm(true);
    }
  };

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: "#FFFCF7", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 24px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("/home")} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <div>
          <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 26, color: "#23303B", lineHeight: 1.05 }}>Wrap up Max’s day</h2>
          <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "#9A938A" }}>Review, add anything important, then share.</p>
        </div>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "18px 24px 20px" }}>
        {/* readiness */}
        <div style={{ background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 24, padding: "22px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ position: "relative", width: 84, height: 84, flex: "none" }}>
              <svg width="84" height="84" viewBox="0 0 84 84">
                <circle cx="42" cy="42" r="36" fill="none" stroke="#EFE9E0" strokeWidth="9" />
                <circle cx="42" cy="42" r="36" fill="none" stroke="#2D5F7B" strokeWidth="9" strokeLinecap="round" strokeDasharray="226" strokeDashoffset={ringOffset} transform="rotate(-90 42 42)" />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 23, color: "#23303B", lineHeight: 1 }}>{readyPctNum}%</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 16, color: "#23303B" }}>Handoff readiness</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, lineHeight: 1.45, color: "#8A8276" }}>{trackedLabel}</p>
            </div>
          </div>
          <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Chip label="Sleep" />
            <Chip label="Feeding" />
            <Chip label="Diapers" />
            <Chip label="Mood" />
            {noteAdded ? <Chip label="Notes" /> : <AddChip label="Notes" onClick={addNote} />}
            {updateAdded ? <Chip label="Update" /> : <AddChip label="Update" onClick={addUpdate} />}
          </div>
        </div>

        {/* before you share */}
        {!allReady && (
          <div>
            <p style={{ margin: "22px 0 10px", ...sectionLabel }}>Before you share</p>
            <div style={{ background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 22, padding: "6px 20px" }}>
              {!noteAdded && (
                <button onClick={addNote} style={{ width: "100%", display: "flex", alignItems: "center", gap: 13, padding: "13px 0", border: "none", background: "none", cursor: "pointer", borderBottom: updateAdded ? "none" : "1px solid rgba(44,44,46,.05)", textAlign: "left" }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <PencilIcon size={16} color="#9C7B57" />
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#3D3730" }}>Add a note for home</span>
                    <span style={{ display: "block", marginTop: 1, fontSize: 12, color: "#A39A8C" }}>Anything sweet or worth passing along?</span>
                  </span>
                  <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12.5, color: "#2D5F7B" }}>Add</span>
                </button>
              )}
              {!updateAdded && (
                <button onClick={addUpdate} style={{ width: "100%", display: "flex", alignItems: "center", gap: 13, padding: "13px 0", border: "none", background: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C7B57" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#3D3730" }}>Important update</span>
                    <span style={{ display: "block", marginTop: 1, fontSize: 12, color: "#A39A8C" }}>Meds, allergies, or anything urgent.</span>
                  </span>
                  <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12.5, color: "#2D5F7B" }}>Add</span>
                </button>
              )}
            </div>
          </div>
        )}
        {allReady && (
          <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 11, background: "#DCEDE3", borderRadius: 18, padding: "14px 18px" }}>
            <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#2F6A57", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
              <CheckIcon size={14} color="#fff" />
            </span>
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14, color: "#2F6A57" }}>All set — Max’s day is ready to share.</span>
          </div>
        )}

        {/* preview */}
        <p style={{ margin: "22px 0 10px", ...sectionLabel }}>Preview</p>
        <div onClick={() => navigate("/preview")} style={{ background: "#F4ECE1", borderRadius: 22, padding: 22, cursor: "pointer", position: "relative" }}>
          <ChevronRight size={18} color="#B79A6E" style={{ position: "absolute", top: 18, right: 18 }} />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#FBEAD6", padding: "3px 9px", borderRadius: 13 }}>
            <Sparkle size={11} color="#C77F3E" />
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, color: "#9C5A33" }}>AI draft · for Mom &amp; Dad</span>
          </span>
          <h3 style={{ margin: "12px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 25, lineHeight: 1.1, color: "#23303B" }}>{editTitle}</h3>
          <p style={{ margin: "11px 0 0", fontSize: 14, lineHeight: 1.65, color: "#4A443B" }}>{previewBody}</p>
          {addedNote && <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#44502F", background: "#E4ECDC", borderRadius: 10, padding: "9px 12px" }}>{addedNote}</p>}
          {addedUpdate && <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#6E4327", background: "#F3E0CE", borderRadius: 10, padding: "9px 12px" }}>{addedUpdate}</p>}
          <p style={{ margin: "12px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17, color: "#6B6357" }}>{SIGNATURE}</p>
        </div>
      </div>

      <div style={{ flex: "none", padding: "14px 24px", background: "#FFFCF7", borderTop: "1px solid var(--ll-hairline)", display: "flex", gap: 11 }}>
        <button onClick={() => navigate("/edit-note?return=handoff")} style={{ flex: "none", width: 120, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.14)", color: "#3D3730", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7 }}>
          <PencilIcon color="currentColor" />Edit
        </button>
        <button onClick={requestShare} style={{ flex: 1, background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 7, boxShadow: "0 8px 20px rgba(45,95,123,.26)" }}>
          <ShareIcon color="currentColor" />Share with parent
        </button>
      </div>

      <BottomNav active="handoff" />
    </div>
  );
}
