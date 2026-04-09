import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Img, staticFile } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene1Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  const logoOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Tagline fade in
  const taglineOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });

  const taglineY = interpolate(frame, [40, 70], [20, 0], {
    extrapolateRight: "clamp",
  });

  // Gold accent line animation
  const lineWidth = interpolate(frame, [70, 100], [0, 140], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: `radial-gradient(ellipse at 50% 50%, ${COLORS.cream} 0%, ${COLORS.creamDark} 100%)`,
      }}
    >
      {/* Decorative leaf silhouette in background */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: interpolate(frame, [0, 60], [0, 0.03]),
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='50' rx='30' ry='45' fill='%232B3D39' transform='rotate(-30 50 50)'/%3E%3C/svg%3E")`,
          backgroundSize: "400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Logo Container */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Actual Logo Image */}
        <Img
          src={staticFile("images/logo-4evergreen-2048.png")}
          style={{
            width: 320,
            height: "auto",
            marginBottom: 20,
          }}
        />
      </div>

      {/* Gold Accent Line */}
      <div
        style={{
          width: lineWidth,
          height: 2,
          background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldHover}, ${COLORS.goldDark})`,
          marginTop: 10,
          marginBottom: 30,
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontFamily: FONTS.serif,
          fontSize: 38,
          fontStyle: "italic",
          color: COLORS.primary,
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          letterSpacing: "0.02em",
          textAlign: "center",
        }}
      >
        The Art of the Semi-Natural Tree
      </p>
    </AbsoluteFill>
  );
};
