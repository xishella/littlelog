import { HandoffIcon, CheckIcon, CloseIcon, CopyIcon, PdfIcon } from "../icons";
import { useApp } from "../../state/AppState";

type Target = "LittleLog" | "Messages" | "WhatsApp" | "Mail" | "Copy" | "PDF";

const SENT_TITLE: Record<Target, string> = {
  LittleLog: "Sent in LittleLog",
  Messages: "Shared via Messages",
  WhatsApp: "Shared via WhatsApp",
  Mail: "Shared via Mail",
  Copy: "Copied to clipboard",
  PDF: "Saved as PDF",
};
const SENT_MSG: Record<Target, string> = {
  LittleLog: "Mom & Dad will see today’s summary in their LittleLog app.",
  Messages: "Max’s handoff is on its way to Mom & Dad.",
  WhatsApp: "Max’s handoff is on its way to Mom & Dad.",
  Mail: "Max’s handoff is on its way to Mom & Dad.",
  Copy: "The note text is ready to paste wherever you like.",
  PDF: "The handoff has been downloaded to your phone.",
};

const appBtn = { background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 7, flex: "none", width: 62 };
const appLabel = { fontSize: 11.5, color: "#3D3730", fontFamily: "var(--ui)" } as const;
const appIcon = { width: 60, height: 60, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center" } as const;

export function ShareSheet() {
  const { showShare, shareSent, editTitle, setShowShare, setShareSent } = useApp();
  if (!showShare) return null;

  const close = () => {
    setShowShare(false);
    setShareSent(null);
  };
  const send = (t: Target) => setShareSent(t);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 70 }}>
      <div onClick={close} style={{ position: "absolute", inset: 0, background: "rgba(35,30,25,.4)" }} />
      <div style={{ position: "absolute", left: 8, right: 8, bottom: 8, background: "#F3F1F0", borderRadius: 26, padding: "10px 0 0", boxShadow: "0 -10px 44px rgba(0,0,0,.22)", overflow: "hidden" }}>
        {/* preview header */}
        <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "14px 20px 16px", borderBottom: "1px solid rgba(0,0,0,.07)" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "#2D5F7B", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            <HandoffIcon size={22} color="#fff" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, color: "#1C1C1E", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{editTitle}</p>
            <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#8A8276" }}>Max’s daily handoff · Friday, Jun 5</p>
          </div>
          <button onClick={close} style={{ width: 30, height: 30, borderRadius: "50%", border: "none", background: "rgba(0,0,0,.07)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
            <CloseIcon />
          </button>
        </div>

        {shareSent ? (
          <div style={{ padding: "34px 24px 30px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ width: 62, height: 62, borderRadius: "50%", background: "#DCEDE3", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckIcon size={30} color="#2F6A57" strokeWidth={2.4} />
            </div>
            <p style={{ margin: "16px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 24, color: "#23303B" }}>{SENT_TITLE[shareSent]}</p>
            <p style={{ margin: "6px 0 0", fontSize: 13.5, color: "#8A8276" }}>{SENT_MSG[shareSent]}</p>
            <button onClick={close} style={{ marginTop: 22, width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 15, borderRadius: 26, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Done</button>
          </div>
        ) : (
          <div>
            {/* recommended */}
            <div style={{ padding: "14px 16px 4px" }}>
              <button onClick={() => send("LittleLog")} style={{ width: "100%", display: "flex", alignItems: "center", gap: 13, background: "#FFFFFF", border: "1.5px solid #2D5F7B", borderRadius: 18, padding: "13px 16px", cursor: "pointer", textAlign: "left" }}>
                <img src="/ll-icon.png" alt="" style={{ width: 42, height: 42, objectFit: "contain", flex: "none" }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 700, fontSize: 15, color: "#23303B" }}>Send in LittleLog</p>
                  <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#6B8A9C" }}>Mom &amp; Dad get it in their parent app — instant.</p>
                </div>
                <span style={{ flex: "none", background: "#E0EBF0", color: "#2D5F7B", fontFamily: "var(--ui)", fontWeight: 700, fontSize: 10.5, letterSpacing: ".05em", padding: "5px 10px", borderRadius: 13 }}>BEST</span>
              </button>
            </div>

            {/* app row */}
            <div style={{ display: "flex", gap: 18, overflowX: "auto", padding: "18px 20px 16px" }}>
              <button onClick={() => send("Messages")} style={appBtn}>
                <span style={{ ...appIcon, background: "linear-gradient(180deg,#5BF675,#1FAD3B)" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.1-.2 1-.8 2.4-1.6 3.4 1.6-.2 3.6-.9 4.9-1.8.9.2 1.9.3 3.1.3 5.5 0 10-3.6 10-8S17.5 3 12 3z" /></svg>
                </span>
                <span style={appLabel}>Messages</span>
              </button>
              <button onClick={() => send("WhatsApp")} style={appBtn}>
                <span style={{ ...appIcon, background: "#25D366" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M12 2A10 10 0 0 0 3.5 17.2L2 22l5-1.4A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 0 16 8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.3A8 8 0 0 1 12 4zm4.4 9.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.1-.2.1-.4 0a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.3.1-.4l.3-.4.2-.4v-.3l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.7.7-.8 1.6-.4 2.7a8.3 8.3 0 0 0 3.9 4.2c1.6.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1z" /></svg>
                </span>
                <span style={appLabel}>WhatsApp</span>
              </button>
              <button onClick={() => send("Mail")} style={appBtn}>
                <span style={{ ...appIcon, background: "linear-gradient(180deg,#3FA8F4,#1E78D6)" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M4 7l8 6 8-6" /></svg>
                </span>
                <span style={appLabel}>Mail</span>
              </button>
              <button onClick={() => send("Copy")} style={appBtn}>
                <span style={{ ...appIcon, background: "#E7E2DA" }}>
                  <CopyIcon size={28} color="#6B6357" />
                </span>
                <span style={appLabel}>Copy</span>
              </button>
            </div>

            {/* action list */}
            <div style={{ margin: "0 16px 16px", background: "#FFFFFF", borderRadius: 16, overflow: "hidden" }}>
              <button onClick={() => send("Copy")} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", padding: "15px 18px", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
                <span style={{ fontFamily: "var(--body)", fontSize: 15, color: "#1C1C1E" }}>Copy note text</span>
                <CopyIcon />
              </button>
              <button onClick={() => send("PDF")} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", padding: "15px 18px" }}>
                <span style={{ fontFamily: "var(--body)", fontSize: 15, color: "#1C1C1E" }}>Save as PDF</span>
                <PdfIcon />
              </button>
            </div>
            <button onClick={close} style={{ margin: "0 16px 16px", width: "calc(100% - 32px)", background: "#FFFFFF", border: "none", borderRadius: 16, padding: 15, fontFamily: "var(--ui)", fontWeight: 700, fontSize: 15, color: "#2D5F7B", cursor: "pointer" }}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}
