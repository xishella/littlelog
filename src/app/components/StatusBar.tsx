// iOS-style status bar (9:41 + signal/wifi/battery), matching the prototype.

export function StatusBar({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        fontFamily: "var(--ui)",
        fontSize: 15,
        fontWeight: 600,
        color: "#2C2C2E",
        ...style,
      }}
    >
      <span>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#2C2C2E">
          <rect y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 13" fill="none" stroke="#2C2C2E" strokeWidth="1.6" strokeLinecap="round">
          <path d="M1.5 4.8a11 11 0 0 1 14 0" />
          <path d="M4 7.6a7 7 0 0 1 9 0" />
          <path d="M6.6 10.3a3 3 0 0 1 3.8 0" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div style={{ width: 23, height: 12, border: "1.4px solid #2C2C2E", borderRadius: 3.5, padding: 1.6 }}>
            <div style={{ width: "72%", height: "100%", background: "#2C2C2E", borderRadius: 1.5 }} />
          </div>
          <div style={{ width: 1.6, height: 4, background: "#2C2C2E", borderRadius: 1 }} />
        </div>
      </div>
    </div>
  );
}
