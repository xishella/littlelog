# LittleLog design system

Guidelines for building LittleLog screens so they stay consistent with the Claude Design source. The tone is warm, calm, and editorial — soft cream surfaces, organic "blob" shapes, and a serif display face.

## General

- Reproduce the design prototype faithfully. Match the visual output (spacing, radii, colors, type) rather than inventing new patterns.
- Style with inline styles + the CSS variables in [src/styles/globals.css](../src/styles/globals.css). Do **not** add Tailwind utilities or a component library.
- Keep files small: one screen per file in `src/app/screens/`, shared primitives in `src/app/components/`.
- Each screen is a full-height flex column: a fixed header, a scrolling middle (`className="ll-scroll"`), and — where applicable — a fixed footer / bottom nav.
- Sample content is fixed: baby is **Max**, primary caregiver is **Anna**. Dates read like **Friday, June 5** (long) or **Jun 5** (compact).

## Color tokens

Defined as CSS variables in `globals.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--ll-bg` | `#FAF6F0` | App background |
| `--ll-card` | `#FFFCF7` | Cards, headers, footers |
| `--ll-ink` | `#23303B` | Serif headings |
| `--ll-ink-2` | `#2C2C2E` | Strong UI text |
| `--ll-muted` / `-2` / `-3` / `-4` | `#6B6357` / `#8A8276` / `#9A938A` / `#A39A8C` | Secondary text, descending emphasis |
| `--ll-blue` | `#2D5F7B` | Primary actions, active nav, accents |
| `--ll-peach` | `#FBCC9B` | Caregiver avatar / warm accent |
| `--ll-hairline` | `rgba(44,44,46,.06)` | Borders and dividers |

Per-log-type colors (card blob + detail header + selected chip accent) live in `CATS` / `CFG` in [src/app/data/mock.ts](../src/app/data/mock.ts) — never hardcode them in a screen.

## Typography

Three families, set via `--serif`, `--ui`, `--body`:

- **Cormorant** (`--serif`) — display headings and big numbers. Often italic for warm asides ("A softer way to hand off the day").
- **Outfit** (`--ui`) — UI labels, buttons, nav, stat captions. Uppercase section labels use `font-size: 10.5–11px`, `letter-spacing: .08–.1em`.
- **Nunito** (`--body`) — paragraph/body copy and form fields.

## Shape language

- **Blobs**: organic `border-radius` like `60% 40% 55% 45%/52% 60% 40% 48%` for avatars, stat tiles, and log-card thumbnails.
- **Cards**: `border-radius: 20–24px`, `background: var(--ll-card)`, `1px solid rgba(44,44,46,.05)`.
- **Pills/chips**: `border-radius: 16–18px`. Buttons and sheets use `24–30px`.
- Decorative background blobs use very low-contrast tints and sit behind content (`z-index` 0 / 1).

## Components & patterns

- **StatusBar** — the 9:41 + signal/wifi/battery row. Use at the top of screens that don't have a card header.
- **BottomNav** — exactly four tabs: Home, Log, Handoff, Profile. Active tab is `--ll-blue` with a slightly heavier icon stroke; never exceed four items.
- **Primary button** — filled `--ll-blue`, white text, `border-radius: 28–30px`, soft shadow `0 10px 24px rgba(45,95,123,.26)`. One primary action per view.
- **Secondary button** — `--ll-card` fill, `1px solid rgba(44,44,46,.14)` border, ink text.
- **Toggle** — the shared `Toggle` component (on = `--ll-blue`). Use for all settings switches.
- **Back control** — a 40px circular button with a chevron-left, in `#F1ECE4` (light headers) or `rgba(255,255,255,.55)` (tinted headers).
- **Modals/sheets** — center dialogs for confirmations; bottom sheets (rounded top corners, drag handle) for share/customize. Render them globally from `Layout` via `AppState` flags, not inline in a screen.

## Adding a new log type

1. Add a `CATS` entry (label, sample sub-line, blob `bg` + `radius`).
2. Add a `CFG[type]` entry (title, save label, header `bg`, chip `accent`, time mode, field flags, option groups).
3. Add the type to `DEFAULT_VISIBLE` if it should show on the Log hub by default.
4. No new screen file is needed — `/log/:type` renders it from `CFG`.
