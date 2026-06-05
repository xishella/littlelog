import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Mic } from "lucide-react";

export function HandoffNoteScreen() {
  const navigate = useNavigate();
  const [note, setNote] = useState("");
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const chips = ["Mood", "Supplies", "Nap", "Food", "Something to watch"];

  const handleSave = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
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
              Note for Max's parent
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Add anything helpful before the day wraps up.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Quick chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => setSelectedChip(chip === selectedChip ? null : chip)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedChip === chip
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Text area with voice dictation */}
        <div className="relative">
          <div className="bg-card p-6 min-h-[280px] relative" style={{ borderRadius: '1.25rem' }}>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full h-full bg-transparent border-none outline-none resize-none text-base leading-relaxed pr-16"
              placeholder="Type or dictate a quick note…"
            />

            {/* Voice dictation button */}
            <button
              className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center"
              aria-label="Tap to dictate"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 px-2">
            Example: Max was extra sleepy after lunch, but perked up after his bottle.
          </p>
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-background via-background to-transparent">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Save handoff note
        </button>
      </div>
    </div>
  );
}
