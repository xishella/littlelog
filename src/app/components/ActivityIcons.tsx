// Custom rounded line icons with soft hand-drawn feel

export function SleepIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 8C20 8 18 10 16 10C14 10 12 8 12 8C12 12 15 14 16 14C17 14 20 12 20 8Z" />
      <circle cx="23" cy="12" r="1.5" fill="currentColor" />
      <circle cx="26" cy="8" r="1" fill="currentColor" />
      <circle cx="21" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function BottleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="11" y="8" width="10" height="3" rx="1" />
      <path d="M12 11L12 24C12 25.1 12.9 26 14 26L18 26C19.1 26 20 25.1 20 24L20 11Z" />
      <circle cx="9" cy="20" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="23" cy="16" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function NursingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 10C13 10 10 12 10 15C10 18 13 20 16 22C19 20 22 18 22 15C22 12 19 10 16 10Z" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
      <circle cx="20" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function DiaperIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 14L8 18C8 20 10 22 12 22L20 22C22 22 24 20 24 18L24 14C24 12 22 10 20 10L12 10C10 10 8 12 8 14Z" />
      <circle cx="14" cy="16" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="18" cy="16" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="16" cy="18" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function SolidFoodIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="20" rx="8" ry="6" />
      <path d="M12 12L12 18" />
      <path d="M20 12L20 18" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      <circle cx="20" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MedicineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="12" width="12" height="10" rx="5" />
      <line x1="16" y1="9" x2="16" y2="15" />
      <line x1="13" y1="12" x2="19" y2="12" />
      <path d="M16 18L16 20" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function MoodIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="8" />
      <circle cx="13" cy="14" r="1" fill="currentColor" />
      <circle cx="19" cy="14" r="1" fill="currentColor" />
      <path d="M12 18C12 18 13.5 20 16 20C18.5 20 20 18 20 18" />
      <circle cx="23" cy="10" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="9" cy="11" r="0.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function NoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 8L10 24C10 25.1 10.9 26 12 26L20 26C21.1 26 22 25.1 22 24L22 8C22 6.9 21.1 6 20 6L12 6C10.9 6 10 6.9 10 8Z" />
      <line x1="13" y1="12" x2="19" y2="12" strokeWidth="1.5" />
      <line x1="13" y1="16" x2="17" y2="16" strokeWidth="1.5" />
      <line x1="13" y1="20" x2="18" y2="20" strokeWidth="1.5" />
    </svg>
  );
}

export function PhotoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="20" height="14" rx="2" />
      <circle cx="16" cy="17" r="4" />
      <circle cx="21" cy="13" r="1" fill="currentColor" />
      <path d="M6 22L10 18L14 20L18 16L26 20" strokeWidth="1.5" />
    </svg>
  );
}
