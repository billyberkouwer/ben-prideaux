type ProjectListItemType = {
  title: string;
  year: string;
  categories: string[];
  images: string[];
  link: string;
};

type ProjectListItemProps = ProjectListItemType & {
  isList: boolean;
  selectedCategory: string | null | undefined;
};

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
