import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogDiaperScreen() {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [diaperType, setDiaperType] = useState("pee");
  const [peeAmount, setPeeAmount] = useState<string | null>(null);
  const [pooAmount, setPooAmount] = useState<string | null>(null);
  const [pooColor, setPooColor] = useState<string | null>(null);
  const [pooTexture, setPooTexture] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    navigate("/dashboard");
  };

  const showPeeOptions = diaperType === "pee" || diaperType === "mixed";
  const showPooOptions = diaperType === "poo" || diaperType === "mixed";

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
            Diaper for Max
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
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

        {/* Diaper Type */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Diaper type
            </span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "pee", label: "Pee" },
              { value: "poo", label: "Poo" },
              { value: "mixed", label: "Mixed" },
              { value: "dry", label: "Dry" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDiaperType(option.value)}
                className={`px-5 py-3.5 rounded-xl transition-all ${
                  diaperType === option.value
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

        {/* Pee Amount */}
        {showPeeOptions && (
          <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
            <label className="block mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Pee amount
              </span>
            </label>
            <div className="flex gap-3">
              {["Little", "Medium", "A lot"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPeeAmount(option)}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm transition-all ${
                    peeAmount === option
                      ? "bg-primary/10 border-2 border-primary shadow-sm"
                      : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Poo Amount */}
        {showPooOptions && (
          <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
            <label className="block mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Poo amount
              </span>
            </label>
            <div className="flex gap-3">
              {["Little", "Medium", "A lot"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPooAmount(option)}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm transition-all ${
                    pooAmount === option
                      ? "bg-primary/10 border-2 border-primary shadow-sm"
                      : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Poo Color */}
        {showPooOptions && (
          <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
            <label className="block mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Color
              </span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["Yellow", "Brown", "Green", "Other"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPooColor(option)}
                  className={`px-4 py-3 rounded-xl text-sm transition-all ${
                    pooColor === option
                      ? "bg-primary/10 border-2 border-primary shadow-sm"
                      : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Poo Texture */}
        {showPooOptions && (
          <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
            <label className="block mb-4">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Texture
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Seedy", "Soft", "Loose", "Firm", "Hard"].map((option) => (
                <button
                  key={option}
                  onClick={() => setPooTexture(option)}
                  className={`px-3 py-2.5 rounded-xl text-sm transition-all ${
                    pooTexture === option
                      ? "bg-primary/10 border-2 border-primary shadow-sm"
                      : "bg-secondary border-2 border-transparent hover:bg-secondary/80"
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Anything unusual?
            </span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-transparent border-none outline-none resize-none text-base"
            rows={2}
            placeholder="Optional notes..."
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
          Save diaper
        </button>
      </div>
    </div>
  );
}
