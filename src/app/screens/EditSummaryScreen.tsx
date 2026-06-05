import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function EditSummaryScreen() {
  const navigate = useNavigate();

  const [summaryData, setSummaryData] = useState({
    quick: "Max had a calm, playful day. He took three naps, had four feeds, tried sweet potato puree, and seemed happiest after his afternoon nap. He was a little fussy before lunch but settled after a bottle.",
    sleep: "Max took 3 naps today (9:30am - 10:45am, 1:00pm - 2:15pm, and 4:30pm - 5:00pm). Total daytime sleep was about 2 hours 30 minutes.",
    feeding: "He had 4 bottles (6oz each) and ate sweet potato puree for lunch. He seemed to really enjoy the sweet potato!",
    diapers: "7 diaper changes throughout the day - all normal and healthy.",
    mood: "Overall mood was happy and playful. He was especially smiley after his afternoon nap, but a little fussy before lunch.",
    notes: "Max loved playing with the soft blocks today. He's getting better at stacking them!",
  });

  const handleSave = () => {
    navigate("/handoff-summary");
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Edit today's handoff
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Make any changes before sharing with Max's parent.
            </p>
          </div>
        </div>
      </div>

      {/* Editable Sections */}
      <div className="px-6 py-6 space-y-4">
        {/* Quick Summary */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Quick summary
            </span>
          </label>
          <textarea
            value={summaryData.quick}
            onChange={(e) => setSummaryData({ ...summaryData, quick: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={3}
          />
        </div>

        {/* Sleep */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--sleep-accent)" }}>
              Sleep
            </span>
          </label>
          <textarea
            value={summaryData.sleep}
            onChange={(e) => setSummaryData({ ...summaryData, sleep: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={2}
          />
        </div>

        {/* Feeding */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--bottles-accent)" }}>
              Feeding
            </span>
          </label>
          <textarea
            value={summaryData.feeding}
            onChange={(e) => setSummaryData({ ...summaryData, feeding: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={2}
          />
        </div>

        {/* Diapers */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--diapers-accent)" }}>
              Diapers
            </span>
          </label>
          <textarea
            value={summaryData.diapers}
            onChange={(e) => setSummaryData({ ...summaryData, diapers: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={1}
          />
        </div>

        {/* Mood */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--mood-accent)" }}>
              Mood
            </span>
          </label>
          <textarea
            value={summaryData.mood}
            onChange={(e) => setSummaryData({ ...summaryData, mood: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={2}
          />
        </div>

        {/* Notes for home */}
        <div className="bg-card p-5" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--notes-accent)" }}>
              Notes for home
            </span>
          </label>
          <textarea
            value={summaryData.notes}
            onChange={(e) => setSummaryData({ ...summaryData, notes: e.target.value })}
            className="w-full bg-transparent border-none outline-none resize-none text-sm leading-relaxed"
            rows={2}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-background via-background to-transparent space-y-3">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Save changes
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full bg-card text-foreground py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-shadow border border-border"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
