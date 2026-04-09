import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene5WhyUs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene fade
  const sceneOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Features data
  const features = [
    {
      title: "Artisan Craftsmanship",
      description: "Each tree handcrafted by skilled artisans with decades of expertise",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Premium Materials",
      description: "Genuine preserved wood trunks paired with UV-resistant foliage",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: "Bespoke Design",
      description: "Custom sizes and styles crafted to fit your unique vision",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: COLORS.white,
        opacity: sceneOpacity,
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${COLORS.goldLight}22 1px, transparent 1px),
                            linear-gradient(90deg, ${COLORS.goldLight}22 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      {/* Content */}
      <div style={{ textAlign: "center", maxWidth: 1400, padding: "0 80px" }}>
        {/* Label */}
        <div
          style={{
            opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [10, 30], [20, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.sans,
              fontSize: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.goldDark,
            }}
          >
            Why Choose
          </span>
        </div>

        {/* Main Title */}
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 64,
            fontWeight: 400,
            color: COLORS.primary,
            margin: "15px 0 50px",
            opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [20, 50], [30, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          4EverGreen
        </h2>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 60,
          }}
        >
          {features.map((feature, index) => {
            const itemDelay = 60 + index * 40;
            const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 30], [0, 1], {
              extrapolateRight: "clamp",
            });
            const itemScale = spring({
              frame: frame - itemDelay,
              fps,
              config: { damping: 15 },
            });

            return (
              <div
                key={index}
                style={{
                  opacity: itemOpacity,
                  transform: `scale(${Math.min(itemScale, 1)})`,
                  padding: 40,
                  background: COLORS.cream,
                  position: "relative",
                }}
              >
                {/* Corner accents */}
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: -1,
                    width: 30,
                    height: 30,
                    borderTop: `2px solid ${COLORS.gold}`,
                    borderLeft: `2px solid ${COLORS.gold}`,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: `${COLORS.gold}15`,
                    border: `1px solid ${COLORS.goldLight}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 26,
                    fontWeight: 400,
                    color: COLORS.primary,
                    margin: "0 0 15px",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 16,
                    color: COLORS.secondary,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: FONTS.serif,
            fontSize: 28,
            fontStyle: "italic",
            color: COLORS.primary,
            marginTop: 60,
            opacity: interpolate(frame, [200, 230], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [200, 230], [20, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          "Every trunk tells a story"
        </p>
      </div>
    </AbsoluteFill>
  );
};
