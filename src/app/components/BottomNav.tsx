import { useNavigate } from "react-router";
import { Home, Plus, FileText, User } from "lucide-react";

interface BottomNavProps {
  currentRoute: string;
}

export function BottomNav({ currentRoute }: BottomNavProps) {
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", label: "Home", icon: Home },
    { path: "/log", label: "Log", icon: Plus },
    { path: "/handoff-ready", label: "Handoff", icon: FileText },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-6 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentRoute === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium" style={{ fontFamily: 'var(--font-heading)' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
