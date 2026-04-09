import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene6Testimonials: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene fade
  const sceneOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Testimonials from the website
  const testimonials = [
    {
      quote: "The olive tree has become the centrepiece of our living space. Guests always assume it's real.",
      author: "Alexandra M.",
      project: "Private Residence, Kensington",
    },
    {
      quote: "Trees that withstand the marine environment without maintenance. Two years on and they still look pristine.",
      author: "James & Partners",
      project: "Superyacht Interior, Monaco",
    },
    {
      quote: "The bespoke trees transformed our atrium into a welcoming space that impresses every client.",
      author: "Sarah L.",
      project: "Corporate HQ, Canary Wharf",
    },
  ];

  // Cycle through testimonials
  const testimonialDuration = 100; // frames per testimonial
  const currentIndex = Math.floor(frame / testimonialDuration) % testimonials.length;
  const localFrame = frame % testimonialDuration;

  const currentTestimonial = testimonials[currentIndex];

  // Animation for current testimonial
  const quoteOpacity = interpolate(localFrame, [0, 20, 80, 100], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  const quoteY = interpolate(localFrame, [0, 20, 80, 100], [30, 0, 0, -30], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        ...centerContent,
        background: `linear-gradient(180deg, ${COLORS.primary} 0%, #1f2d2a 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Decorative quote marks */}
      <div
        style={{
          position: "absolute",
          fontSize: 400,
          fontFamily: FONTS.serif,
          color: COLORS.gold,
          opacity: 0.05,
          top: 50,
          left: 100,
          lineHeight: 1,
        }}
      >
        "
      </div>

      {/* Content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 1000,
          padding: "0 80px",
          opacity: quoteOpacity,
          transform: `translateY(${quoteY}px)`,
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: FONTS.sans,
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.gold,
            display: "block",
            marginBottom: 40,
          }}
        >
          Client Stories
        </span>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: FONTS.serif,
            fontSize: 38,
            fontStyle: "italic",
            color: COLORS.cream,
            lineHeight: 1.5,
            margin: "0 0 50px",
            position: "relative",
          }}
        >
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Gold divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: COLORS.gold,
            margin: "0 auto 30px",
          }}
        />

        {/* Author */}
        <div>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 20,
              fontWeight: 500,
              color: COLORS.cream,
              margin: "0 0 8px",
              letterSpacing: "0.05em",
            }}
          >
            {currentTestimonial.author}
          </p>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 16,
              color: COLORS.goldLight,
              margin: 0,
              letterSpacing: "0.1em",
            }}
          >
            {currentTestimonial.project}
          </p>
        </div>
      </div>

      {/* Progress indicators */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          display: "flex",
          gap: 12,
        }}
      >
        {testimonials.map((_, index) => (
          <div
            key={index}
            style={{
              width: 40,
              height: 3,
              backgroundColor: index === currentIndex ? COLORS.gold : `${COLORS.goldLight}40`,
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
