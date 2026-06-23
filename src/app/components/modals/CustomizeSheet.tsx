import { useRef } from "react";
import { Toggle } from "../Toggle";
import { DragDots } from "../icons";
import { useApp, orderedCats } from "../../state/AppState";
import type { LogType } from "../../data/mock";

export function CustomizeSheet() {
  const { showCustomize, setShowCustomize, visibleCats, order, toggleCat, reorder } = useApp();
  const dragType = useRef<LogType | null>(null);
  const overType = useRef<LogType | null>(null);
  if (!showCustomize) return null;

  const rows = orderedCats(order);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 60 }}>
      <div onClick={() => setShowCustomize(false)} style={{ position: "absolute", inset: 0, background: "rgba(35,30,25,.34)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "#FAF6F0", borderRadius: "30px 30px 0 0", padding: "8px 22px 30px", boxShadow: "0 -10px 44px rgba(0,0,0,.16)", maxHeight: "84%", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 12px" }}>
          <div style={{ width: 42, height: 5, borderRadius: 3, background: "#D8D0C4" }} />
        </div>
        <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 27, color: "#23303B" }}>Customize log cards</h2>
        <p style={{ margin: "5px 0 0", fontSize: 13.5, color: "#8A8276" }}>Drag to reorder, toggle to show or hide.</p>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
          {rows.map((c) => (
            <div
              key={c.type}
              draggable
              onDragStart={(e) => {
                dragType.current = c.type;
                overType.current = c.type;
                e.dataTransfer.effectAllowed = "move";
                try {
                  e.dataTransfer.setData("text/plain", c.type);
                } catch {
                  /* ignore */
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                if (overType.current === c.type) return;
                overType.current = c.type;
                if (dragType.current) reorder(dragType.current, c.type);
              }}
              onDrop={(e) => e.preventDefault()}
              onDragEnd={() => {
                dragType.current = null;
                overType.current = null;
              }}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--ll-hairline)", cursor: "grab" }}
            >
              <div style={{ width: 40, height: 40, flex: "none", background: c.bg, borderRadius: c.radius }} />
              <span style={{ flex: 1, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, color: "#2C2C2E" }}>{c.label}</span>
              <Toggle on={visibleCats.includes(c.type)} onToggle={() => toggleCat(c.type)} />
              <span style={{ flex: "none", display: "flex", alignItems: "center", cursor: "grab" }} aria-hidden>
                <DragDots />
              </span>
            </div>
          ))}
        </div>
        <button onClick={() => setShowCustomize(false)} style={{ marginTop: 20, width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 15, borderRadius: 28, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Done</button>
      </div>
    </div>
  );
}
