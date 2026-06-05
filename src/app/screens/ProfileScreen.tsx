import { Baby, LogOut } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function ProfileScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-6">
        <h2 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
          Profile
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">Caregiver and baby details</p>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-5">
        {/* Caregiver Card */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Caregiver
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
              <span className="text-2xl font-medium">A</span>
            </div>
            <div>
              <p className="font-medium text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Anna
              </p>
              <p className="text-sm text-muted-foreground">Primary caregiver</p>
            </div>
          </div>
        </div>

        {/* Baby Card */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Baby
          </h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Baby className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="font-medium text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                Max
              </p>
              <p className="text-sm text-muted-foreground">8 months old</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-card p-6" style={{ borderRadius: '1.25rem' }}>
          <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Settings
          </h3>
          <div className="space-y-1">
            <button className="w-full text-left py-3 text-foreground text-sm hover:text-primary transition-colors">
              Notifications
            </button>
            <button className="w-full text-left py-3 text-foreground text-sm hover:text-primary transition-colors">
              Privacy
            </button>
            <button className="w-full text-left py-3 text-foreground text-sm hover:text-primary transition-colors">
              Help & Support
            </button>
          </div>
        </div>

        {/* Sign Out */}
        <button className="w-full bg-card text-destructive py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-shadow border border-border flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>

      <BottomNav currentRoute="/profile" />
    </div>
  );
}
