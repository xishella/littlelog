import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function LogMedicineScreen() {
  const navigate = useNavigate();
  const [medicineName, setMedicineName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
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
            Medicine for Max
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Medicine Name */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Medicine name
            </span>
          </label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            placeholder="e.g., Infant Tylenol"
            style={{ fontFamily: 'var(--font-heading)' }}
          />
        </div>

        {/* Dose */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Dose
            </span>
          </label>
          <input
            type="text"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            className="w-full text-xl font-medium bg-transparent border-none outline-none"
            placeholder="e.g., 2.5 mL"
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

        {/* Reason */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Reason
            </span>
          </label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full text-base bg-transparent border-none outline-none"
            placeholder="e.g., fever, teething pain"
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
          Save medicine
        </button>
      </div>
    </div>
  );
}
