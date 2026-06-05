import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogDetailScreen() {
  const navigate = useNavigate();
  const { type } = useParams();
  const [amount, setAmount] = useState("6");
  const [time, setTime] = useState("14:30");
  const [bottleType, setBottleType] = useState("formula");
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
            onClick={() => navigate("/log")}
            className="w-10 h-10 rounded-full hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Bottle for Max
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Amount */}
        <div className="bg-card p-6 relative overflow-hidden" style={{ borderRadius: '1.25rem' }}>
          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-primary/10" />
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Amount (oz)
            </span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full text-3xl font-medium bg-transparent border-none outline-none"
            placeholder="0"
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

        {/* Type */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Type
            </span>
          </label>
          <div className="space-y-2">
            {[
              { value: "breast-milk", label: "Breast milk" },
              { value: "formula", label: "Formula" },
              { value: "mixed", label: "Mixed" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setBottleType(option.value)}
                className={`w-full text-left px-5 py-3.5 rounded-xl transition-all ${
                  bottleType === option.value
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

        {/* Notes */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Anything Max's parent should know?
            </span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-transparent border-none outline-none resize-none text-base"
            rows={3}
            placeholder="Add any details to pass along..."
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
          Save to today's log
        </button>
      </div>
    </div>
  );
}
