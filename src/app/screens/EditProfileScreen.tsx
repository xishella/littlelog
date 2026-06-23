import { useNavigate } from "react-router";
import { ChevronLeft, CameraIcon, ChevronDown } from "../components/icons";
import { useApp } from "../state/AppState";

const ROLES = ["Primary caregiver", "Nanny", "Babysitter", "Au pair", "Mom", "Dad", "Grandma", "Grandpa", "Parent", "Family friend"];

const fieldLabel = { margin: "0 0 7px", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 10.5, letterSpacing: ".08em", textTransform: "uppercase", color: "#A39A8C" } as const;
const input = { width: "100%", background: "#FFFCF7", border: "1px solid rgba(44,44,46,.07)", borderRadius: 14, padding: "14px 16px", outline: "none", fontFamily: "var(--body)", fontWeight: 600, fontSize: 15, color: "#2C2C2E" } as const;

export function EditProfileScreen() {
  const navigate = useNavigate();
  const { cgName, cgRole, cgPhone, cgEmail, cgAbout, setProfile } = useApp();
  const cgInitial = (cgName || "A").trim().charAt(0).toUpperCase() || "A";
  const save = () => navigate("/profile");

  return (
    <div className="ll-screen">
      <div style={{ flex: "none", background: "#FFFCF7", borderBottom: "1px solid var(--ll-hairline)", padding: "52px 22px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={save} style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "#F1ECE4", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flex: "none" }}>
          <ChevronLeft />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 600, fontSize: 25, color: "#23303B", lineHeight: 1 }}>Edit my profile</h2>
          <p style={{ margin: "3px 0 0", fontSize: 12, color: "#9A938A" }}>Only you can change your own details.</p>
        </div>
      </div>

      <div className="ll-scroll" style={{ flex: 1, padding: "20px 24px 18px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 92, height: 92, borderRadius: "60% 40% 55% 45%/52% 60% 40% 48%", background: "#FBCC9B", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(251,158,90,.22)" }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 600, fontSize: 46, color: "#2C2C2E" }}>{cgInitial}</span>
            </div>
            <span style={{ position: "absolute", bottom: -2, right: -2, width: 30, height: 30, borderRadius: "50%", background: "#2D5F7B", border: "2.5px solid #FAF6F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CameraIcon />
            </span>
          </div>
          <button style={{ marginTop: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--ui)", fontWeight: 600, fontSize: 13.5, color: "#2D5F7B" }}>Change photo</button>
        </div>

        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <p style={fieldLabel}>Name</p>
            <input type="text" value={cgName} onChange={(e) => setProfile({ cgName: e.target.value })} style={input} />
          </div>
          <div>
            <p style={fieldLabel}>Role / title</p>
            <div style={{ position: "relative" }}>
              <select value={cgRole} onChange={(e) => setProfile({ cgRole: e.target.value })} style={{ ...input, WebkitAppearance: "none", appearance: "none", padding: "14px 42px 14px 16px", cursor: "pointer" }}>
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <ChevronDown style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
            </div>
          </div>
          <div>
            <p style={fieldLabel}>Phone</p>
            <input type="tel" value={cgPhone} onChange={(e) => setProfile({ cgPhone: e.target.value })} style={input} />
          </div>
          <div>
            <p style={fieldLabel}>Email</p>
            <input type="email" value={cgEmail} onChange={(e) => setProfile({ cgEmail: e.target.value })} style={input} />
          </div>
          <div>
            <p style={fieldLabel}>About me · shared with the family</p>
            <textarea value={cgAbout} onChange={(e) => setProfile({ cgAbout: e.target.value })} style={{ ...input, minHeight: 88, resize: "none", fontWeight: 400, fontSize: 14.5, lineHeight: 1.55 }} />
          </div>
        </div>
        <p style={{ margin: "16px 4px 0", fontSize: 12, lineHeight: 1.5, color: "#A39A8C" }}>Your link to Max and the rest of the care team are managed by his parents.</p>
      </div>

      <div style={{ flex: "none", padding: "14px 24px 26px", background: "#FFFCF7", borderTop: "1px solid var(--ll-hairline)" }}>
        <button onClick={save} style={{ width: "100%", background: "#2D5F7B", border: "none", color: "#FAF6F0", padding: 16, borderRadius: 30, fontFamily: "var(--ui)", fontWeight: 600, fontSize: 15.5, cursor: "pointer", boxShadow: "0 10px 24px rgba(45,95,123,.26)" }}>Save profile</button>
      </div>
    </div>
  );
}
