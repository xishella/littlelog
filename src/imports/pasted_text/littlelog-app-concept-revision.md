Revise the LittleLog mobile app concept so it feels much warmer, more branded, and less like a generic baby tracker.

The current version feels too plain, too clinical, and too much like a standard pastel baby activity tracker. The new direction should feel like a cozy caregiver handoff journal with quick logging, expressive visual details, and a warm parent summary moment.

Use this example data:
- Baby name: Max
- Caregiver name: Anna

Brand requirements:
- Keep the LittleLog brand palette from the brand board.
- Use warm cream/off-white as the main background.
- Use the deep blue/teal brand color for hero moments, primary actions, selected states, and emotional emphasis.
- Do not use generic baby-tracker pastel colors.
- Use softer, more editorial colors inspired by the mood diary reference: warm cream, muted sage, soft mint, butter yellow, peach, powder blue, dusty lavender, soft rose, and deep ink blue.
- Colors should feel warm, human, expressive, and slightly whimsical, not nursery-template pastel.

Typography:
- Use Nunito for body copy and small supporting text.
- Use TT Hoves for UI labels, buttons, navigation, card titles, and subheadings.
- Use The Seasons more visibly for emotional headlines and branded moments.
- The Seasons should appear on key headings like:
  “Ready to start Max’s day?”
  “Today with Max”
  “A little note for home”
  “Today’s handoff”
- Do not make the app all sans-serif. The serif typography is important for warmth and brand personality.

Visual style:
- Make the interface feel hand-drawn, soft, and human.
- Activity cards should feel like expressive “log stickers” or organic pebbles, not plain rounded rectangles.
- Add subtle doodles, scribbles, small abstract marks, soft blobs, tiny stars, loops, leaves, moons, bottle shapes, diaper marks, and playful linework.
- Use irregular organic background shapes inside cards, inspired by the mood diary reference.
- Icons should not be generic outline icons. Replace them with warmer custom-style doodle icons or soft illustrated symbols.
- Keep the UI clean and buildable, but add enough personality that it feels branded.
- Avoid harsh shadows, sterile UI, generic medical icons, and default app-template styling.

Product positioning:
LittleLog is not just a baby tracker. It is a caregiver-to-parent handoff app. The core flow is:
Start caregiver session → log little moments during the day → add context/notes → wrap up session → AI creates a warm parent-ready summary.

Important UX correction:
The first screen should NOT ask “How was Max’s day?” because the session has not started yet.
The opening screen should invite the caregiver to begin the day/session.

Revise/create these 6 mobile screens:

1. Start session screen
- Deep brand color background with subtle organic blobs, doodles, and tiny illustrative marks.
- Copy:
  “Good morning, Anna”
  “Ready to start Max’s day?”
  “Track the little things as they happen. LittleLog will help turn them into a warm handoff later.”
- CTA: “Start session”
- Use The Seasons for “Ready to start Max’s day?”
- This should feel warm, calm, and inviting.

2. Today dashboard
- Header: Max, date, Anna avatar/profile.
- Main title using The Seasons: “Today with Max”
- Add a soft status line: “Little moments logged as they happen.”
- Show activity summary cards, but make them more expressive and less generic:
  Sleep, Feeding, Diapers, Solids, Mood, Notes.
- Each card should use a unique organic shape/color/doodle treatment.
- Replace generic icons with custom doodle-style icons.
- Add a “Handoff note” card or “Anything parent should know?” prompt near the top or middle.
- Recent activity should feel like a caregiver timeline, not just a data list.
- Example recent activity copy:
  “2:30 PM — Bottle, 6 oz formula”
  “1:45 PM — Nap, 1 hr 15 min”
  “12:30 PM — Tried sweet potato puree”
  “11:00 AM — Diaper change”
- Make the timeline feel soft and narrative.

3. Quick log screen
- Header using The Seasons or TT Hoves + The Seasons mix:
  “What are we logging?”
- Supporting text:
  “Quick notes for Max’s day.”
- Cards:
  Sleep, Bottle, Nursing, Diaper, Solid food, Medicine, Mood, Note, Photo.
- Activity cards should look like colorful organic stickers or tiles.
- Add scribbles, tiny doodles, and visual accents inside each tile.
- Use custom playful doodle icons instead of generic line icons.
- Make each card feel distinct but still cohesive.
- Keep large touch targets.

4. Log detail screen
- Create example: “Log a bottle”
- Use warm editorial form design.
- Header: “Bottle for Max”
- Fields: Amount, Time, Type, Notes.
- Type options: Breast milk, Formula, Mixed.
- Add a small note prompt:
  “Anything Anna should mention later?”
  or
  “Anything parent should know?”
- CTA: “Save to today’s log”
- Make the form feel calm and soft, not like a medical intake form.

5. End session / wrap-up screen
- This should not be a giant empty progress chart.
- The handoff readiness visual should be smaller and more useful.
- Header using The Seasons:
  “Ready to wrap up Max’s day?”
- Supporting text:
  “Review the day, add anything important, then create a handoff for home.”
- Show a compact “Handoff readiness” card with:
  “67% ready”
  Small bubble visualization
  Missing items or suggestions
- Add checklist cards:
  Sleep logged
  Feeding logged
  Diapers logged
  Mood added
  Notes added
  Important update added
- Add a prominent note prompt:
  “Anything parent should know before you go?”
- Primary CTA: “Create handoff summary”
- Secondary CTA: “Add one more note”
- The readiness visual should support the screen, not dominate it.

6. AI handoff summary screen
- This is the main product differentiator. Make it feel special and polished.
- Header using The Seasons:
  “Today’s handoff”
- Supporting text:
  “Generated from Max’s logs. Review before sharing.”
- Large warm summary card with editable sections:
  Quick summary
  Sleep
  Feeding
  Diapers
  Mood
  Notes for home
- Sample summary copy:
  “Max had a calm, playful day. He took three naps, had four feeds, tried sweet potato puree, and seemed happiest after his afternoon nap. He was a little fussy before lunch but settled after a bottle.”
- Add buttons:
  “Edit summary”
  “Share with parent”
- AI should feel subtle and helpful, not futuristic or robotic.
- Use a small sparkle or soft assistant mark only, not a big AI badge.

Navigation:
- Bottom nav can remain: Home, Log, Summary, Profile.
- But Summary should feel like “Handoff,” not just a generic summary tab.
- Consider renaming the tab to “Handoff” if it fits better.
- Use warm custom icons.

Overall feel:
- Less generic baby tracker.
- More caregiver handoff journal.
- More warmth, more serif, more personality.
- More expressive card treatments.
- More mood diary-inspired doodles and organic shapes.
- Keep it clean, readable, and realistic for a React/Next.js build.