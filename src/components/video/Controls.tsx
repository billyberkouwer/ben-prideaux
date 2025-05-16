import { Slider } from "@mui/material";
import { motion } from "motion/react";
import "./controls.scss";
import {
  Fullscreen,
  FullscreenExit,
  Pause,
  PlayArrow,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Controls({
  onPlayPause,
  isPlaying,
  onFullScreen,
  isFullScreen,
  progress,
  muted,
  onMuteChange,
  onSeek,
  onSeekMouseUp,
}: VideoControlProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controlContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = controlContainerRef.current;
    let timeout: NodeJS.Timeout;

    function mouseMove() {
      setIsVisible(true)
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }

    if (isHovered) {
      container?.addEventListener("mousemove", mouseMove);
    }

    if (!isHovered) {
      container?.removeEventListener("mousemove", mouseMove);
    }

    return () => {
      container?.removeEventListener("mousemove", mouseMove);
    };
  }, [isHovered]);

  return (
    <div
      ref={controlContainerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`control_Container ${isVisible || !isPlaying ? "visible" : ""}`}
    >
      <div className="top_container" />
      <div className="mid__container" onClick={onPlayPause}>
        <div className="icon__btn" onClick={onPlayPause}>
          <AnimatePresence mode="wait">
            {isPlaying ? null : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="central-play-btn"
                key={"central-play-button"}
              >
                <PlayArrow fontSize="large" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="bottom__container">
        <div className="icon__btn" onClick={onPlayPause}>
          {!isPlaying ? (
            <PlayArrow fontSize="medium" />
          ) : (
            <Pause fontSize="medium" />
          )}
        </div>
        <div className="slider__container">
          <Slider
            sx={{
              width: "100%",
              color: "success.main",
              "& .MuiSlider-thumb": {
                borderRadius: "0px",
                display: "none",
              },
              "& .MuiSlider-rail": {
                borderRadius: "0px",
                height: "0.5rem",
                border: "1px var(--background) solid",
                opacity: 1,
                backgroundColor: "rgba(255,255,255,0.25)",
                margin: "0",
              },
              "& .MuiSlider-track": {
                borderRadius: "0px",
                height: "0.5rem",
                margin: "0",
              },
            }}
            min={0}
            max={100}
            value={progress * 100}
            //@ts-expect-error issue with player types
            onChange={onSeek}
            //@ts-expect-error issue with player types
            onChangeCommitted={onSeekMouseUp}
          />
        </div>
        <div className="icon__btn" onClick={onMuteChange}>
          {!muted ? (
            <VolumeUp fontSize="medium" />
          ) : (
            <VolumeOff fontSize="medium" />
          )}
          {/* <div className="volume-slider__container">
                <Slider orientation="vertical" />
              </div> */}
        </div>
        <div className="icon__btn" onClick={onFullScreen}>
          {!isFullScreen ? <Fullscreen /> : <FullscreenExit />}
        </div>
      </div>
    </div>
  );
}
