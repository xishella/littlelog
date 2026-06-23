import { useNavigate, useSearchParams } from "react-router";
import { ChevronLeft, PlusIcon } from "../components/icons";
import { useApp } from "../state/AppState";

const SNIPPETS = [
  { label: "Supplies reminder", text: "Reminder: he's running low on diapers — size 3." },
  { label: "Evening reminder", text: "Reminder for tonight: bath, then bottle around 7." },
  { label: "Something to watch", text: "Something to watch: a little congested this afternoon." },
];

export function EditNoteScreen() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const returnTo = params.get("return") === "preview" ? "preview" : "handoff";
  const { editTitle, editText, setEditTitle, setEditText, addSnippet, saveEditFrom } = useApp();

  const onSave = () => {
    const dest = saveEditFrom(returnTo);
    navigate(dest === "preview" ? "/preview" : "/handoff");
  };

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: "#FFFCF7", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 22px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={() => navigate("/handoff")} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 25, color: "#23303B", lineHeight: 1 }}>Edit the note</h2>
          <p style={{ margin: "3px 0 0", fontSize: 12, color: "#9A938A" }}>Your words go to Mom &amp; Dad — tweak anything.</p>
        </div>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "18px 22px" }}>
        <p style={{ margin: "0 0 8px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" }}>Title</p>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          style={{ width: "100%", background: "#FFFCF7", border: "1px solid rgba(44,44,46,.07)", borderRadius: 16, padding: "14px 16px", outline: "none", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 21, color: "#23303B" }}
        />
        <p style={{ margin: "18px 0 8px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" }}>The note</p>
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ width: "100%", minHeight: 320, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.07)", borderRadius: 18, padding: 16, outline: "none", resize: "none", fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.7, color: "#3D3730" }}
        />
        <p style={{ margin: "18px 0 8px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" }}>Quick add</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {SNIPPETS.map((s) => (
            <button key={s.label} onClick={() => addSnippet(s.text)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 14px", borderRadius: 18, border: "1.5px dashed #D3C8B8", background: "none", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13, color: "#9C7B57" }}>
              <PlusIcon size={13} color="currentColor" />{s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: "none", padding: "14px 22px", background: "#FFFCF7", borderTop: "1px solid var(--ll-hairline)" }}>
        <button onClick={onSave} style={{ width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 16, borderRadius: 30, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, cursor: "pointer", boxShadow: "0 10px 24px rgba(45,95,123,.26)" }}>Save changes</button>
      </div>
    </div>
  );
}
