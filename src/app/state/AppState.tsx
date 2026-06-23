import { createContext, useContext, useState, type ReactNode } from "react";
import {
  CATS,
  DEFAULT_PROFILE,
  DEFAULT_VISIBLE,
  NOTIF_DEFAULTS,
  PRIVACY_DEFAULTS,
  SIGNATURE,
  defaultNote,
  type LogType,
} from "../data/mock";

type Notif = typeof NOTIF_DEFAULTS;
type Privacy = typeof PRIVACY_DEFAULTS;
type ShareTarget = "LittleLog" | "Messages" | "WhatsApp" | "Mail" | "Copy" | "PDF" | null;

// Loads a stored list of log types, appending any defaults added since it was
// saved (so existing users pick up newly shipped log cards like medicine/photo).
function loadTypes(key: string): LogType[] {
  const def = DEFAULT_VISIBLE;
  try {
    const v = localStorage.getItem(key);
    if (v) {
      const arr = JSON.parse(v) as LogType[];
      def.forEach((t) => {
        if (!arr.includes(t)) arr.push(t);
      });
      return arr;
    }
  } catch {
    /* ignore */
  }
  return def;
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

interface AppStateValue {
  // handoff note
  editTitle: string;
  editText: string;
  noteEdited: boolean;
  reviewedInEditor: boolean;
  setEditTitle: (v: string) => void;
  setEditText: (v: string) => void;
  saveEditFrom: (returnTo: "handoff" | "preview") => "handoff" | "preview";
  addSnippet: (snippet: string) => void;

  // readiness extras
  noteAdded: boolean;
  updateAdded: boolean;
  addedNote: string;
  addedUpdate: string;
  /** Appends a logged note/update to the handoff draft. Returns true if it routed to handoff. */
  saveDetail: (type: LogType, purpose: "note" | "update" | null, fieldText: string) => boolean;

  // log card visibility / order
  visibleCats: LogType[];
  order: LogType[];
  toggleCat: (t: LogType) => void;
  reorder: (dragType: LogType, overType: LogType) => void;

  // per-detail option selections, keyed by `${type}:${groupLabel}`
  sel: Record<string, string>;
  toggleOpt: (type: LogType, group: string, option: string) => void;

  // profile
  cgName: string;
  cgRole: string;
  cgPhone: string;
  cgEmail: string;
  cgAbout: string;
  setProfile: (patch: Partial<Pick<AppStateValue, "cgName" | "cgRole" | "cgPhone" | "cgEmail" | "cgAbout">>) => void;

  // settings toggles
  notif: Notif;
  privacy: Privacy;
  toggleNotif: (k: keyof Notif) => void;
  togglePrivacy: (k: keyof Privacy) => void;

  // overlays
  showSignOut: boolean;
  setShowSignOut: (v: boolean) => void;
  showConfirm: boolean;
  setShowConfirm: (v: boolean) => void;
  showShare: boolean;
  setShowShare: (v: boolean) => void;
  shareSent: ShareTarget;
  setShareSent: (v: ShareTarget) => void;
  showCustomize: boolean;
  setShowCustomize: (v: boolean) => void;
}

const Ctx = createContext<AppStateValue | null>(null);

export function useApp(): AppStateValue {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp must be used within AppStateProvider");
  return v;
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [editTitle, setEditTitle] = useState("A little note about Max’s day");
  const [editText, setEditText] = useState(defaultNote());
  const [noteEdited, setNoteEdited] = useState(false);
  const [reviewedInEditor, setReviewedInEditor] = useState(false);

  const [noteAdded, setNoteAdded] = useState(false);
  const [updateAdded, setUpdateAdded] = useState(false);
  const [addedNote, setAddedNote] = useState("");
  const [addedUpdate, setAddedUpdate] = useState("");

  const [visibleCats, setVisibleCats] = useState<LogType[]>(() => loadTypes("littlelog-visible"));
  const [order, setOrder] = useState<LogType[]>(() => loadTypes("littlelog-order"));
  const [sel, setSel] = useState<Record<string, string>>({});

  const [profile, setProfileState] = useState(DEFAULT_PROFILE);
  const [notif, setNotif] = useState<Notif>(NOTIF_DEFAULTS);
  const [privacy, setPrivacy] = useState<Privacy>(PRIVACY_DEFAULTS);

  const [showSignOut, setShowSignOut] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [shareSent, setShareSent] = useState<ShareTarget>(null);
  const [showCustomize, setShowCustomize] = useState(false);

  const stripSig = (t: string) => t.replace(/\s*— Logged with care by Anna\s*$/, "");

  const value: AppStateValue = {
    editTitle,
    editText,
    noteEdited,
    reviewedInEditor,
    setEditTitle,
    setEditText: (v) => setEditText(v),
    saveEditFrom: (returnTo) => {
      setNoteEdited(true);
      setReviewedInEditor(true);
      return returnTo;
    },
    addSnippet: (snippet) =>
      setEditText((cur) => stripSig(cur) + "\n\n" + snippet + "\n\n" + SIGNATURE),

    noteAdded,
    updateAdded,
    addedNote,
    addedUpdate,
    saveDetail: (_type, purpose, fieldText) => {
      if (purpose !== "note" && purpose !== "update") return false;
      const txt = (fieldText || "").trim();
      const addition =
        purpose === "update"
          ? "One important update: " + (txt || "please refill his diaper supply — size 3.")
          : txt || "A quick note: Max had a lovely afternoon of play and lots of giggles.";
      setEditText((cur) => stripSig(cur) + "\n\n" + addition + "\n\n" + SIGNATURE);
      setNoteEdited(true);
      if (purpose === "update") {
        setUpdateAdded(true);
        setAddedUpdate(addition);
      } else {
        setNoteAdded(true);
        setAddedNote(addition);
      }
      return true;
    },

    visibleCats,
    order,
    toggleCat: (t) =>
      setVisibleCats((cur) => {
        const next = cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t];
        save("littlelog-visible", next);
        return next;
      }),
    reorder: (dragType, overType) => {
      if (!dragType || dragType === overType) return;
      setOrder((cur0) => {
        const cur = cur0.length ? cur0.slice() : CATS.map((c) => c.type);
        const fi = cur.indexOf(dragType);
        const ti = cur.indexOf(overType);
        if (fi === -1 || ti === -1) return cur0;
        cur.splice(fi, 1);
        cur.splice(ti, 0, dragType);
        save("littlelog-order", cur);
        return cur;
      });
    },

    sel,
    toggleOpt: (type, group, option) =>
      setSel((cur) => {
        const key = `${type}:${group}`;
        const next = { ...cur };
        if (next[key] === option) delete next[key];
        else next[key] = option;
        return next;
      }),

    cgName: profile.cgName,
    cgRole: profile.cgRole,
    cgPhone: profile.cgPhone,
    cgEmail: profile.cgEmail,
    cgAbout: profile.cgAbout,
    setProfile: (patch) => setProfileState((cur) => ({ ...cur, ...patch })),

    notif,
    privacy,
    toggleNotif: (k) => setNotif((cur) => ({ ...cur, [k]: !cur[k] })),
    togglePrivacy: (k) => setPrivacy((cur) => ({ ...cur, [k]: !cur[k] })),

    showSignOut,
    setShowSignOut,
    showConfirm,
    setShowConfirm,
    showShare,
    setShowShare,
    shareSent,
    setShareSent,
    showCustomize,
    setShowCustomize,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Returns cats in the user's saved order. */
export function orderedCats(order: LogType[]) {
  const byType = Object.fromEntries(CATS.map((c) => [c.type, c]));
  const out = [];
  const seen = new Set<string>();
  for (const t of order) {
    if (byType[t] && !seen.has(t)) {
      out.push(byType[t]);
      seen.add(t);
    }
  }
  for (const c of CATS) if (!seen.has(c.type)) out.push(c);
  return out;
}
