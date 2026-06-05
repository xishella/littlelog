import { useNavigate } from "react-router";
import { Baby } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function TodayDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: "Sleep", value: "3 naps", color: "var(--sleep)", accentColor: "var(--sleep-accent)", shape: '65% 35% 58% 42% / 48% 62% 38% 52%' },
    { label: "Feeding", value: "4 feeds", color: "var(--bottles)", accentColor: "var(--bottles-accent)", shape: '48% 52% 67% 33% / 55% 43% 57% 45%' },
    { label: "Diapers", value: "7 changes", color: "var(--diapers)", accentColor: "var(--diapers-accent)", shape: '72% 28% 41% 59% / 63% 52% 48% 37%' },
    { label: "Solids", value: "2 meals", color: "var(--solids)", accentColor: "var(--solids-accent)", shape: '38% 62% 53% 47% / 58% 44% 56% 42%' },
    { label: "Mood", value: "Happy", color: "var(--mood)", accentColor: "var(--mood-accent)", shape: '61% 39% 44% 56% / 48% 62% 38% 52%' },
    { label: "Notes", value: "3 added", color: "var(--notes)", accentColor: "var(--notes-accent)", shape: '52% 48% 68% 32% / 43% 57% 43% 57%' },
  ];

  const activities = [
    { time: "2:30 PM", type: "Bottle", detail: "6 oz formula", color: "var(--bottles-accent)" },
    { time: "1:45 PM", type: "Nap", detail: "1 hr 15 min", color: "var(--sleep-accent)" },
    { time: "12:30 PM", type: "Solids", detail: "Tried sweet potato puree", color: "var(--solids-accent)" },
    { time: "11:00 AM", type: "Diaper", detail: "Diaper change", color: "var(--diapers-accent)" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Baby className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-medium" style={{ fontFamily: 'var(--font-heading)' }}>Max</h2>
              <p className="text-sm text-muted-foreground">Friday, June 5</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-sm font-medium">A</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 space-y-5">
        {/* Main Title */}
        <div className="space-y-1">
          <h1
            className="text-3xl text-foreground"
            style={{ fontFamily: 'var(--font-brand)' }}
          >
            Today with Max
          </h1>
          <p className="text-sm text-muted-foreground">Little moments logged as they happen.</p>
        </div>

        {/* Handoff Note Prompt */}
        <div
          className="bg-gradient-to-br from-primary/5 to-primary/10 p-5 relative overflow-hidden border border-primary/15"
          style={{ borderRadius: '1.5rem' }}
        >
          {/* Soft organic decorative marks */}
          <div className="absolute top-2 right-2 w-6 h-6 border border-primary/20 rounded-full" />
          <svg className="absolute bottom-3 right-4 w-4 h-4 text-primary/10" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2C8 2 6 4 6 6C6 7.1 6.9 8 8 8C9.1 8 10 7.1 10 6C10 4 8 2 8 2Z" />
          </svg>
          <div className="relative z-10">
            <p className="text-sm font-medium text-primary/90 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Anything to pass along?
            </p>
            <button
              onClick={() => navigate("/handoff-note")}
              className="text-sm text-primary underline"
            >
              Add a handoff note
            </button>
          </div>
        </div>

        {/* Activity Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 text-center relative overflow-hidden"
              style={{
                backgroundColor: stat.color,
                borderRadius: stat.shape,
              }}
            >
              <div
                className="absolute -top-2 -right-2 w-8 h-8 opacity-20"
                style={{
                  backgroundColor: stat.accentColor,
                  borderRadius: '50%',
                }}
              />
              <p className="text-sm font-medium mb-1">{stat.value}</p>
              <p className="text-xs opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-card p-6 relative" style={{ borderRadius: '1.5rem' }}>
          <h3 className="text-base font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Recent activity
          </h3>
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: activity.color }}
                />
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <span className="text-sm">—</span>
                    <span className="text-sm font-medium">{activity.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{activity.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav currentRoute="/dashboard" />
    </div>
  );
}
