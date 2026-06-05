import { useNavigate } from "react-router";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary flex flex-col relative overflow-hidden">
      {/* Organic decorative shapes and doodles */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-white/8"
           style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }} />
      <div className="absolute bottom-40 left-8 w-28 h-28 bg-white/5"
           style={{ borderRadius: '61% 39% 44% 56% / 72% 38% 62% 28%' }} />
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/6"
           style={{ borderRadius: '48% 52% 39% 61% / 55% 63% 37% 45%' }} />

      {/* Tiny doodle accents */}
      <svg className="absolute top-32 left-12 w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15 8L21 9L16 14L18 21L12 17L6 21L8 14L3 9L9 8L12 2Z" />
      </svg>
      <svg className="absolute bottom-60 right-16 w-8 h-8 text-white/15" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" strokeDasharray="2 3" />
      </svg>

      <div className="flex-1 flex flex-col justify-center px-6 relative z-10 pt-[60px]">
        <div className="max-w-md mx-auto w-full space-y-8">
          <div className="space-y-4">
            <p className="text-white/75 text-base">Good morning, Anna</p>
            <h1
              className="text-white text-[2.75rem] leading-tight"
              style={{ fontFamily: 'var(--font-brand)' }}
            >
              Ready to start Max's day?
            </h1>
            <p className="text-white/65 text-base leading-relaxed mt-6">
              Track the little things as they happen. LittleLog will help turn them into a warm handoff later.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 pb-12 relative z-10">
        <div className="max-w-md mx-auto w-full">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-white text-primary py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Start Max's log
          </button>
        </div>
      </div>
    </div>
  );
}
