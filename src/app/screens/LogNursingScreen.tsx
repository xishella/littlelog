import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogNursingScreen() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [side, setSide] = useState("both");
  const [moodAfter, setMoodAfter] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

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
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Nursing for Max
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Start Time */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Start time
            </span>
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Duration */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Duration (minutes)
            </span>
          </label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full text-3xl font-medium bg-transparent border-none outline-none"
            placeholder="15"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Side */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Side
            </span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "left", label: "Left" },
              { value: "right", label: "Right" },
              { value: "both", label: "Both" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSide(option.value)}
                className={`px-5 py-3.5 rounded-xl transition-all ${
                  side === option.value
                    ? "bg-primary/10 border-2 border-primary shadow-sm"
                    : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                }`}
              >
                <span className="font-medium text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mood After */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Mood after (optional)
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {["Content", "Sleepy", "Still hungry", "Fussy"].map((option) => (
              <button
                key={option}
                onClick={() => setMoodAfter(moodAfter === option ? null : option)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  moodAfter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Notes (optional)
            </span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-transparent border-none outline-none resize-none text-base"
            rows={3}
            placeholder="Add any details..."
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-background via-background to-transparent">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Save nursing
        </button>
      </div>
    </div>
  );
}
