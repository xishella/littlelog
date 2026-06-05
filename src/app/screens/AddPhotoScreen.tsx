import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Upload } from "lucide-react";

export function AddPhotoScreen() {
  const navigate = useNavigate();
  const [caption, setCaption] = useState("");
  const [shareWithParent, setShareWithParent] = useState(true);

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
            Add a photo
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 py-6 space-y-5">
        {/* Photo Upload Placeholder */}
        <div className="bg-card p-8 flex flex-col items-center justify-center min-h-[280px]" style={{ borderRadius: '1.25rem' }}>
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Upload className="w-10 h-10 text-muted-foreground" />
          </div>
          <p className="text-base font-medium mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Add a photo
          </p>
          <p className="text-sm text-muted-foreground text-center">
            Tap to upload a photo from Max's day
          </p>
        </div>

        {/* Caption */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <label className="block mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Caption (optional)
            </span>
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full bg-transparent border-none outline-none resize-none text-base"
            rows={3}
            placeholder="Add a caption..."
          />
        </div>

        {/* Share Toggle */}
        <div className="bg-card p-6 flex items-center justify-between" style={{ borderRadius: '1.25rem' }}>
          <div>
            <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
              Share with parent
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Include in today's handoff
            </p>
          </div>
          <button
            onClick={() => setShareWithParent(!shareWithParent)}
            className={`w-14 h-8 rounded-full transition-colors relative ${
              shareWithParent ? "bg-primary" : "bg-muted"
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                shareWithParent ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-background via-background to-transparent">
        <button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-shadow"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Save photo
        </button>
      </div>
    </div>
  );
}
