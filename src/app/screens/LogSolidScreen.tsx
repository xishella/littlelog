import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogSolidScreen() {
  const navigate = useNavigate();
  const [food, setFood] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState<string | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);
  const [watchFor, setWatchFor] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    navigate("/dashboard");
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
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Solid food for Max
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Food */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Food
            </span>
          </label>
          <input
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            placeholder="Sweet potato puree"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Time */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Time
            </span>
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Amount */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Amount
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "taste", label: "Taste" },
              { value: "some", label: "Some" },
              { value: "most", label: "Most" },
              { value: "all", label: "All" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setAmount(option.value)}
                className={`px-5 py-3.5 rounded-xl transition-all ${
                  amount === option.value
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

        {/* Reaction */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Reaction
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "loved", label: "Loved it" },
              { value: "liked", label: "Liked it" },
              { value: "unsure", label: "Unsure" },
              { value: "refused", label: "Refused" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setReaction(option.value)}
                className={`px-4 py-3 rounded-xl text-sm transition-all ${
                  reaction === option.value
                    ? "bg-primary/10 border-2 border-primary shadow-sm"
                    : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Watch For */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Any reaction to watch (optional)
            </span>
          </label>
          <input
            type="text"
            value={watchFor}
            onChange={(e) => setWatchFor(e.target.value)}
            className="w-full text-base bg-transparent border-none outline-none"
            placeholder="e.g., rash, tummy upset"
          />
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
            rows={2}
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
          Save solid food
        </button>
      </div>
    </div>
  );
}
