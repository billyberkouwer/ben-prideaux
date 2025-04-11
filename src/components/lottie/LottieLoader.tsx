"use client";

import { Data, DotLottie, DotLottieReact, Mode } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

function LottieLoader({
  width,
  height,
  isPlaying,
  mode,
  lottieJson,
  loop,
  autoplay,
}: {
  width: number | string;
  height: number | string;
  isPlaying: boolean;
  mode: Mode;
  lottieJson: Data;
  loop?: boolean;
  autoplay: boolean;
}) {
  const [lottie, setLottie] = useState<DotLottie>();

  const lottieRefCallback = (dotLottie: DotLottie) => {
    setLottie(dotLottie);
  };

  useEffect(() => {
    if (lottie) {
      lottie.play();
    }
  }, [isPlaying, lottie]);

  return (
    <div style={{ width: width, height: height }}>
      <DotLottieReact
        dotLottieRefCallback={lottieRefCallback}
        data={lottieJson}
        autoplay={autoplay}
        loop={loop}
        mode={mode}
        speed={6}
      />
    </div>
  );
}

export default LottieLoader;
