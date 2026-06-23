import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { BabyFace, Sparkle } from "../components/icons";

const label = { fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13, letterSpacing: ".03em", color: "#7A7268" } as const;

function StatTile({ bg, radius, value, valueColor, name, nameColor, big = 20 }: { bg: string; radius: string; value: string; valueColor: string; name: string; nameColor: string; big?: number }) {
  return (
    <div style={{ background: bg, borderRadius: radius, height: 66, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 700, fontSize: big, color: valueColor, lineHeight: 1 }}>{value}</p>
      <p style={{ margin: "2px 0 0", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, color: nameColor }}>{name}</p>
    </div>
  );
}

export function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="ll-screen">
      {/* header */}
      <div style={{ flex: "none", background: "#FFFCF7", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 24px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E3EEF2", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BabyFace />
            </div>
            <div>
              <h2 style={{ margin: 0, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 18, color: "#2C2C2E" }}>Max</h2>
              <p style={{ margin: "1px 0 0", fontSize: 13, color: "#9A938A" }}>Friday, June 5</p>
            </div>
          </div>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#FBCC9B", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 16, color: "#2C2C2E" }}>A</div>
        </div>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "24px 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#EAF0EC", padding: "6px 13px", borderRadius: 18 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3E9C72" }} />
          <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12, color: "#3E7A5E" }}>Awake &amp; content · 12 min ago</span>
        </div>
        <h1 style={{ margin: "16px 0 0", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 35, lineHeight: 1.12, color: "#23303B" }}>Max is having a gentle, happy day.</h1>
        <p style={{ margin: "11px 0 0", fontSize: 15, lineHeight: 1.6, color: "#6B6357" }}>Three naps, four good feeds, and lots of smiles after lunch. He tried sweet potato for the first time — a hit.</p>

        {/* handoff in-progress card */}
        <div onClick={() => navigate("/handoff")} style={{ marginTop: 22, background: "#2D5F7B", borderRadius: 26, padding: 22, position: "relative", overflow: "hidden", cursor: "pointer" }}>
          <div style={{ position: "absolute", top: -24, right: -24, width: 110, height: 110, borderRadius: "60% 40% 55% 45%/52% 60% 40% 48%", background: "rgba(251,204,155,.18)" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkle />
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#BBD2DF" }}>Today’s handoff · in progress</span>
          </div>
          <p style={{ position: "relative", margin: "14px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: "#EAF1F5" }}>“…happiest after his afternoon nap, and loved stacking his soft blocks.”</p>
          <div style={{ position: "relative", marginTop: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, height: 7, borderRadius: 4, background: "rgba(255,255,255,.18)", overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: "#FBCC9B", borderRadius: 4 }} />
            </div>
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 11.5, color: "#BBD2DF" }}>6 moments</span>
          </div>
          <button onClick={(e) => { e.stopPropagation(); navigate("/handoff"); }} style={{ position: "relative", marginTop: 16, width: "100%", background: "#FAF6F0", border: "none", color: "#2D5F7B", padding: 13, borderRadius: 24, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Preview &amp; share</button>
        </div>

        {/* rhythm */}
        <h3 style={{ margin: "26px 0 0", ...label }}>The day’s rhythm</h3>
        <div style={{ marginTop: 14, background: "#FFFCF7", border: "1px solid rgba(44,44,46,.05)", borderRadius: 24, padding: "20px 18px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#A8B4C8" }} />
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12, color: "#6B6357" }}>Sleep</span>
          </div>
          <div style={{ position: "relative", height: 24, background: "#F4F0EA", borderRadius: 12, marginBottom: 16 }}>
            <div style={{ position: "absolute", left: "20.8%", width: "10.4%", top: 3, bottom: 3, background: "#C5CEDC", borderRadius: 10 }} />
            <div style={{ position: "absolute", left: "50%", width: "10.4%", top: 3, bottom: 3, background: "#C5CEDC", borderRadius: 10 }} />
            <div style={{ position: "absolute", left: "79%", width: "4%", top: 3, bottom: 3, background: "#C5CEDC", borderRadius: 10 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#B8D4D4" }} />
            <span style={{ fontFamily: "var(--ui)", fontWeight: 600, fontSize: 12, color: "#6B6357" }}>Feeds &amp; meals</span>
          </div>
          <div style={{ position: "relative", height: 24, background: "#F4F0EA", borderRadius: 12 }}>
            {[
              { left: "8.3%", bg: "#D5E8E8", bd: "#B8D4D4" },
              { left: "37.5%", bg: "#D5E8E8", bd: "#B8D4D4" },
              { left: "45.8%", bg: "#F5D4BA", bd: "#E8C2A3" },
              { left: "62.5%", bg: "#D5E8E8", bd: "#B8D4D4" },
              { left: "87.5%", bg: "#D5E8E8", bd: "#B8D4D4" },
            ].map((d, i) => (
              <div key={i} style={{ position: "absolute", left: d.left, top: "50%", transform: "translate(-50%,-50%)", width: 15, height: 15, borderRadius: "50%", background: d.bg, border: `2px solid ${d.bd}` }} />
            ))}
          </div>
          <div style={{ position: "relative", height: 16, marginTop: 8 }}>
            {[["0", "7a"], ["25%", "10a"], ["50%", "1p"], ["75%", "4p"], ["right", "7p"]].map(([pos, t], i) => (
              <span key={i} style={{ position: "absolute", ...(pos === "right" ? { right: 0 } : pos === "0" ? { left: 0 } : { left: pos as string, transform: "translateX(-50%)" }), fontSize: 10.5, color: "#B3A998", fontFamily: "var(--ui)" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* today so far */}
        <h3 style={{ margin: "26px 0 0", ...label }}>Today so far</h3>
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          <StatTile bg="#C5CEDC" radius="65% 35% 58% 42%/48% 62% 38% 52%" value="3" valueColor="#3A4256" name="naps" nameColor="#5A647A" />
          <StatTile bg="#D5E8E8" radius="45% 55% 62% 38%/55% 45% 55% 45%" value="4" valueColor="#2F5050" name="feeds" nameColor="#4F6B6B" />
          <StatTile bg="#F5E8B8" radius="58% 42% 45% 55%/62% 50% 50% 38%" value="7" valueColor="#6B5A2A" name="diapers" nameColor="#897A4A" />
          <StatTile bg="#F5D4BA" radius="50% 50% 60% 40%/55% 55% 45% 45%" value="2" valueColor="#6E4327" name="meals" nameColor="#8A6043" />
          <StatTile bg="#E8D4E0" radius="55% 45% 50% 50%/50% 60% 40% 50%" value="Happy" valueColor="#6B3B49" name="mood" nameColor="#896173" big={14} />
          <StatTile bg="#D5E3D0" radius="48% 52% 62% 38%/56% 44% 56% 44%" value="3" valueColor="#44502F" name="notes" nameColor="#647049" />
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
