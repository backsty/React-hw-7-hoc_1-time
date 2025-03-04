export interface VideoItem {
  url: string;
  date: string;
}

export interface DateTimeProps {
  date: string;
}

export interface VideoProps {
  url: string;
  children?: React.ReactNode;
}

export interface VideoListProps {
  list: VideoItem[];
}
