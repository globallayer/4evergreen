import { AbsoluteFill, Sequence } from "remotion";
import { Scene1Logo } from "./scenes/Scene1Logo";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene4Projects } from "./scenes/Scene4Projects";
import { Scene5WhyUs } from "./scenes/Scene5WhyUs";
import { Scene6Testimonials } from "./scenes/Scene6Testimonials";
import { Scene7CTA } from "./scenes/Scene7CTA";

// Scene durations in frames (at 30 fps)
const SCENE_DURATIONS = {
  logo: 150,        // 5 seconds
  problem: 300,     // 10 seconds
  solution: 450,    // 15 seconds
  projects: 450,    // 15 seconds
  whyUs: 300,       // 10 seconds
  testimonials: 300, // 10 seconds (reduced from 15s to fit 60s total)
  cta: 150,         // 5 seconds (reduced from 10s to fit 60s total, still impactful)
};

export const EverGreenPromo: React.FC = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FBF7F4" }}>
      {/* Scene 1: Logo Intro */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.logo}>
        <Scene1Logo />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.logo)}

      {/* Scene 2: Problem Statement */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.problem}>
        <Scene2Problem />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.problem)}

      {/* Scene 3: Solution */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.solution}>
        <Scene3Solution />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.solution)}

      {/* Scene 4: Projects Showcase */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.projects}>
        <Scene4Projects />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.projects)}

      {/* Scene 5: Why Choose Us */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.whyUs}>
        <Scene5WhyUs />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.whyUs)}

      {/* Scene 6: Testimonials */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.testimonials}>
        <Scene6Testimonials />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.testimonials)}

      {/* Scene 7: CTA */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.cta}>
        <Scene7CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
