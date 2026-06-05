import { useNavigate } from "react-router";
import { Check, Plus } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function HandoffReadinessScreen() {
  const navigate = useNavigate();

  const checklist = [
    { category: "Sleep logged", logged: true, route: "/log/sleep" },
    { category: "Feeding logged", logged: true, route: "/log/bottle" },
    { category: "Diapers logged", logged: true, route: "/log/diaper" },
    { category: "Mood added", logged: true, route: "/log/mood" },
    { category: "Notes added", logged: false, route: "/handoff-note" },
    { category: "Important update added", logged: false, route: "/important-update" },
  ];

  const completionPercentage = 67;

  return (
    <div className="h-dvh bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-6 shrink-0 z-10 relative">
        <h2
          className="text-[2rem] mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-brand)' }}
        >
          Ready to wrap up Max's day?
        </h2>
        <p className="text-muted-foreground text-sm">
          Review the day, add anything important, then create a handoff for home.
        </p>
      </div>

      {/* Main Content - Fully Scrollable */}
      <div className="px-6 py-6 pb-[calc(160px+env(safe-area-inset-bottom))] space-y-6 flex-1 overflow-y-auto">
        {/* Compact Handoff Readiness Card */}
        <div className="bg-card p-6 flex flex-col gap-4" style={{ borderRadius: '1.25rem' }}>
          <div>
            <p className="text-2xl font-medium mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              Handoff readiness
            </p>
            <p className="text-sm text-muted-foreground">A quick check before sharing the day.</p>
          </div>
          
          {/* Single Horizontal Pill Meter */}
          <div className="w-full h-8 rounded-full bg-muted/40 relative flex items-center shadow-inner border border-border/30 overflow-visible">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out flex items-center justify-center relative shadow-sm"
              style={{ width: `${completionPercentage}%` }}
            >
              {completionPercentage >= 15 && (
                <span className="text-primary-foreground font-medium text-xs">
                  {completionPercentage}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-base font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            What's logged
          </h3>
          <div className="space-y-2">
            {checklist.map((item, index) => (
              <div key={index}>
                {item.logged ? (
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-foreground">{item.category}</span>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => navigate(item.route)}
                    className="w-full flex items-center justify-between py-2 hover:bg-accent/50 -mx-2 px-2 rounded-lg transition-colors"
                  >
                    <span className="text-sm text-muted-foreground">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-primary font-medium">Add</span>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center border-2 border-muted">
                        <Plus className="w-3 h-3 text-muted-foreground" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note Prompt */}
        <div
          className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 relative overflow-hidden border border-primary/15"
          style={{ borderRadius: '1.25rem' }}
        >
          <div className="absolute -top-2 -right-2 w-10 h-10 border border-primary/20 rounded-full" />
          <svg className="absolute bottom-3 right-4 w-4 h-4 text-primary/10" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2C8 2 6 4 6 6C6 7.1 6.9 8 8 8C9.1 8 10 7.1 10 6C10 4 8 2 8 2Z" />
          </svg>
          <div className="relative z-10">
            <p className="text-base font-medium text-primary/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Anything important for home?
            </p>
            <button
              onClick={() => navigate("/handoff-note")}
              className="text-sm text-primary underline"
            >
              Add a note for Max's parent
            </button>
          </div>
        </div>

        {/* Action Buttons - Now in scrollable content with proper spacing */}
        <div className="space-y-3 pt-2">
          <button
            onClick={() => navigate("/handoff-summary")}
            className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Create handoff summary
          </button>
          <button
            onClick={() => navigate("/log")}
            className="w-full bg-card text-foreground py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-shadow border border-border flex items-center justify-center gap-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Plus className="w-4 h-4" />
            Add one more note
          </button>
        </div>
      </div>

      <BottomNav currentRoute="/handoff-ready" />
    </div>
  );
}
