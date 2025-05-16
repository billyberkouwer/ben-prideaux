"use client";

import {
  Data,
  DotLottie,
  DotLottieReact,
  Mode,
} from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

function LottieLoader({
  width,
  height,
  speed = 1,
  play = true,
  mode = "forward",
  lottieJson,
  loop = false,
  autoplay = false,
  setFrame,
  onEnded,
}: {
  width: number | string;
  height: number | string;
  lottieJson: Data | null;
  speed?: number;
  play?: boolean | string;
  mode?: Mode;
  loop?: boolean;
  autoplay?: boolean;
  setFrame?: (lottie: DotLottie) => void;
  onEnded?: () => void;
}) {
  const [lottie, setLottie] = useState<DotLottie>();
  const lottieRefCallback = (dotLottie: DotLottie) => {
    setLottie(dotLottie);
  };

  useEffect(() => {
    if (onEnded && lottie) {
      lottie?.addEventListener("complete", onEnded);
    }

    return () => {
      lottie?.removeEventListener("complete", onEnded);
    };
  }, [lottie, onEnded]);

  useEffect(() => {
    if (lottie && play) {
      lottie.play();
    }
  }, [play, lottie]);

  useEffect(() => {
    if (lottie && setFrame) {
      setFrame(lottie);
    }
  }, [lottie, setFrame]);

  return (
    <div style={{ width: width, height: height }}>
      {lottieJson ? (
        <DotLottieReact
          dotLottieRefCallback={lottieRefCallback}
          data={lottieJson}
          autoplay={autoplay}
          loop={loop}
          mode={mode}
          speed={speed}
          onEnded={onEnded}
        />
      ) : null}
    </div>
  );
}

export default LottieLoader;
