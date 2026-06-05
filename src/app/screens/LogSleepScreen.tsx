import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogSleepScreen() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [sleepType, setSleepType] = useState("nap");
  const [quality, setQuality] = useState<string | null>(null);
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
            Sleep for Max
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

        {/* End Time */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              End time
            </span>
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Sleep Type */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Sleep type
            </span>
          </label>
          <div className="flex gap-3">
            {[
              { value: "nap", label: "Nap" },
              { value: "overnight", label: "Overnight" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSleepType(option.value)}
                className={`flex-1 px-5 py-3.5 rounded-xl transition-all ${
                  sleepType === option.value
                    ? "bg-primary/10 border-2 border-primary shadow-sm"
                    : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                }`}
              >
                <span className="font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quality */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Quality (optional)
            </span>
          </label>
          <div className="flex flex-wrap gap-2">
            {["Peaceful", "Restless", "Short", "Hard to settle"].map((option) => (
              <button
                key={option}
                onClick={() => setQuality(quality === option ? null : option)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  quality === option
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
          Save sleep
        </button>
      </div>
    </div>
  );
}
