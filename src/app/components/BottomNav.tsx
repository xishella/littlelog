import { useNavigate } from "react-router";
import { HomeIcon, LogIcon, HandoffIcon, ProfileIcon } from "./icons";

type Tab = "home" | "log" | "handoff" | "profile";

const ACTIVE = "#2D5F7B";
const IDLE = "#A39A8C";

const items: { tab: Tab; to: string; label: string; Icon: typeof HomeIcon }[] = [
  { tab: "home", to: "/home", label: "Home", Icon: HomeIcon },
  { tab: "log", to: "/log", label: "Log", Icon: LogIcon },
  { tab: "handoff", to: "/handoff", label: "Handoff", Icon: HandoffIcon },
  { tab: "profile", to: "/profile", label: "Profile", Icon: ProfileIcon },
];

export function BottomNav({ active }: { active: Tab }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        flex: "none",
        background: "#FFFCF7",
        borderTop: "1px solid var(--ll-hairline)",
        display: "flex",
        justifyContent: "space-around",
        padding: "11px 18px 26px",
      }}
    >
      {items.map(({ tab, to, label, Icon }) => {
        const on = tab === active;
        return (
          <button
            key={tab}
            onClick={() => navigate(to)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "4px 8px",
              color: on ? ACTIVE : IDLE,
            }}
          >
            <Icon color="currentColor" strokeWidth={on ? 1.9 : 1.7} />
            <span style={{ fontFamily: "var(--ui)", fontSize: 11, fontWeight: on ? 600 : 500 }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
