import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from "remotion";
import { COLORS, FONTS, centerContent } from "../styles";

export const Scene4Projects: React.FC = () => {
  const frame = useCurrentFrame();

  // Projects data with actual images
  const projects = [
    {
      name: "Private Residence",
      location: "London",
      type: "Penthouse",
      image: staticFile("images/private-residence-london.jpg"),
    },
    {
      name: "Manor House",
      location: "Cotswolds",
      type: "Heritage Estate",
      image: staticFile("images/manor-cotswolds.jpg"),
    },
    {
      name: "Corporate HQ",
      location: "Zurich",
      type: "Triple-Height Atrium",
      image: staticFile("images/corporate-zurich.jpg"),
    },
    {
      name: "Private Villa",
      location: "Aix-en-Provence",
      type: "Courtyard",
      image: staticFile("images/villa-provence.jpg"),
    },
    {
      name: "Historic Palazzo",
      location: "Tuscany",
      type: "Private Residence",
      image: staticFile("images/residence-tuscany.jpg"),
    },
  ];

  // Scene fade
  const sceneOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Calculate which project to show based on frame (each project shows for ~3 seconds)
  const projectDuration = 90; // frames per project at 30fps = 3 seconds each
  const currentProjectIndex = Math.floor(frame / projectDuration) % projects.length;
  const projectProgress = (frame % projectDuration) / projectDuration;

  // Smooth crossfade between images
  const currentProject = projects[currentProjectIndex];
  const nextProjectIndex = (currentProjectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  // Crossfade timing: start fade at 80% of duration
  const fadeStart = 0.75;
  const nextImageOpacity = projectProgress > fadeStart
    ? interpolate(projectProgress, [fadeStart, 1], [0, 1], { extrapolateRight: "clamp" })
    : 0;

  return (
    <AbsoluteFill
      style={{
        opacity: sceneOpacity,
        backgroundColor: COLORS.primary,
      }}
    >
      {/* Background Image - Current */}
      <Img
        src={currentProject.image}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1 - nextImageOpacity * 0.5,
          transform: `scale(${1 + projectProgress * 0.05})`, // Ken Burns effect
        }}
      />

      {/* Background Image - Next (fading in) */}
      {nextImageOpacity > 0 && (
        <Img
          src={nextProject.image}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: nextImageOpacity,
          }}
        />
      )}

      {/* Dark gradient overlay for text readability */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `linear-gradient(
            to bottom,
            rgba(43, 61, 57, 0.3) 0%,
            rgba(43, 61, 57, 0.1) 40%,
            rgba(43, 61, 57, 0.5) 70%,
            rgba(43, 61, 57, 0.85) 100%
          )`,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.sans,
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.gold,
            opacity: interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp" }),
          }}
        >
          Our Portfolio
        </span>
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 52,
            fontWeight: 400,
            color: COLORS.cream,
            margin: "12px 0 0",
            opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [20, 50], [20, 0], { extrapolateRight: "clamp" })}px)`,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Worldwide Installations
        </h2>
      </div>

      {/* Project Info - Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        {/* Gold border card */}
        <div
          style={{
            display: "inline-block",
            padding: "35px 60px",
            border: `2px solid ${COLORS.gold}`,
            backgroundColor: "rgba(43, 61, 57, 0.85)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Project type label */}
          <span
            style={{
              fontFamily: FONTS.sans,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.gold,
              display: "block",
              marginBottom: 12,
            }}
          >
            {currentProject.type}
          </span>

          {/* Project name */}
          <h3
            style={{
              fontFamily: FONTS.serif,
              fontSize: 40,
              fontWeight: 400,
              color: COLORS.cream,
              margin: "0 0 8px",
            }}
          >
            {currentProject.name}
          </h3>

          {/* Location */}
          <p
            style={{
              fontFamily: FONTS.serif,
              fontSize: 24,
              fontStyle: "italic",
              color: COLORS.goldLight,
              margin: 0,
            }}
          >
            {currentProject.location}
          </p>
        </div>
      </div>

      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
        }}
      >
        {projects.map((_, index) => (
          <div
            key={index}
            style={{
              width: index === currentProjectIndex ? 28 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === currentProjectIndex ? COLORS.gold : "rgba(255,255,255,0.4)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
