import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene fade in
  const sceneOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Title animation
  const titleScale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 15 },
  });

  const titleOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Benefits data
  const benefits = [
    { icon: "checkmark", title: "Authentic Trunks", desc: "Genuine preserved wood" },
    { icon: "checkmark", title: "Zero Maintenance", desc: "No watering or pruning" },
    { icon: "checkmark", title: "Hypoallergenic", desc: "Safe for sensitive spaces" },
    { icon: "checkmark", title: "Bespoke Design", desc: "Custom crafted for you" },
  ];

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, #1a2926 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          border: `1px solid ${COLORS.goldLight}`,
          borderRadius: "50%",
          opacity: 0.1,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          border: `1px solid ${COLORS.goldLight}`,
          borderRadius: "50%",
          opacity: 0.05,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div style={{ textAlign: "center", maxWidth: 1400, padding: "0 80px" }}>
        {/* Introducing label */}
        <div
          style={{
            opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [10, 30], [20, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.gold,
            }}
          >
            Introducing
          </span>
        </div>

        {/* Main Title */}
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 80,
            fontWeight: 400,
            color: COLORS.cream,
            margin: "20px 0 30px",
            opacity: titleOpacity,
            transform: `scale(${Math.min(titleScale, 1)})`,
            lineHeight: 1.1,
          }}
        >
          Luxury Semi-Artificial
          <br />
          <span style={{ color: COLORS.gold }}>Trees</span>
        </h2>

        {/* Gold line */}
        <div
          style={{
            width: interpolate(frame, [60, 90], [0, 120], { extrapolateRight: "clamp" }),
            height: 2,
            background: `linear-gradient(90deg, ${COLORS.gold}, ${COLORS.goldHover})`,
            margin: "0 auto 50px",
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontFamily: FONTS.serif,
            fontSize: 32,
            fontStyle: "italic",
            color: COLORS.goldLight,
            marginBottom: 60,
            opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [80, 110], [20, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          Nature meets design. Lasting beauty, zero maintenance.
        </p>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 40,
            marginTop: 20,
          }}
        >
          {benefits.map((benefit, index) => {
            const itemDelay = 120 + index * 40;
            const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 30], [0, 1], {
              extrapolateRight: "clamp",
            });
            const itemY = interpolate(frame, [itemDelay, itemDelay + 30], [30, 0], {
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={index}
                style={{
                  opacity: itemOpacity,
                  transform: `translateY(${itemY}px)`,
                  textAlign: "center",
                }}
              >
                {/* Checkmark circle */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: COLORS.gold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 24,
                    color: COLORS.cream,
                    margin: "0 0 8px",
                    fontWeight: 500,
                  }}
                >
                  {benefit.title}
                </h4>
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 16,
                    color: COLORS.goldLight,
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
