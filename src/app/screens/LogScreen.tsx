import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { StatusBar } from "../components/StatusBar";
import { PlusIcon } from "../components/icons";
import { useApp, orderedCats } from "../state/AppState";

export function LogScreen() {
  const navigate = useNavigate();
  const { visibleCats, order, setShowCustomize } = useApp();
  const rows = orderedCats(order).filter((c) => visibleCats.includes(c.type));

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", padding: "52px 28px 0" }}>
        <StatusBar />
        <h1 style={{ margin: "18px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 34, color: "#23303B", lineHeight: 1.05 }}>Log a moment</h1>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: "#8A8276" }}>Pick up where the day left off.</p>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "18px 22px 24px", display: "flex", flexDirection: "column", gap: 11 }}>
        {rows.map((row) => (
          <div
            key={row.type}
            onClick={() => navigate(`/log/${row.type}`)}
            style={{ display: "flex", alignItems: "center", gap: 15, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 22, padding: "14px 18px", boxShadow: "0 2px 8px rgba(33,49,63,.04)", cursor: "pointer" }}
          >
            <div style={{ width: 50, height: 50, flex: "none", background: row.bg, borderRadius: row.radius }} />
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 16, color: "#2C2C2E" }}>{row.label}</p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#A39A8C" }}>{row.sub}</p>
            </div>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#EDE7DD", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <PlusIcon color="#7A7268" />
            </div>
          </div>
        ))}
        <button
          onClick={() => setShowCustomize(true)}
          style={{ marginTop: 6, alignSelf: "center", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 500, fontSize: 13.5, color: "#9C7B57", borderBottom: "1px solid #D8C3AC", padding: "0 0 2px" }}
        >
          Customize what shows here
        </button>
      </div>

      <BottomNav active="log" />
    </div>
  );
}
