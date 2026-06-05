# LittleLog

LittleLog is a warm, human-centered baby care handoff app concept. The MVP focuses on helping caregivers quickly log a child’s day and generate a parent-ready handoff summary.

## Current build

This project is a React + Vite + Tailwind app generated from the LittleLog Figma mobile UI concept and cleaned up for GitHub/Vercel deployment.

### Included screens

- Welcome
- Today dashboard
- Quick log hub
- Sleep log
- Bottle / feeding log
- Nursing log
- Diaper log
- Solids log
- Medicine log
- Mood log
- Photo add
- Handoff note
- Important update
- Handoff readiness
- Handoff summary
- Edit summary
- Profile

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

Use these settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The included `vercel.json` rewrites all routes to `index.html`, which keeps direct links like `/handoff-ready` from breaking on refresh.

## Product notes

This is currently a front-end MVP/prototype. The screens use local UI state and sample content. Next implementation priorities:

1. Add real log state/data model across screens.
2. Replace sample baby/caregiver names with profile-driven values.
3. Persist logs with local storage or a backend.
4. Generate handoff summaries from the day’s actual logged entries.
5. Add auth/profile setup if this becomes more than a portfolio prototype.
