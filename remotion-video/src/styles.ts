// 4EverGreen Brand Colors and Styles
export const COLORS = {
  cream: "#FBF7F4",
  creamDark: "#F5EDE8",
  white: "#FFFFFF",
  primary: "#2B3D39", // Dark green/teal
  secondary: "#5A6A66",
  gold: "#D4B896",
  goldHover: "#C4A67A",
  goldLight: "#E8D9C5",
  goldDark: "#A8926E",
};

export const FONTS = {
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'DM Sans', -apple-system, sans-serif",
};

// Common style objects
export const centerContent: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const fullSize: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

export const headingStyle: React.CSSProperties = {
  fontFamily: FONTS.serif,
  color: COLORS.primary,
  fontWeight: 400,
  margin: 0,
  letterSpacing: "0.01em",
  lineHeight: 1.15,
};

export const bodyTextStyle: React.CSSProperties = {
  fontFamily: FONTS.sans,
  color: COLORS.secondary,
  fontWeight: 400,
  lineHeight: 1.7,
  margin: 0,
};

export const goldAccentLine: React.CSSProperties = {
  width: 80,
  height: 2,
  background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldHover} 50%, ${COLORS.goldDark} 100%)`,
};
