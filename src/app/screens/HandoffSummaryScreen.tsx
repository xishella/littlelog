import { ChevronLeft, Edit3, Share2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

export function HandoffSummaryScreen() {
  const navigate = useNavigate();

  const summaryData = {
    quick: "Max had a calm, playful day. He took three naps, had four feeds, tried sweet potato puree, and seemed happiest after his afternoon nap. He was a little fussy before lunch but settled after a bottle.",
    sleep: "Max took 3 naps today (9:30am - 10:45am, 1:00pm - 2:15pm, and 4:30pm - 5:00pm). Total daytime sleep was about 2 hours 30 minutes.",
    feeding: "He had 4 bottles (6oz each) and ate sweet potato puree for lunch. He seemed to really enjoy the sweet potato!",
    diapers: "7 diaper changes throughout the day - all normal and healthy.",
    mood: "Overall mood was happy and playful. He was especially smiley after his afternoon nap, but a little fussy before lunch.",
    notes: "Max loved playing with the soft blocks today. He's getting better at stacking them!",
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/handoff-ready")}
            className="w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2
              className="text-2xl"
              style={{ fontFamily: 'var(--font-brand)' }}
            >
              Today's handoff
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Sparkles className="w-3 h-3 text-primary/60" />
              <p className="text-xs text-muted-foreground">Generated from Max's logs. Review before sharing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Content */}
      <div className="px-6 py-6 space-y-4">
        {/* Quick Summary */}
        <div
          className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 border border-primary/20 relative overflow-hidden"
          style={{ borderRadius: '1.25rem' }}
        >
          <div className="absolute top-2 right-2 w-8 h-8 border border-primary/15 rounded-full" />
          <div className="relative z-10">
            <h3 className="text-xs font-medium text-primary mb-3 uppercase tracking-wide">
              Quick summary
            </h3>
            <p className="text-foreground leading-relaxed">{summaryData.quick}</p>
          </div>
        </div>

        {/* Sleep */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: "var(--sleep-accent)" }}>
            Sleep
          </h3>
          <p className="text-foreground leading-relaxed text-sm">{summaryData.sleep}</p>
        </div>

        {/* Feeding */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: "var(--bottles-accent)" }}>
            Feeding
          </h3>
          <p className="text-foreground leading-relaxed text-sm">{summaryData.feeding}</p>
        </div>

        {/* Diapers */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: "var(--diapers-accent)" }}>
            Diapers
          </h3>
          <p className="text-foreground leading-relaxed text-sm">{summaryData.diapers}</p>
        </div>

        {/* Mood */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: "var(--mood-accent)" }}>
            Mood
          </h3>
          <p className="text-foreground leading-relaxed text-sm">{summaryData.mood}</p>
        </div>

        {/* Notes for home */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: "var(--notes-accent)" }}>
            Notes for home
          </h3>
          <p className="text-foreground leading-relaxed text-sm">{summaryData.notes}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-background via-background to-transparent space-y-3">
        <button
          onClick={() => navigate("/edit-summary")}
          className="w-full bg-card text-foreground py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-shadow border border-border flex items-center justify-center gap-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <Edit3 className="w-4 h-4" />
          Edit summary
        </button>
        <button
          onClick={() => {
            alert("Handoff shared!");
            navigate("/dashboard");
          }}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <Share2 className="w-4 h-4" />
          Share with parent
        </button>
      </div>
    </div>
  );
}
