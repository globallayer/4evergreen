import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in the scene
  const sceneOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Main question animation
  const questionOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const questionY = interpolate(frame, [20, 50], [40, 0], {
    extrapolateRight: "clamp",
  });

  // Problem items staggered animation
  const problems = [
    "Constant watering and maintenance",
    "Plants that wilt in low-light spaces",
    "Allergies from pollen and mold",
    "Unpredictable seasonal changes",
  ];

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: COLORS.cream,
        opacity: sceneOpacity,
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.goldLight} 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      {/* Content */}
      <div style={{ textAlign: "center", maxWidth: 1200, padding: "0 80px" }}>
        {/* Main Question */}
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 72,
            fontWeight: 400,
            color: COLORS.primary,
            margin: 0,
            marginBottom: 60,
            opacity: questionOpacity,
            transform: `translateY(${questionY}px)`,
            lineHeight: 1.2,
          }}
        >
          Tired of maintaining
          <br />
          <span style={{ fontStyle: "italic", color: COLORS.goldDark }}>
            real plants?
          </span>
        </h2>

        {/* Problem List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          {problems.map((problem, index) => {
            const itemDelay = 60 + index * 30;
            const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 20], [0, 1], {
              extrapolateRight: "clamp",
            });
            const itemX = interpolate(frame, [itemDelay, itemDelay + 20], [-30, 0], {
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  opacity: itemOpacity,
                  transform: `translateX(${itemX}px)`,
                }}
              >
                {/* X icon */}
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#E5D4C3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    color: COLORS.primary,
                    fontWeight: 500,
                  }}
                >
                  x
                </div>
                <span
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 28,
                    color: COLORS.secondary,
                  }}
                >
                  {problem}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
