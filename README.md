# LittleLog

LittleLog is a warm, human-centered baby care handoff app concept. It helps a caregiver log a child's day and turn those moments into a parent-ready, AI-drafted handoff summary they can review and share.

## Current build

A React + Vite app rebuilt to match the LittleLog redesign from [Claude Design](https://claude.ai/design). The UI is a faithful, hand-coded reproduction of the design prototype — no component library — using inline styles and a small set of shared primitives. See [guidelines/Guidelines.md](guidelines/Guidelines.md) for the design system.

This is a front-end prototype: screens use local UI state and sample content (baby "Max", caregiver "Anna"). Only log-card visibility/order persist (via `localStorage`).

### Screens

Splash · Home · Log hub · Log detail (per type) · Handoff readiness · Full preview · Edit note · Profile · Child info · Edit profile · Notifications · Privacy & sharing · Not found.

Log types: Sleep, Bottle, Diaper, Solid food, Mood, Note, Medicine, Photo, and Important update. The Photo type includes a mock camera viewfinder and gallery picker.

Overlays: sign-out confirm, share-confirm, native-style share sheet, a customize sheet (drag-to-reorder + show/hide log cards), and the photo add-sheet/camera/gallery views.

## Architecture

```
src/
  main.tsx                 # entry — mounts App, imports globals.css
  styles/globals.css       # design tokens, fonts, phone-frame shell, keyframes
  app/
    App.tsx                # AppStateProvider + desktop-preview/mobile-shell + router
    routes.tsx             # React Router route table
    state/AppState.tsx     # shared prototype state (note draft, readiness, profile, toggles)
    data/mock.ts           # CATS, per-type CFG, default note, profile, settings rows
    components/            # StatusBar, BottomNav, Toggle, icons, Layout, modals/
    screens/               # one file per screen
```

- **Routing** — `react-router` browser router. The Log detail screen is one parametric component at `/log/:type` driven by `CFG[type]`; each log type is reached via its own route, so types stay independent.
- **State** — a single React context ([AppState.tsx](src/app/state/AppState.tsx)) mirrors the design prototype's state machine: editing the handoff note, adding a note/important update (which appends to the draft and advances the readiness ring), and the settings toggles. Modals are global flags rendered from [Layout.tsx](src/app/components/Layout.tsx).
- **Styling** — inline styles + CSS variables in [globals.css](src/styles/globals.css). No Tailwind utility usage and no shadcn/ui.

## Local setup

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Production build

```bash
npm run build
npm run preview
```

## Deploying to Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The included `vercel.json` rewrites all routes to `index.html` so direct links like `/handoff` survive a refresh.

## Next implementation priorities

1. Introduce a real log data model so the dashboard and handoff reflect actual entries.
2. Wire photo capture to a real camera/library and persist uploaded images.
3. Replace sample baby/caregiver names with profile-driven values.
4. Persist logs (local storage or a backend).
5. Generate the handoff summary from the day's logged entries instead of the canned draft.
6. Add auth/profile setup if this grows beyond a prototype.
