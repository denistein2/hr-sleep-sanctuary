import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  videoId: string;
  title: string;
  poster?: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault";
};

export function YouTubeFacade({ videoId, title, poster = "maxresdefault" }: Props) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        poster={poster}
        webp
        noCookie
      />
    </div>
  );
}
