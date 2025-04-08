import { Slider } from "@mui/material";
import "./controls.scss";
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeUp,
} from "@mui/icons-material";

export default function Controls({
  onPlayPause,
  playing,
  played,
  onRewind,
  onForward,
  onSeek,
  onSeekMouseUp,
}) {
  return (
    <div className="control_Container">
      <div className="top_container" />
      <div className="mid__container" onClick={onPlayPause}>
        {/* <div className="icon__btn" onClick={onRewind}>
          <FastRewind fontSize="medium" />
        </div>
        <div className="icon__btn" onClick={onPlayPause}>
          {playing ? (
            <Pause fontSize="medium" />
          ) : (
            <PlayArrow fontSize="medium" />
          )}
        </div>
        <div className="icon__btn" onClick={onForward}>
          <FastForward fontSize="medium" />
        </div> */}
      </div>
      <div className="bottom__container">
        <div className="icon__btn" onClick={onPlayPause}>
          {!playing ? (
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
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
          />
        </div>
        <div className="icon__btn">
          <VolumeUp fontSize="medium" />
          {/* <div className="volume-slider__container">
                <Slider orientation="vertical" />
              </div> */}
        </div>
      </div>
    </div>
  );
}
