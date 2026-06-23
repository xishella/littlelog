// Inline SVG icons used across LittleLog, matching the design spec stroke styles.

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

const stroke = (
  size: number,
  color: string,
  sw: number,
  children: React.ReactNode,
  style?: React.CSSProperties
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    {children}
  </svg>
);

export const HomeIcon = ({ size = 23, color = "currentColor", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8.5" />
      <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
    </>
  ), style);

export const LogIcon = ({ size = 23, color = "currentColor", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
      <path d="M12 8.6v6.8M8.6 12h6.8" />
    </>
  ), style);

export const HandoffIcon = ({ size = 23, color = "currentColor", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M21 11.4a8.4 8.4 0 0 1-12.2 7.5L3.5 20.5l1.6-5.2A8.4 8.4 0 1 1 21 11.4z" />
      <path d="M12 14s-2.4-1.5-2.4-3.1A1.5 1.5 0 0 1 12 9.5a1.5 1.5 0 0 1 2.4 1.4C14.4 12.5 12 14 12 14z" />
    </>
  ), style);

export const ProfileIcon = ({ size = 23, color = "currentColor", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18.5a5.6 5.6 0 0 1 11 0" />
    </>
  ), style);

export const PlusIcon = ({ size = 15, color = "currentColor", strokeWidth = 2.2, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M12 6v12M6 12h12" />, style);

export const CheckIcon = ({ size = 12, color = "currentColor", strokeWidth = 3, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M5 13l4 4L19 7" />, style);

export const ChevronLeft = ({ size = 20, color = "#2C2C2E", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M15 6l-6 6 6 6" />, style);

export const ChevronRight = ({ size = 18, color = "#C9C0B4", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M9 6l6 6-6 6" />, style);

export const ChevronDown = ({ size = 18, color = "#9A938A", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M6 9l6 6 6-6" />, style);

export const PencilIcon = ({ size = 15, color = "currentColor", strokeWidth = 1.9, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </>
  ), style);

export const ShareIcon = ({ size = 15, color = "currentColor", strokeWidth = 1.9, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </>
  ), style);

export const AlertIcon = ({ size = 16, color = "currentColor", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M12 9v4M12 17h.01" />
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    </>
  ), style);

export const LockIcon = ({ size = 15, color = "#A39A8C", strokeWidth = 1.9, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ), style);

export const CameraIcon = ({ size = 14, color = "#fff", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ), style);

export const SignOutIcon = ({ size = 24, color = "#E08A6E", strokeWidth = 2, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </>
  ), style);

export const CopyIcon = ({ size = 20, color = "#9A938A", strokeWidth = 1.8, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ), style);

export const PdfIcon = ({ size = 20, color = "#9A938A", strokeWidth = 1.8, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M12 3v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ), style);

export const CloseIcon = ({ size = 15, color = "#6B6357", strokeWidth = 2.4, style }: IconProps) =>
  stroke(size, color, strokeWidth, <path d="M6 6l12 12M18 6L6 18" />, style);

// Solid sparkle (filled).
export const Sparkle = ({ size = 14, color = "#FBCC9B", style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
    <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />
  </svg>
);

export const DragDots = ({ size = 18, color = "#C4BEB6", style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style}>
    <circle cx="9" cy="6" r="1.5" />
    <circle cx="15" cy="6" r="1.5" />
    <circle cx="9" cy="12" r="1.5" />
    <circle cx="15" cy="12" r="1.5" />
    <circle cx="9" cy="18" r="1.5" />
    <circle cx="15" cy="18" r="1.5" />
  </svg>
);

// Camera (tray-style) used in the Photo log flow.
export const CameraGlyph = ({ size = 30, color = "#FFF6EF", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M5 8h2.5l1.3-2h6.4l1.3 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ), style);

// Photo library / gallery icon.
export const LibraryGlyph = ({ size = 30, color = "#7A5A4A", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3 16 4.5-4 3 2.5L15 9l6 6" />
      <circle cx="8.5" cy="9.5" r="1.4" />
    </>
  ), style);

// Flip-camera icon for the camera viewfinder.
export const FlipCameraGlyph = ({ size = 26, color = "rgba(255,246,239,.8)", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <path d="M17 2.1a9.9 9.9 0 1 0 4.9 8.4" />
      <path d="M21 3v5h-5" />
    </>
  ), style);

// Face icon used in the home header avatar.
export const BabyFace = ({ size = 22, color = "#2D5F7B", strokeWidth = 1.7, style }: IconProps) =>
  stroke(size, color, strokeWidth, (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9.5 8.5h.01M14.5 8.5h.01" />
      <path d="M9.8 11.5a3 3 0 0 0 4.4 0" />
      <path d="M5 21c0-3.3 3-5 7-5s7 1.7 7 5" />
    </>
  ), style);
