"use client";

import dynamic from "next/dynamic";
import "./video-header.scss";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Controls from "./Controls";
import { motion, useAnimate } from "motion/react";
import ReactPlayerType from "react-player";
import { OnProgressProps } from "react-player/base";
import { NavColorContext } from "@/utils/context";
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
  const [videoState, setVideoState] = useState<VideoStateType>({
    isPlaying: true,
    muted: true,
    volume: 0.5,
    progress: 0,
    seeking: false,
    buffer: true,
  });
  const playerRef = useRef<ReactPlayerType>(null);
  const [playerWrapper, animate] = useAnimate();
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navColorCtx = useContext(NavColorContext);
  // const isYoutubeLink = useMemo(() => checkYoutubeLink(url), [url]);

  useEffect(() => {
    if (isPlayerReady) {
      animate(playerWrapper.current, { opacity: 1 }, { duration: 1 });
    }
  }, [animate, isPlayerReady, playerWrapper]);

  const playPauseHandler = useCallback(() => {
    setVideoState((prev) => {
      return { ...prev, isPlaying: !prev.isPlaying };
    });
  }, []);

  const progressHandler = (state: OnProgressProps) => {
    if (!videoState.seeking) {
      setVideoState({ ...videoState, progress: state.played });
    }
  };

  const seekHandler = (e: Event, value: string) => {
    setVideoState({ ...videoState, progress: parseFloat(value) / 100 });
  };

  const setIsMuted = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const seekMouseUpHandler = (e: Event, value: number) => {
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
    }
    sizeVideo();
    window.addEventListener("resize", sizeVideo);
    return () => {
      window.removeEventListener("resize", sizeVideo);
    };
  }, [videoRatio, id]);

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      playerWrapper.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, [isFullscreen, playerWrapper]);

  useEffect(() => {
    function exitHandler() {
      setIsFullscreen((prev) => !prev);
    }
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);

    return () => {
      document.removeEventListener("fullscreenchange", exitHandler);
      document.removeEventListener("webkitfullscreenchange", exitHandler);
      document.removeEventListener("mozfullscreenchange", exitHandler);
      document.removeEventListener("MSFullscreenChange", exitHandler);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      id={id}
      className={`video-header__container ${
        isLandingVideo ? "landing-video" : ""
      } ${objectFit === "cover" && !isFullscreen ? "cover-fit" : ""} ${
        !isClickable ? "no-click" : ""
      } ${cropYoutubeUI ? "crop-youtube-ui" : ""}`}
      ref={playerWrapper}
      onViewportLeave={() => {
        if (isLandingVideo) {
          navColorCtx.setIsNavLight(false);
        }
      }}
      onViewportEnter={() => {
        if (isLandingVideo) {
          navColorCtx.setIsNavLight(true);
        }
      }}
    >
      {showControls ? (
        <Controls
          isPlaying={videoState.isPlaying}
          isFullScreen={isFullscreen}
          onPlayPause={playPauseHandler}
          progress={videoState.progress}
          onSeek={seekHandler}
          onSeekMouseUp={seekMouseUpHandler}
          onMuteChange={setIsMuted}
          muted={videoState.muted}
          onFullScreen={toggleFullscreen}
        />
      ) : null}
      <ReactPlayer
        onReady={() => {
          setTimeout(() => setIsPlayerReady(true), 100);
        }}
        ref={playerRef}
        muted={videoState.muted}
        onProgress={progressHandler}
        volume={videoState.volume}
        controls={false}
        width="100%"
        height="100%"
        playing={videoState.isPlaying}
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
