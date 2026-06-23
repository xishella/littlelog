import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { StatusBar } from "../components/StatusBar";
import { ChevronRight, PencilIcon, LockIcon } from "../components/icons";
import { useApp } from "../state/AppState";

const card = { background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 24 } as const;

export function ProfileScreen() {
  const navigate = useNavigate();
  const { cgName, cgRole, setShowSignOut } = useApp();
  const cgInitial = (cgName || "A").trim().charAt(0).toUpperCase() || "A";

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", padding: "52px 28px 0" }}>
        <StatusBar />
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "8px 24px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 6 }}>
          <div style={{ width: 104, height: 104, borderRadius: "60% 40% 55% 45%/52% 60% 40% 48%", background: "#FBCC9B", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 28px rgba(251,158,90,.24)" }}>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 52, color: "#2C2C2E" }}>{cgInitial}</span>
          </div>
          <h1 style={{ margin: "18px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 42, color: "#23303B", lineHeight: 1 }}>{cgName}</h1>
          <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.5, color: "#6B6357", maxWidth: 280 }}>
            {cgRole}, <span style={{ color: "#2D5F7B", fontWeight: 600 }}>caring for Max</span> — 8 months old.
          </p>
          <button onClick={() => navigate("/edit-profile")} style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 7, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.12)", borderRadius: 24, padding: "10px 18px", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13.5, color: "#2D5F7B" }}>
            <PencilIcon size={14} color="#2D5F7B" />Edit my profile
          </button>
        </div>

        {/* linked pair → child info */}
        <button onClick={() => navigate("/child-info")} style={{ ...card, width: "100%", marginTop: 24, padding: "18px 20px", display: "flex", alignItems: "center", gap: 16, cursor: "pointer", textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#FBCC9B", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 19, color: "#2C2C2E", border: "2.5px solid #FFFCF7", zIndex: 2 }}>{cgInitial}</div>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#D5E8E1", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 19, color: "#2F4F45", border: "2.5px solid #FFFCF7", marginLeft: -14, zIndex: 1 }}>M</div>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#2C2C2E" }}>{cgName} &amp; Max</p>
            <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>Linked since January 2025 · tap to see Max’s details</p>
          </div>
          <ChevronRight />
        </button>

        {/* care team */}
        <div style={{ ...card, marginTop: 14, padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div>
              <h3 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 23, color: "#23303B" }}>Max’s care team</h3>
              <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>3 people sharing the day</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#DCEDE3", padding: "6px 11px", borderRadius: 16 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3E9C72" }} />
              <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11.5, color: "#2F6A57" }}>1 on now</span>
            </div>
          </div>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
            {/* you */}
            <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 0", borderBottom: "1px solid rgba(44,44,46,.05)" }}>
              <div style={{ position: "relative", flex: "none" }}>
                <div style={{ width: 46, height: 46, borderRadius: "58% 42% 50% 50%/52% 50% 50% 48%", background: "#FBCC9B", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 17, color: "#2C2C2E" }}>{cgInitial}</div>
                <span style={{ position: "absolute", bottom: 0, right: 0, width: 13, height: 13, borderRadius: "50%", background: "#3E9C72", border: "2.5px solid #FFFCF7" }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, color: "#2C2C2E" }}>{cgName}</p>
                  <span style={{ fontSize: 10.5, fontWeight: 600, fontFamily: "var(--ui)", color: "#9C7B57", background: "#F5E9DB", padding: "2px 8px", borderRadius: 12 }}>YOU</span>
                </div>
                <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>{cgRole} · logging now</p>
              </div>
              <button onClick={() => navigate("/edit-profile")} style={{ flex: "none", background: "none", border: "none", cursor: "pointer", padding: 6, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12.5, color: "#2D5F7B" }}>Edit</button>
            </div>
            {/* Jenna */}
            <TeamRow initial="J" name="Jenna" sub="Mom · active 2h ago" blobBg="#D8E0EC" blobColor="#3E4A63" radius="42% 58% 55% 45%/50% 48% 52% 50%" tag="Parent" tagColor="#7E8AA0" tagBg="#EDF1F6" />
            {/* David */}
            <TeamRow initial="D" name="David" sub="Dad · active yesterday" blobBg="#F0D8DF" blobColor="#6B3B49" radius="55% 45% 48% 52%/58% 52% 48% 42%" tag="Parent" tagColor="#B07E92" tagBg="#F7EBF0" />
          </div>
          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 9, background: "#F4F0EA", borderRadius: 14, padding: "11px 14px" }}>
            <LockIcon />
            <span style={{ fontSize: 12, lineHeight: 1.4, color: "#8A8276" }}>Max’s care team is managed by his parents. Reach out to them to add or remove people.</span>
          </div>
        </div>

        {/* settings */}
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
          <SettingRow label="Notifications" onClick={() => navigate("/notifications")} />
          <SettingRow label="Privacy & sharing" onClick={() => navigate("/privacy")} />
          <button onClick={() => setShowSignOut(true)} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", padding: "13px 2px", textAlign: "left", cursor: "pointer" }}>
            <span style={{ fontFamily: "var(--body)", fontSize: 14.5, color: "#E08A6E", flex: 1, fontWeight: 600 }}>Sign out</span>
          </button>
        </div>
      </div>

      <BottomNav active="profile" />
    </div>
  );
}

function TeamRow({ initial, name, sub, blobBg, blobColor, radius, tag, tagColor, tagBg }: { initial: string; name: string; sub: string; blobBg: string; blobColor: string; radius: string; tag: string; tagColor: string; tagBg: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "11px 0", borderBottom: "1px solid rgba(44,44,46,.05)" }}>
      <div style={{ width: 46, height: 46, flex: "none", borderRadius: radius, background: blobBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 17, color: blobColor }}>{initial}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, color: "#2C2C2E" }}>{name}</p>
        <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>{sub}</p>
      </div>
      <span style={{ fontFamily: "var(--ui)", fontSize: 11.5, fontWeight: 500, color: tagColor, background: tagBg, padding: "4px 10px", borderRadius: 13 }}>{tag}</span>
    </div>
  );
}

function SettingRow({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", padding: "13px 2px", textAlign: "left", cursor: "pointer", borderBottom: "1px solid var(--ll-hairline)" }}>
      <span style={{ fontFamily: "var(--body)", fontSize: 14.5, color: "#3D3730", flex: 1 }}>{label}</span>
      <ChevronRight size={16} color="#C9C0B4" />
    </button>
  );
}
