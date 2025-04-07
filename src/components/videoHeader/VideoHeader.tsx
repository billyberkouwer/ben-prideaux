"use client";

import dynamic from "next/dynamic";
import "./video-header.scss";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { checkYoutubeLink } from "@/utils/reusableFunctions";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoHeader({
  url = "https://www.youtube.com/watch?v=n_CC_FSrRdQ&ab_channel=Arolf",
  videoRatio = 4 / 3
}: {
  url: string;
  videoRatio: number;
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isWindowWide, setIsWindowWide] = useState(false);
  const isYoutubeLink = useMemo(() => checkYoutubeLink(url), [url]);
  const playerRef = useRef(null);
  const playerWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function sizeVideo() {
      setIsWindowWide(window.innerWidth / window.innerHeight >= videoRatio);
      document.documentElement.style.setProperty(
        "--video-ratio",
        `${videoRatio}`
      );
    }
    sizeVideo();
    window.addEventListener("resize", sizeVideo);
    return () => {
      window.removeEventListener("resize", sizeVideo);
    };
  }, [videoRatio]);

  return (
    <div
      className={`video-header__container ${
        isYoutubeLink ? "is-youtube" : ""
      } ${isWindowWide ? "is-wide" : ""}`}
      ref={playerWrapper}
    >
      <ReactPlayer
        ref={playerRef}
        muted={isMuted}
        controls={false}
        width="100%"
        height="100%"
        playing={true}
        loop
        config={{
          youtube: {
            playerVars: { showinfo: 1, disablekb: 1 },
          },
        }}
        url={url}
      />
    </div>
  );
}

export default VideoHeader;
