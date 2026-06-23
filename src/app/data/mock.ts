// Static mock data for the LittleLog prototype, mirroring the Claude Design spec.

export type LogType =
  | "sleep"
  | "bottle"
  | "diaper"
  | "solid"
  | "mood"
  | "note"
  | "medicine"
  | "photo"
  | "update";

export interface Cat {
  type: LogType;
  label: string;
  sub: string;
  bg: string;
  radius: string;
}

export interface DetailGroup {
  label: string;
  options: string[];
}

export interface DetailConfig {
  title: string;
  save: string;
  bg: string;
  accent: string;
  times: "range" | "single" | "none";
  amountOz?: boolean;
  foodText?: boolean;
  medName?: boolean;
  dose?: boolean;
  isNote?: boolean;
  isUpdate?: boolean;
  isPhoto?: boolean;
  notesLabel: string;
  groups?: DetailGroup[];
}

// Activity cards shown on the Log screen + Customize sheet.
export const CATS: Cat[] = [
  { type: "sleep", label: "Sleep", sub: "Last nap ended 2:15 PM", bg: "#D8E0EC", radius: "65% 35% 58% 42%/48% 62% 38% 52%" },
  { type: "bottle", label: "Bottle", sub: "4 feeds today · last 2:30 PM", bg: "#D5E8E1", radius: "42% 58% 60% 40%/55% 42% 58% 45%" },
  { type: "diaper", label: "Diaper", sub: "7 changes · last 11:00 AM", bg: "#F3E6BC", radius: "58% 42% 45% 55%/62% 50% 50% 38%" },
  { type: "solid", label: "Solid food", sub: "2 meals · last 12:30 PM", bg: "#F8D9BC", radius: "50% 50% 38% 62%/58% 60% 40% 42%" },
  { type: "mood", label: "Mood", sub: "Happy · logged 1:50 PM", bg: "#F0D8DF", radius: "60% 40% 52% 48%/45% 58% 42% 55%" },
  { type: "note", label: "Note", sub: "3 added today", bg: "#DCE6CF", radius: "48% 52% 62% 38%/56% 44% 56% 44%" },
  { type: "medicine", label: "Medicine", sub: "None logged today", bg: "#E3DCEE", radius: "55% 45% 50% 50%/60% 50% 50% 40%" },
  { type: "photo", label: "Photo", sub: "4 photos today", bg: "#ECDCD4", radius: "40% 60% 55% 45%/52% 48% 58% 42%" },
];

// Per-type configuration for the Log Detail entry screen.
export const CFG: Record<LogType, DetailConfig> = {
  sleep: {
    title: "Sleep for Max", save: "Save sleep", bg: "#D8E0EC", accent: "#3E4A63", times: "range", notesLabel: "Notes (optional)",
    groups: [
      { label: "Sleep type", options: ["Nap", "Overnight"] },
      { label: "Quality (optional)", options: ["Peaceful", "Restless", "Short", "Hard to settle"] },
    ],
  },
  bottle: {
    title: "Bottle for Max", save: "Save to today’s log", bg: "#D5E8E1", accent: "#2F4F45", times: "single", amountOz: true, notesLabel: "Anything to pass along?",
    groups: [{ label: "Type", options: ["Breast milk", "Formula", "Mixed"] }],
  },
  diaper: {
    title: "Diaper for Max", save: "Save diaper", bg: "#F3E6BC", accent: "#6B5A2A", times: "single", notesLabel: "Anything unusual?",
    groups: [
      { label: "Diaper type", options: ["Pee", "Poo", "Mixed", "Dry"] },
      { label: "Amount", options: ["Little", "Medium", "A lot"] },
    ],
  },
  solid: {
    title: "Solid food for Max", save: "Save solid food", bg: "#F8D9BC", accent: "#6E4327", times: "single", foodText: true, notesLabel: "Notes (optional)",
    groups: [
      { label: "Amount", options: ["Taste", "Some", "Most", "All"] },
      { label: "Reaction", options: ["Loved it", "Liked it", "Unsure", "Refused"] },
    ],
  },
  mood: {
    title: "Mood for Max", save: "Save mood", bg: "#F0D8DF", accent: "#6B3B49", times: "single", notesLabel: "Notes (optional)",
    groups: [
      { label: "Mood", options: ["Happy", "Calm", "Sleepy", "Fussy", "Upset", "Playful"] },
      { label: "Context (optional)", options: ["After nap", "After feed", "During play", "Before nap", "Other"] },
    ],
  },
  note: {
    title: "Note for home", save: "Save handoff note", bg: "#DCE6CF", accent: "#44502F", times: "none", isNote: true, notesLabel: "",
    groups: [{ label: "", options: ["Mood", "Supplies", "Nap", "Food", "Something to watch"] }],
  },
  medicine: {
    title: "Medicine for Max", save: "Save medicine", bg: "#E3DCEE", accent: "#5A4A86", times: "single", medName: true, dose: true, notesLabel: "Notes (optional)",
    groups: [{ label: "Common medicines", options: ["Gripe Water", "Mylicon", "Infant Tylenol", "Vitamin D", "Other"] }],
  },
  photo: {
    title: "Photos for Max", save: "Save to today’s log", bg: "#ECDCD4", accent: "#7A5A4A", times: "none", isPhoto: true, notesLabel: "",
  },
  update: {
    title: "Important update", save: "Add to handoff", bg: "#F7E1CF", accent: "#9C5A33", times: "none", isUpdate: true, notesLabel: "",
    groups: [{ label: "What kind of update?", options: ["Medication", "Allergy", "Health", "Feeding change", "Safety", "Other"] }],
  },
};

export const SIGNATURE = "— Logged with care by Anna";

export function defaultNote(): string {
  return (
    "Hi Mom & Dad,\n\n" +
    "Max had such a calm, playful day. He went down for three naps — the longest right after lunch — and took four bottles like a champ.\n\n" +
    "At lunch we tried sweet potato puree for the first time and he loved it. He was happiest in the afternoon, and adored stacking his soft blocks today.\n\n" +
    "A tiny bit fussy before lunch, but a bottle settled him right away. All in all, a lovely one. ♥\n\n" +
    SIGNATURE
  );
}

export const DEFAULT_PROFILE = {
  cgName: "Anna",
  cgRole: "Primary caregiver",
  cgPhone: "(555) 123-4567",
  cgEmail: "anna@email.com",
  cgAbout: "CPR & first-aid certified. Loves reading and afternoon walks with Max.",
};

export const NOTIF_DEFAULTS = {
  handoffReminder: true,
  parentViewed: true,
  teamActivity: false,
  importantUpdates: true,
  dailyWrap: true,
};

export const PRIVACY_DEFAULTS = {
  showLastActive: true,
  shareProfileNote: true,
  parentsOnly: true,
};

export const NOTIF_ROWS: [keyof typeof NOTIF_DEFAULTS, string, string][] = [
  ["handoffReminder", "Handoff reminders", "A nudge to wrap up Max’s day."],
  ["parentViewed", "When a parent views", "Know when a parent opens the handoff."],
  ["teamActivity", "Care-team activity", "When someone else logs a moment."],
  ["importantUpdates", "Important updates", "Urgent notes from the family."],
  ["dailyWrap", "Daily wrap-up", "An evening summary of the day."],
];

export const PRIVACY_ROWS: [keyof typeof PRIVACY_DEFAULTS, string, string][] = [
  ["showLastActive", "Show my last-active", "Let the family see when you were active."],
  ["shareProfileNote", "Share my “About me”", "Show your profile note to the family."],
  ["parentsOnly", "Parents-only handoffs", "Only Max’s parents can open shared handoffs."],
];

export const DEFAULT_VISIBLE: LogType[] = ["sleep", "bottle", "diaper", "solid", "mood", "note", "medicine", "photo"];

// Mock photo library used by the Photo log flow.
export const PHOTO_POOL: string[] = [
  "/photo-mock-1.png",
  "/photo-mock-2.png",
  "/photo-mock-3.png",
  "/photo-mock-4.png",
  "/photo-mock-5.png",
  "/photo-mock-6.png",
];
