import { Composition } from "remotion";
import { EverGreenPromo } from "./EverGreenPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="4EverGreenPromo"
        component={EverGreenPromo}
        durationInFrames={1800} // 60 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
