import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { ChevronLeft, AlertIcon, PlusIcon } from "../components/icons";
import { CameraGlyph, LibraryGlyph, FlipCameraGlyph } from "../components/icons";
import { Toggle } from "../components/Toggle";
import { CFG, PHOTO_POOL, type LogType } from "../data/mock";
import { useApp } from "../state/AppState";

const fieldCard = { background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 20, padding: "16px 18px" } as const;
const fieldLabel = { margin: "0 0 6px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" } as const;
const fieldInput = { width: "100%", border: "none", background: "transparent", outline: "none", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 18, color: "#2C2C2E" } as const;

export function LogDetailScreen() {
  const { type } = useParams<{ type: LogType }>();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { sel, toggleOpt, saveDetail } = useApp();
  const [fieldText, setFieldText] = useState("");

  // Photo log flow (local to this screen).
  const [photos, setPhotos] = useState<string[]>(() => PHOTO_POOL.slice(0, 2));
  const [photoInHandoff, setPhotoInHandoff] = useState(true);
  const [photoSheet, setPhotoSheet] = useState(false);
  const [photoView, setPhotoView] = useState<"camera" | "gallery" | null>(null);
  const capturePhoto = () => {
    const next = PHOTO_POOL.find((p) => !photos.includes(p)) ?? PHOTO_POOL[photos.length % PHOTO_POOL.length];
    setPhotos((p) => [...p, next]);
    setPhotoView(null);
  };
  const pickPhoto = (src: string) => {
    setPhotos((p) => (p.includes(src) ? p : [...p, src]));
    setPhotoView(null);
  };
  const camBg = PHOTO_POOL[photos.length % PHOTO_POOL.length];

  const cfg = type ? CFG[type] : undefined;
  if (!type || !cfg) {
    navigate("/log", { replace: true });
    return null;
  }

  const fromHandoff = params.get("from") === "handoff";
  const purpose = (params.get("purpose") as "note" | "update" | null) ?? null;

  const saveLabel = fromHandoff
    ? purpose === "update"
      ? "Add to handoff"
      : "Add note to handoff"
    : cfg.save;

  const back = () => navigate(fromHandoff ? "/handoff" : "/log");
  const onSave = () => {
    const routed = saveDetail(type, fromHandoff ? purpose : null, fieldText);
    navigate(routed ? "/handoff" : "/log");
  };

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: cfg.bg, padding: "52px 22px 18px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={back} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(255,255,255,.55)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 27, color: "#23303B" }}>{cfg.title}</h2>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "18px 22px", display: "flex", flexDirection: "column", gap: 13 }}>
        {cfg.times === "range" && (
          <div style={{ display: "flex", gap: 13 }}>
            <div style={{ ...fieldCard, flex: 1 }}>
              <p style={{ ...fieldLabel, margin: "0 0 7px" }}>Start</p>
              <input type="time" defaultValue="13:00" style={fieldInput} />
            </div>
            <div style={{ ...fieldCard, flex: 1 }}>
              <p style={{ ...fieldLabel, margin: "0 0 7px" }}>End</p>
              <input type="time" defaultValue="14:15" style={fieldInput} />
            </div>
          </div>
        )}

        {cfg.amountOz && (
          <div style={fieldCard}>
            <p style={fieldLabel}>Amount (oz)</p>
            <input type="number" defaultValue={6} style={{ ...fieldInput, fontFamily: "var(--serif)", fontWeight: 700, fontSize: 34 }} />
          </div>
        )}

        {cfg.foodText && (
          <div style={fieldCard}>
            <p style={fieldLabel}>Food</p>
            <input type="text" placeholder="Sweet potato puree" style={fieldInput} />
          </div>
        )}

        {cfg.times === "single" && (
          <div style={fieldCard}>
            <p style={fieldLabel}>Time</p>
            <input type="time" defaultValue="14:30" style={fieldInput} />
          </div>
        )}

        {cfg.groups?.map((group) => (
          <div key={group.label || "g"} style={fieldCard}>
            {group.label && <p style={{ ...fieldLabel, margin: "0 0 12px" }}>{group.label}</p>}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.options.map((opt) => {
                const isSel = sel[`${type}:${group.label}`] === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => toggleOpt(type, group.label, opt)}
                    style={{
                      padding: "9px 16px",
                      borderRadius: 18,
                      fontFamily: "var(--ui)",
                      fontWeight: 600,
                      fontSize: 13.5,
                      cursor: "pointer",
                      ...(isSel
                        ? { background: cfg.accent, color: "#FFF9F0", border: `1.5px solid ${cfg.accent}` }
                        : { background: "#F1ECE4", color: "#6B6357", border: "1.5px solid transparent" }),
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {cfg.medName && (
          <div style={fieldCard}>
            <p style={fieldLabel}>Or enter manually</p>
            <input type="text" placeholder="Medicine name" style={fieldInput} />
          </div>
        )}

        {cfg.dose && (
          <div style={fieldCard}>
            <p style={fieldLabel}>Dose given</p>
            <input type="text" placeholder="e.g. 2.5 mL" style={fieldInput} />
          </div>
        )}

        {cfg.isPhoto && (
          <>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setPhotoView("camera")} style={{ flex: 1, background: "#7A5A4A", border: "none", borderRadius: 20, padding: "22px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer", boxShadow: "0 9px 22px rgba(122,90,74,.28)" }}>
                <CameraGlyph />
                <span style={{ fontFamily: "var(--ui)", fontWeight: 500, fontSize: 14.5, color: "#FFF6EF" }}>Take a photo</span>
              </button>
              <button onClick={() => setPhotoView("gallery")} style={{ flex: 1, background: "#FFFCF7", border: "1.5px solid rgba(122,90,74,.28)", borderRadius: 20, padding: "22px 14px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <LibraryGlyph />
                <span style={{ fontFamily: "var(--ui)", fontWeight: 500, fontSize: 14.5, color: "#7A5A4A" }}>From library</span>
              </button>
            </div>

            <div style={fieldCard}>
              <p style={{ margin: "0 0 11px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" }}>Today’s photos</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9 }}>
                {photos.map((src, i) => (
                  <div key={i} style={{ width: "100%", height: 92, borderRadius: 16, overflow: "hidden", backgroundColor: "#F1E6DF", backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                ))}
                <button onClick={() => setPhotoSheet(true)} style={{ width: "100%", height: 92, borderRadius: 16, border: "1.6px dashed #D8C6BA", background: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer" }}>
                  <PlusIcon size={20} color="#A98E7E" strokeWidth={2} />
                  <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, color: "#A98E7E" }}>Add</span>
                </button>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 12, color: "#A39A8C", lineHeight: 1.45 }}>Saved to Max’s photo album — only you and his family can see them.</p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 20, padding: "15px 18px" }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14.5, color: "#2C2C2E" }}>Include in today’s handoff</p>
                <p style={{ margin: "2px 0 0", fontSize: 12.5, color: "#A39A8C" }}>Add these photos to the note for the parents.</p>
              </div>
              <Toggle on={photoInHandoff} onToggle={() => setPhotoInHandoff((v) => !v)} />
            </div>

            <div style={fieldCard}>
              <p style={{ ...fieldLabel, margin: "0 0 8px" }}>Caption (optional)</p>
              <textarea placeholder="A little about these moments…" style={{ width: "100%", minHeight: 46, border: "none", background: "transparent", outline: "none", resize: "none", fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.55, color: "#2C2C2E" }} />
            </div>
          </>
        )}

        {cfg.isUpdate && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#FBEAD6", borderRadius: 16, padding: "12px 15px" }}>
            <AlertIcon color="#C77F3E" />
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13, color: "#9C5A33", lineHeight: 1.35 }}>Flagged for Mom &amp; Dad to see first in the handoff.</span>
          </div>
        )}

        {(cfg.isNote || cfg.isUpdate) && (
          <div style={{ ...fieldCard, minHeight: 160 }}>
            <textarea
              value={fieldText}
              onChange={(e) => setFieldText(e.target.value)}
              placeholder={cfg.isUpdate ? "What should Mom & Dad know right away?" : "Type a quick note to pass along…"}
              style={{ width: "100%", minHeight: 128, border: "none", background: "transparent", outline: "none", resize: "none", fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.6, color: "#2C2C2E" }}
            />
          </div>
        )}

        {cfg.notesLabel && (
          <div style={fieldCard}>
            <p style={{ ...fieldLabel, margin: "0 0 8px" }}>{cfg.notesLabel}</p>
            <textarea placeholder="Add any details…" style={{ width: "100%", minHeight: 52, border: "none", background: "transparent", outline: "none", resize: "none", fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.55, color: "#2C2C2E" }} />
          </div>
        )}
      </div>

      <div style={{ flex: "none", padding: "14px 22px", background: "#FFFCF7", borderTop: "1px solid var(--ll-hairline)" }}>
        <button onClick={onSave} style={{ width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 16, borderRadius: 30, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, cursor: "pointer", boxShadow: "0 10px 24px rgba(45,95,123,.26)" }}>{saveLabel}</button>
      </div>

      {/* Add-a-photo bottom sheet */}
      {photoSheet && (
        <div onClick={() => setPhotoSheet(false)} style={{ position: "absolute", inset: 0, background: "rgba(35,30,25,.34)", display: "flex", alignItems: "flex-end", zIndex: 40 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", background: "#F3F1F0", borderRadius: "26px 26px 0 0", padding: "10px 16px 30px" }}>
            <div style={{ width: 40, height: 5, borderRadius: 3, background: "#D8D0C4", margin: "6px auto 16px" }} />
            <p style={{ textAlign: "center", margin: "0 0 14px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" }}>Add a photo</p>
            <button onClick={() => { setPhotoSheet(false); setPhotoView("camera"); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.06)", borderRadius: 18, padding: "16px 18px", marginBottom: 10, cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#7A5A4A", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><CameraGlyph size={21} /></span>
              <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, color: "#2C2C2E" }}>Take a photo</span>
            </button>
            <button onClick={() => { setPhotoSheet(false); setPhotoView("gallery"); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.06)", borderRadius: 18, padding: "16px 18px", marginBottom: 14, cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#ECDCD4", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><LibraryGlyph size={21} /></span>
              <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, color: "#2C2C2E" }}>Choose from library</span>
            </button>
            <button onClick={() => setPhotoSheet(false)} style={{ width: "100%", background: "none", border: "none", padding: 13, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, color: "#8A8276", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Camera viewfinder */}
      {photoView === "camera" && (
        <div style={{ position: "absolute", inset: 0, background: "#1A1614", zIndex: 50, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: "none", padding: "50px 22px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button onClick={() => setPhotoView(null)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, color: "#FFF6EF" }}>Cancel</button>
            <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12, letterSpacing: ".06em", color: "rgba(255,246,239,.7)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F5C24B" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>PHOTO
            </span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFF6EF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l3-3h12l3 3M3 7v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7h18" /><path d="M16 5l-1.5-2h-5L8 5" /></svg>
          </div>
          <div style={{ flex: 1, margin: "6px 14px", borderRadius: 24, overflow: "hidden", position: "relative", backgroundImage: `url('${camBg}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.06) 30%,rgba(0,0,0,.22))" }} />
            <div style={{ position: "absolute", top: 14, left: 14, width: 26, height: 26, borderLeft: "2px solid rgba(255,255,255,.7)", borderTop: "2px solid rgba(255,255,255,.7)", borderRadius: "4px 0 0 0" }} />
            <div style={{ position: "absolute", top: 14, right: 14, width: 26, height: 26, borderRight: "2px solid rgba(255,255,255,.7)", borderTop: "2px solid rgba(255,255,255,.7)", borderRadius: "0 4px 0 0" }} />
            <div style={{ position: "absolute", bottom: 14, left: 14, width: 26, height: 26, borderLeft: "2px solid rgba(255,255,255,.7)", borderBottom: "2px solid rgba(255,255,255,.7)", borderRadius: "0 0 0 4px" }} />
            <div style={{ position: "absolute", bottom: 14, right: 14, width: 26, height: 26, borderRight: "2px solid rgba(255,255,255,.7)", borderBottom: "2px solid rgba(255,255,255,.7)", borderRadius: "0 0 4px 0" }} />
          </div>
          <div style={{ flex: "none", padding: "18px 0 46px", display: "flex", alignItems: "center", justifyContent: "center", gap: 54 }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,246,239,.8)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l3-3h12l3 3M3 7v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7h18" /><circle cx="12" cy="13" r="3.4" /></svg>
            <button onClick={capturePhoto} style={{ width: 74, height: 74, borderRadius: "50%", background: "#FFF6EF", border: "4px solid rgba(255,255,255,.45)", cursor: "pointer", boxShadow: "0 0 0 3px rgba(0,0,0,.25)" }} />
            <FlipCameraGlyph />
          </div>
        </div>
      )}

      {/* Gallery picker */}
      {photoView === "gallery" && (
        <div style={{ position: "absolute", inset: 0, background: "#FAF6F0", zIndex: 50, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: "none", padding: "50px 22px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--ll-hairline)" }}>
            <button onClick={() => setPhotoView(null)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15, color: "#2D5F7B" }}>Cancel</button>
            <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 21, color: "#23303B" }}>Recents</span>
            <span style={{ width: 48 }} />
          </div>
          <div className="ll-scroll" style={{ flex: 1, padding: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
              {PHOTO_POOL.map((src) => (
                <button key={src} onClick={() => pickPhoto(src)} style={{ aspectRatio: "1 / 1", padding: 0, border: "none", cursor: "pointer", backgroundColor: "#F1E6DF", backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
