
type VideoStateType = {
  isPlaying: boolean;
  muted: boolean;
  volume: number;
  progress: number;
  seeking: boolean;
  buffer: boolean;
};

type VideoControlProps = {
  onPlayPause: () => void;
  onMuteChange: () => void;
  onFullScreen: () => void;
  isPlaying: boolean;
  isFullScreen: boolean;
  progress: number;
  muted: boolean;
  onSeek: (e: Event, value: string) => void;
  onSeekMouseUp: (e: Event, value: number) => void;
};

type NavContent = {
  title?: string,
  subtitle?: string,
  pageTitle?: string,
}

type NavMenuItem = { title: string, slug: string }