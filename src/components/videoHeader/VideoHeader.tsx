"use client";

import dynamic from "next/dynamic";
import "./video-header.scss";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { checkYoutubeLink } from "@/utils/reusableFunctions";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoHeader({
  url = "https://youtu.be/3hnix6wDj6w",
  videoRatio = 1,
}: {
  url: string;
  videoRatio?: number;
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [windowAspectRatio, setWindowAspectRatio] = useState(0);
  const isYoutubeLink = useMemo(() => checkYoutubeLink(url), [url]);

  useLayoutEffect(() => {
    function sizeVideo() {

      document.documentElement.style.setProperty(
        "--window-ratio",
        `${(window.innerHeight / window.innerWidth) * (16 / 9)}`
      );
    }

    sizeVideo();
    window.addEventListener("resize", sizeVideo);

    return () => {
      window.removeEventListener("resize", sizeVideo);
    };
  }, [videoRatio]);

  useEffect(() => {
    console.log(windowAspectRatio);
  }, [windowAspectRatio]);

  return (
    <div
      className={`video-header__container ${isYoutubeLink ? "is-youtube" : ""}`}
    >
      <ReactPlayer
        muted={isMuted}
        controls={false}
        width={100 + "%"}
        height={100 + "%"}
        loop
        playing
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
