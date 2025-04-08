"use client";

import dynamic from "next/dynamic";
import "./video-header.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import Controls from "./Controls";
import { motion, useAnimate } from "motion/react";
import ReactPlayerType from "react-player";
import { duration } from "@mui/material";
import { checkYoutubeLink } from "@/utils/reusableFunctions";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoHeader({
  url,
  videoRatio,
  id,
  cropYoutubeUI = false,
  showControls = true,
  isLandingVideo = false,
  isClickable = true,
  objectFit = "contain",
}: {
  url: string;
  videoRatio: { x: number; y: number };
  id: string;
  cropYoutubeUI?: boolean;
  isLandingVideo?: boolean;
  showControls?: boolean;
  isClickable?: boolean;
  objectFit?: "cover" | "contain";
}) {
  const [videoState, setVideoState] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const playerRef = useRef<ReactPlayerType>(null);
  const [playerWrapper, animate] = useAnimate();
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const isYoutubeLink = useMemo(() => checkYoutubeLink(url), [url]);

  useEffect(() => {
    if (isPlayerReady) {
      animate(playerWrapper.current, { opacity: 1 }, { duration: 1 });
    }
  }, [animate, isPlayerReady, playerWrapper]);

  const rewindHandler = () => {
    playerRef.current?.seekTo(playerRef.current?.getCurrentTime() - 5);
  };
  const fastFowardHandler = () => {
    playerRef.current?.seekTo(playerRef.current?.getCurrentTime() + 10);
  };
  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };
  const progressHandler = (state) => {
    if (!videoState.seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };
  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value) / 100 });
  };
  const seekMouseUpHandler = (e, value) => {
    setVideoState({ ...videoState, seeking: false });
    playerRef.current?.seekTo(value / 100);
  };

  useEffect(() => {
    function sizeVideo() {
      document
        .getElementById(id)
        ?.style.setProperty(
          "--video-height",
          `${(Math.round(videoRatio.y) / Math.round(videoRatio.x)) * 100}vw`
        );

      document
        .getElementById(id)
        ?.style.setProperty(
          "--video-width",
          `${(Math.round(videoRatio.x) / Math.round(videoRatio.y) + 1) * 100}vh`
        );

      document
        .getElementById(id)
        ?.style.setProperty(
          "--video-aspect-ratio",
          `${Math.round(videoRatio.x)} / ${Math.round(videoRatio.y)}`
        );

      document
        .getElementById(id)
        ?.style.setProperty(
          "--video-aspect-ratio-number",
          `${Math.round(videoRatio.y) / Math.round(videoRatio.x)}`
        );

        console.log(Math.round(videoRatio.y) / Math.round(videoRatio.x) * 100)
    }
    sizeVideo();
    window.addEventListener("resize", sizeVideo);
    return () => {
      window.removeEventListener("resize", sizeVideo);
    };
  }, [videoRatio, id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      id={id}
      className={`video-header__container ${
        isLandingVideo ? "landing-video" : ""
      } ${objectFit === "cover" ? "cover-fit" : ""} ${
        !isClickable ? "no-click" : ""
      } ${cropYoutubeUI ? "crop-youtube-ui" : ""}`}
      ref={playerWrapper}
    >
      <Controls
        played={videoState.played}
        onPlayPause={playPauseHandler}
        playing={videoState.playing}
        onRewind={rewindHandler}
        onForward={fastFowardHandler}
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
      />
      <ReactPlayer
        onReady={() => {
          setTimeout(() => setIsPlayerReady(true), 500);
        }}
        ref={playerRef}
        muted={videoState.muted}
        onProgress={progressHandler}
        volume={videoState.volume}
        controls={showControls}
        width="100%"
        height="100%"
        playing={videoState.playing}
        loop
        config={{
          youtube: {
            playerVars: { showinfo: 1, disablekb: 1 },
          },
          vimeo: {
            playerOptions: {},
          },
        }}
        url={url}
      />
    </motion.div>
  );
}

export default VideoHeader;
