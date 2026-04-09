import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene7CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene fade
  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Logo animation
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  // URL animation
  const urlOpacity = interpolate(frame, [40, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const urlY = interpolate(frame, [40, 70], [20, 0], {
    extrapolateRight: "clamp",
  });

  // Button pulse animation
  const pulseProgress = (frame % 60) / 60;
  const pulseScale = 1 + Math.sin(pulseProgress * Math.PI * 2) * 0.02;

  // Gold line width
  const lineWidth = interpolate(frame, [60, 90], [0, 200], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: `radial-gradient(ellipse at 50% 50%, ${COLORS.cream} 0%, ${COLORS.creamDark} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          border: `1px solid ${COLORS.goldLight}`,
          borderRadius: "50%",
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          border: `1px solid ${COLORS.goldLight}`,
          borderRadius: "50%",
          opacity: 0.08,
        }}
      />

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          transform: `scale(${Math.min(logoScale, 1)})`,
        }}
      >
        {/* Logo */}
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: 100,
            fontWeight: 500,
            color: COLORS.primary,
            letterSpacing: "0.05em",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>4</span>
          <span style={{ display: "inline-block", clipPath: "inset(16px 0 16px 0)" }}>
            EverGreen
          </span>
        </h1>

        {/* Gold line */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}, ${COLORS.goldHover}, ${COLORS.gold}, transparent)`,
            margin: "30px auto",
          }}
        />

        {/* CTA Text */}
        <p
          style={{
            fontFamily: FONTS.serif,
            fontSize: 32,
            fontStyle: "italic",
            color: COLORS.secondary,
            margin: "0 0 40px",
            opacity: urlOpacity,
            transform: `translateY(${urlY}px)`,
          }}
        >
          Discover lasting greenery for your space
        </p>

        {/* Website URL Button */}
        <div
          style={{
            opacity: urlOpacity,
            transform: `translateY(${urlY}px) scale(${pulseScale})`,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "20px 60px",
              backgroundColor: COLORS.primary,
              color: COLORS.cream,
              fontFamily: FONTS.sans,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              position: "relative",
            }}
          >
            {/* Gold border accent */}
            <div
              style={{
                position: "absolute",
                inset: -3,
                border: `1px solid ${COLORS.gold}`,
                pointerEvents: "none",
              }}
            />
            4evergreen.co.uk
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.goldDark,
            marginTop: 50,
            opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          The Art of the Semi-Natural Tree
        </p>
      </div>
    </AbsoluteFill>
  );
};
