// iOS-style toggle switch used in settings and the customize sheet.

export function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: "relative",
        flex: "none",
        width: 46,
        height: 27,
        borderRadius: 14,
        border: "none",
        cursor: "pointer",
        transition: "background .2s",
        background: on ? "#2D5F7B" : "#D8D0C4",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: on ? 21 : 3,
          width: 21,
          height: 21,
          borderRadius: "50%",
          background: "#FFFCF7",
          boxShadow: "0 1px 3px rgba(0,0,0,.2)",
          transition: "left .2s",
        }}
      />
    </button>
  );
}
