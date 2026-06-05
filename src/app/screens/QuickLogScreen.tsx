import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowUpRight, SlidersHorizontal, ChevronRight, X, GripVertical } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Switch } from "../components/ui/switch";

type CardKey =
  | "sleep" | "bottle" | "nursing" | "diaper" | "solid"
  | "medicine" | "mood" | "note" | "photo";

interface LogCard {
  type: CardKey;
  label: string;
  bg: string;
  ink: string;
}

const ALL_CARDS: LogCard[] = [
  { type: "sleep",    label: "Sleep",      bg: "#C9D2E0", ink: "#3B4258" },
  { type: "bottle",   label: "Bottle",     bg: "#D7E8E1", ink: "#2F4F45" },
  { type: "nursing",  label: "Nursing",    bg: "#F0CFCB", ink: "#6B3A37" },
  { type: "diaper",   label: "Diaper",     bg: "#F1DD8B", ink: "#5C4A1B" },
  { type: "solid",    label: "Solid food", bg: "#F2C29A", ink: "#5C3318" },
  { type: "medicine", label: "Medicine",   bg: "#B8CDB5", ink: "#2F4A2B" },
  { type: "mood",     label: "Mood",       bg: "#DCD0E3", ink: "#3F2F55" },
  { type: "note",     label: "Note",       bg: "#D9E2C9", ink: "#3D4A2A" },
  { type: "photo",    label: "Photo",      bg: "#F4D2D8", ink: "#6B2E3A" },
];

const DEFAULT_VISIBLE: CardKey[] = ["sleep", "bottle", "diaper", "mood", "note", "photo"];

function hexToRgb(hex: string) {
  return `${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)}`;
}

// ─── Card SVG Patterns ────────────────────────────────────────────────────────
// Full-card tone-on-tone texture, 5–8% opacity — barely-there paper texture.

function CardPattern({ type, ink }: { type: CardKey; ink: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      style={{ color: ink }}
      aria-hidden
    >
      {/* Sleep: dot field + sparkle marks + gentle arcs */}
      {type === "sleep" && (<>
        <g opacity="0.07" fill="currentColor">
          {([
            [10,8],[36,6],[62,12],[88,6],[114,10],[140,6],[166,12],[192,8],
            [6,30],[28,36],[54,28],[80,34],[106,28],[132,34],[158,28],[184,34],
            [14,54],[40,60],[66,52],[92,58],[118,52],[144,58],[170,52],[196,58],
            [8,76],[32,82],[58,74],[84,80],[110,74],[136,80],[162,74],[188,80],
            [16,98],[42,104],[68,96],[94,102],[120,96],[146,102],[172,96],[198,102],
          ] as [number,number][]).map(([x,y],i)=><circle key={i} cx={x} cy={y} r="1.5"/>)}
        </g>
        <g opacity="0.07" fill="currentColor">
          <path d="M24 22 l1.3 3 l3 1.3 l-3 1.3 l-1.3 3 l-1.3-3 l-3-1.3 l3-1.3 z"/>
          <path d="M96 48 l1.1 2.5 l2.5 1.1 l-2.5 1.1 l-1.1 2.5 l-1.1-2.5 l-2.5-1.1 l2.5-1.1 z"/>
          <path d="M168 18 l1.3 3 l3 1.3 l-3 1.3 l-1.3 3 l-1.3-3 l-3-1.3 l3-1.3 z"/>
          <path d="M52 84 l0.9 2.1 l2.1 0.9 l-2.1 0.9 l-0.9 2.1 l-0.9-2.1 l-2.1-0.9 l2.1-0.9 z"/>
          <path d="M140 104 l1 2.4 l2.4 1 l-2.4 1 l-1 2.4 l-1-2.4 l-2.4-1 l2.4-1 z"/>
          <path d="M178 70 l0.9 2.1 l2.1 0.9 l-2.1 0.9 l-0.9 2.1 l-0.9-2.1 l-2.1-0.9 l2.1-0.9 z"/>
        </g>
        <path d="M-8 38 Q32 26 72 38 T152 34 T232 38" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.05"/>
        <path d="M-8 64 Q32 52 72 64 T152 60 T232 64" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.05"/>
        <path d="M-8 90 Q32 78 72 90 T152 86 T232 90" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
        <path d="M-8 114 Q32 102 72 114 T152 110 T232 114" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
      </>)}

      {/* Bottle: vertical line grid + scattered dot bubbles */}
      {type === "bottle" && (<>
        <g opacity="0.05" stroke="currentColor" strokeWidth="0.9" fill="none">
          {([10,24,38,52,66,80,94,108,122,136,150,164,178,192] as number[]).map((x,i)=>
            <line key={i} x1={x} y1="0" x2={x} y2="120"/>
          )}
        </g>
        <g opacity="0.07" fill="currentColor">
          {([
            [18,10],[44,16],[70,8],[96,14],[122,8],[148,14],[174,8],[196,14],
            [6,34],[30,40],[56,32],[82,38],[108,32],[134,38],[160,32],[186,38],
            [16,58],[42,64],[68,56],[94,62],[120,56],[146,62],[172,56],[198,62],
            [8,82],[32,88],[58,80],[84,86],[110,80],[136,86],[162,80],[188,86],
            [18,106],[44,112],[70,104],[96,110],[122,104],[148,110],[174,104],
          ] as [number,number][]).map(([x,y],i)=>
            <circle key={i} cx={x} cy={y} r={1.2+(i%3)*0.3}/>
          )}
        </g>
      </>)}

      {/* Nursing: full-card wave/loop rows */}
      {type === "nursing" && (<>
        <g opacity="0.07" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round">
          <path d="M-8 12 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
          <path d="M-8 32 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
          <path d="M-8 52 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
          <path d="M-8 72 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
          <path d="M-8 92 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
          <path d="M-8 112 q16-13 32 0 q16 13 32 0 q16-13 32 0 q16 13 32 0 q16-13 32 0"/>
        </g>
        <g opacity="0.06" fill="currentColor">
          {([
            [20,10],[64,22],[108,12],[152,22],[196,12],
            [8,46],[50,40],[94,46],[138,40],[180,46],
            [26,72],[70,80],[114,72],[158,80],[200,72],
            [14,102],[56,108],[100,102],[144,108],[188,102],
          ] as [number,number][]).map(([x,y],i)=><circle key={i} cx={x} cy={y} r="1.3"/>)}
        </g>
      </>)}

      {/* Diaper: full-card dot grid */}
      {type === "diaper" && (<>
        <g opacity="0.07" fill="currentColor">
          {([0,1,2,3,4,5,6,7] as number[]).flatMap(row=>
            ([0,1,2,3,4,5,6,7,8,9,10,11,12] as number[]).map(col=>
              <circle key={`${row}-${col}`} cx={8+col*15.5} cy={8+row*15} r="1.5"/>
            )
          )}
        </g>
        <g opacity="0.04" fill="currentColor">
          {([[24,22],[78,52],[132,22],[186,52],[54,82],[108,112],[162,82]] as [number,number][]).map(([x,y],i)=>
            <circle key={i} cx={x} cy={y} r="3"/>
          )}
        </g>
      </>)}

      {/* Solid food: varying-size dot field + gentle flow arcs */}
      {type === "solid" && (<>
        <g opacity="0.07" fill="currentColor">
          {([
            [12,6,1.2],[38,10,1.8],[64,6,1.4],[90,10,1.6],[116,6,1.2],[142,10,1.8],[168,6,1.4],[194,10,1.6],
            [6,26,1.5],[28,32,1.2],[54,26,1.8],[80,30,1.4],[106,26,1.7],[132,30,1.2],[158,26,1.8],[184,30,1.5],
            [16,50,1.4],[42,56,1.8],[68,50,1.2],[94,54,1.6],[120,50,1.4],[146,54,1.8],[172,50,1.2],[198,54,1.5],
            [8,74,1.6],[32,80,1.2],[58,74,1.8],[84,78,1.4],[110,74,1.6],[136,78,1.2],[162,74,1.8],[188,78,1.4],
            [18,98,1.3],[44,104,1.8],[70,98,1.2],[96,102,1.6],[122,98,1.4],[148,102,1.8],[174,98,1.2],
          ] as [number,number,number][]).map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
        </g>
        <path d="M-8 18 Q34 6 74 18 T154 14 T234 18" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
        <path d="M-8 44 Q34 32 74 44 T154 40 T234 44" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
        <path d="M-8 70 Q34 58 74 70 T154 66 T234 70" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
        <path d="M-8 96 Q34 84 74 96 T154 92 T234 96" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.04"/>
      </>)}

      {/* Medicine: full-card plus marks + soft circles */}
      {type === "medicine" && (<>
        <g opacity="0.08" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round">
          {([
            [14,12],[46,12],[78,12],[110,12],[142,12],[174,12],
            [30,36],[62,36],[94,36],[126,36],[158,36],[190,36],
            [14,60],[46,60],[78,60],[110,60],[142,60],[174,60],
            [30,84],[62,84],[94,84],[126,84],[158,84],[190,84],
            [14,108],[46,108],[78,108],[110,108],[142,108],[174,108],
          ] as [number,number][]).map(([x,y],i)=>(
            <g key={i}>
              <line x1={x} y1={y-4} x2={x} y2={y+4}/>
              <line x1={x-4} y1={y} x2={x+4} y2={y}/>
            </g>
          ))}
        </g>
        <g opacity="0.05" stroke="currentColor" strokeWidth="0.9" fill="none">
          {([[38,22,8],[112,48,6],[76,80,9],[176,24,5],[148,100,7],[26,96,5],[196,72,6]] as [number,number,number][]).map(([x,y,r],i)=>
            <circle key={i} cx={x} cy={y} r={r}/>
          )}
        </g>
      </>)}

      {/* Mood: sparkle marks + soft circles + tiny dots */}
      {type === "mood" && (<>
        <g opacity="0.08" fill="currentColor">
          <path d="M18 10 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M70 6 l1.1 2.6 l2.6 1.1 l-2.6 1.1 l-1.1 2.6 l-1.1-2.6 l-2.6-1.1 l2.6-1.1 z"/>
          <path d="M122 12 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M176 8 l1 2.4 l2.4 1 l-2.4 1 l-1 2.4 l-1-2.4 l-2.4-1 l2.4-1 z"/>
          <path d="M44 40 l1.1 2.6 l2.6 1.1 l-2.6 1.1 l-1.1 2.6 l-1.1-2.6 l-2.6-1.1 l2.6-1.1 z"/>
          <path d="M98 36 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M152 40 l1 2.4 l2.4 1 l-2.4 1 l-1 2.4 l-1-2.4 l-2.4-1 l2.4-1 z"/>
          <path d="M198 36 l0.9 2 l2 0.9 l-2 0.9 l-0.9 2 l-0.9-2 l-2-0.9 l2-0.9 z"/>
          <path d="M22 68 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M74 64 l1 2.4 l2.4 1 l-2.4 1 l-1 2.4 l-1-2.4 l-2.4-1 l2.4-1 z"/>
          <path d="M128 70 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M180 66 l1.1 2.6 l2.6 1.1 l-2.6 1.1 l-1.1 2.6 l-1.1-2.6 l-2.6-1.1 l2.6-1.1 z"/>
          <path d="M48 96 l1.4 3.2 l3.2 1.4 l-3.2 1.4 l-1.4 3.2 l-1.4-3.2 l-3.2-1.4 l3.2-1.4 z"/>
          <path d="M102 100 l1 2.4 l2.4 1 l-2.4 1 l-1 2.4 l-1-2.4 l-2.4-1 l2.4-1 z"/>
          <path d="M156 96 l1.1 2.6 l2.6 1.1 l-2.6 1.1 l-1.1 2.6 l-1.1-2.6 l-2.6-1.1 l2.6-1.1 z"/>
          <path d="M196 104 l0.9 2 l2 0.9 l-2 0.9 l-0.9 2 l-0.9-2 l-2-0.9 l2-0.9 z"/>
        </g>
        <g opacity="0.05" stroke="currentColor" strokeWidth="0.9" fill="none">
          {([[50,28,10],[140,52,7],[82,88,12],[172,92,8],[30,108,6],[110,18,8],[192,48,5],[60,58,9]] as [number,number,number][]).map(([x,y,r],i)=>
            <circle key={i} cx={x} cy={y} r={r}/>
          )}
        </g>
        <g opacity="0.05" fill="currentColor">
          {([[10,32],[58,50],[108,30],[160,50],[8,80],[56,96],[108,80],[162,96],[200,82]] as [number,number][]).map(([x,y],i)=>
            <circle key={i} cx={x} cy={y} r="1.3"/>
          )}
        </g>
      </>)}

      {/* Note: full-card handwritten wavy line texture */}
      {type === "note" && (
        <g opacity="0.07" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
          <path d="M-4 10 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 24 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 38 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 52 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 66 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 80 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 94 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
          <path d="M-4 108 q14-4 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0"/>
        </g>
      )}

      {/* Photo: scattered circles + dot field */}
      {type === "photo" && (<>
        <g opacity="0.05" stroke="currentColor" strokeWidth="0.9" fill="none">
          {([
            [22,18,13],[76,32,9],[138,16,15],[190,40,7],
            [10,68,10],[58,78,16],[118,62,11],[172,76,8],[200,58,12],
            [30,106,9],[88,112,13],[152,98,10],[194,112,6],
          ] as [number,number,number][]).map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}
        </g>
        <g opacity="0.07" fill="currentColor">
          {([
            [12,10],[40,20],[72,10],[104,18],[136,10],[166,20],[196,10],
            [8,44],[34,52],[66,44],[98,50],[130,44],[160,52],[194,44],
            [18,78],[46,86],[78,76],[110,84],[142,76],[172,86],[200,78],
            [10,108],[38,114],[70,106],[102,112],[134,106],[164,114],[196,108],
          ] as [number,number][]).map(([x,y],i)=><circle key={i} cx={x} cy={y} r="1.4"/>)}
        </g>
      </>)}
    </svg>
  );
}

// ─── Customize Bottom Sheet ───────────────────────────────────────────────────

interface CustomizeSheetProps {
  visible: boolean;
  cardOrder: CardKey[];
  visibleCards: CardKey[];
  onSave: (order: CardKey[], visible: CardKey[]) => void;
  onCancel: () => void;
}

function CustomizeSheet({ visible, cardOrder, visibleCards, onSave, onCancel }: CustomizeSheetProps) {
  const [draftOrder, setDraftOrder]   = useState<CardKey[]>(cardOrder);
  const [draftVisible, setDraftVisible] = useState<CardKey[]>(visibleCards);
  const [draggingKey, setDraggingKey]  = useState<CardKey | null>(null);

  const draggingKeyRef = useRef<CardKey | null>(null);
  const dragOverKeyRef = useRef<CardKey | null>(null);

  // Reset draft whenever sheet opens
  useEffect(() => {
    if (visible) {
      setDraftOrder(cardOrder);
      setDraftVisible(visibleCards);
      setDraggingKey(null);
      draggingKeyRef.current = null;
      dragOverKeyRef.current = null;
    }
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (key: CardKey, checked: boolean) =>
    setDraftVisible(prev => checked ? [...prev, key] : prev.filter(k => k !== key));

  const handleDragStart = (e: React.DragEvent, key: CardKey) => {
    draggingKeyRef.current = key;
    setDraggingKey(key);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, overKey: CardKey) => {
    e.preventDefault();
    const dk = draggingKeyRef.current;
    if (!dk || overKey === dk || dragOverKeyRef.current === overKey) return;
    dragOverKeyRef.current = overKey;
    setDraftOrder(prev => {
      const next = [...prev];
      const fi = next.indexOf(dk);
      const ti = next.indexOf(overKey);
      if (fi === -1 || ti === -1) return prev;
      next.splice(fi, 1);
      next.splice(ti, 0, dk);
      return next;
    });
  };

  const handleDragEnd = () => {
    draggingKeyRef.current = null;
    dragOverKeyRef.current = null;
    setDraggingKey(null);
  };

  return (
    <>
      {/* Dim backdrop */}
      <div
        className="fixed inset-0 z-40"
        style={{
          background: "rgba(35, 30, 25, 0.28)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={onCancel}
      />

      {/* Sliding sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "#FAF8F5",
          borderRadius: "28px 28px 0 0",
          maxHeight: "86vh",
          overflowY: "auto",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.10)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Pill handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-[#C8C2BA]"/>
        </div>

        <div className="px-5 pb-10">
          {/* Header row */}
          <div className="flex items-start justify-between pt-4 pb-5">
            <div>
              <h2
                className="text-[1.3rem] leading-snug"
                style={{ fontFamily: "var(--font-brand)", fontWeight: 700, color: "#2D2926" }}
              >
                Customize log cards
              </h2>
              <p className="mt-1 text-sm text-[#7A7268]" style={{ fontFamily: "var(--font-body)" }}>
                Choose what appears on your Log page and drag to reorder.
              </p>
            </div>
            <button
              onClick={onCancel}
              className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDEAE4] text-[#8A8278] hover:bg-[#E2DDD7] transition-colors"
            >
              <X className="h-3.5 w-3.5"/>
            </button>
          </div>

          {/* Reorderable toggle list */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #EDE9E0", background: "rgba(255,255,255,0.55)" }}
          >
            {draftOrder.map((key, i) => {
              const card = ALL_CARDS.find(c => c.type === key)!;
              const isOn = draftVisible.includes(key);
              const isDragging = draggingKey === key;

              return (
                <div
                  key={key}
                  draggable
                  onDragStart={(e) => handleDragStart(e, key)}
                  onDragOver={(e) => handleDragOver(e, key)}
                  onDragEnd={handleDragEnd}
                  onDrop={(e) => e.preventDefault()}
                  className="flex items-center gap-3 px-4 py-3.5 select-none"
                  style={{
                    borderBottom: i < draftOrder.length - 1 ? "1px solid #EDE9E0" : "none",
                    background: isDragging ? "rgba(255,255,255,0.95)" : "transparent",
                    boxShadow: isDragging ? "0 3px 14px rgba(0,0,0,0.07)" : "none",
                    cursor: "grab",
                    transition: "background 0.15s, box-shadow 0.15s",
                  }}
                >
                  {/* Color dot + card name */}
                  <div
                    className="flex flex-1 items-center gap-3 min-w-0"
                    style={{ opacity: isOn ? 1 : 0.42, transition: "opacity 0.2s" }}
                  >
                    <div
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: card.bg, boxShadow: `0 0 0 1.5px ${card.ink}20` }}
                    />
                    <span
                      className="truncate text-[0.93rem]"
                      style={{ fontFamily: "var(--font-heading)", color: "#2D2926" }}
                    >
                      {card.label}
                    </span>
                  </div>

                  {/* Toggle + drag grip */}
                  <div
                    className="flex shrink-0 items-center gap-2.5"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <div
                      onClick={(e) => { e.stopPropagation(); toggle(key, !isOn); }}
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <Switch
                        checked={isOn}
                        onCheckedChange={(v) => toggle(key, v)}
                      />
                    </div>
                    <GripVertical
                      className="h-4 w-4 shrink-0"
                      style={{ color: "#C4BEB6", cursor: "grab" }}
                      aria-hidden
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Helper note */}
          <p
            className="mt-4 text-center text-xs"
            style={{ fontFamily: "var(--font-body)", color: "#9C9488" }}
          >
            You can change this anytime.
          </p>

          {/* Action buttons */}
          <div className="mt-5 flex flex-col gap-2.5">
            <button
              onClick={() => onSave(draftOrder, draftVisible)}
              className="w-full rounded-2xl py-3.5 text-sm transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                background: "#2F4F45",
                color: "#FAF8F5",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              Save log cards
            </button>
            <button
              onClick={onCancel}
              className="w-full rounded-2xl py-3 text-sm transition-colors hover:text-[#4A4540]"
              style={{ fontFamily: "var(--font-heading)", color: "#7A7268" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Log Page ─────────────────────────────────────────────────────────────────

export function QuickLogScreen() {
  const navigate = useNavigate();

  const [cardOrder, setCardOrder] = useState<CardKey[]>(() => {
    try {
      const s = localStorage.getItem("littlelog-card-order");
      if (s) return JSON.parse(s) as CardKey[];
    } catch {}
    return ALL_CARDS.map(c => c.type);
  });

  const [visibleKeys, setVisibleKeys] = useState<CardKey[]>(() => {
    try {
      const s = localStorage.getItem("littlelog-visible-cards");
      if (s) return JSON.parse(s) as CardKey[];
    } catch {}
    return DEFAULT_VISIBLE;
  });

  const [showCustomize, setShowCustomize] = useState(false);

  const saveCustomize = (order: CardKey[], visible: CardKey[]) => {
    setCardOrder(order);
    setVisibleKeys(visible);
    try {
      localStorage.setItem("littlelog-card-order", JSON.stringify(order));
      localStorage.setItem("littlelog-visible-cards", JSON.stringify(visible));
    } catch {}
    setShowCustomize(false);
  };

  const visibleCards = cardOrder
    .filter(k => visibleKeys.includes(k))
    .map(k => ALL_CARDS.find(c => c.type === k)!);

  return (
    <div className="min-h-screen bg-background pb-36">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 pt-[60px] pb-6">
        <h2
          className="text-[2rem] leading-tight"
          style={{ fontFamily: "var(--font-brand)" }}
        >
          What are we logging?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Quick notes for Max's day.</p>
      </div>

      {/* Grid + footer */}
      <div className="px-5 pt-6 pb-4">
        {/* Log card grid */}
        <div className="grid grid-cols-2 gap-4">
          {visibleCards.map((c) => (
            <button
              key={c.type}
              onClick={() => navigate(`/log/${c.type}`)}
              className="relative overflow-hidden rounded-[24px] p-5 text-left shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 aspect-[7/4]"
              style={{ backgroundColor: c.bg }}
            >
              <CardPattern type={c.type} ink={c.ink}/>

              {/* Label — strongest element on the card */}
              <span
                className="relative z-10 block text-[1.3rem] leading-tight"
                style={{ fontFamily: "var(--font-brand)", color: c.ink, fontWeight: 700 }}
              >
                {c.label}
              </span>

              {/* Arrow — quiet decorative affordance */}
              <span
                className="absolute bottom-2.5 right-2.5 z-10 flex h-5 w-5 items-center justify-center rounded-full"
                style={{ backgroundColor: `rgba(${hexToRgb(c.ink)}, 0.13)` }}
                aria-hidden
              >
                <ArrowUpRight
                  className="h-2.5 w-2.5"
                  style={{ color: c.ink, opacity: 0.4 }}
                  strokeWidth={2.5}
                />
              </span>
            </button>
          ))}
        </div>

        {/* Customize log cards */}
        <button
          onClick={() => setShowCustomize(true)}
          className="mt-6 w-full flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 text-left hover:bg-muted/40 transition-colors"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground"/>
          </div>
          <div className="min-w-0">
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-heading)", color: "var(--foreground)" }}
            >
              Customize log cards
            </p>
            <p
              className="mt-0.5 text-xs text-muted-foreground"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Choose what shows up here.
            </p>
          </div>
          <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/50"/>
        </button>
      </div>

      {/* Customize bottom sheet */}
      <CustomizeSheet
        visible={showCustomize}
        cardOrder={cardOrder}
        visibleCards={visibleKeys}
        onSave={saveCustomize}
        onCancel={() => setShowCustomize(false)}
      />

      <BottomNav currentRoute="/log"/>
    </div>
  );
}
