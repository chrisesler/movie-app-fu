import { tmdb } from "@/lib/tmdb/api";
import { VideoList } from "@/components/composite/video";

interface VideosProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: VideosProps) {
  const { name } = await tmdb.tv.detail({
    id: params.id,
  });

  return {
    title: `Videos - ${name}`,
  };
}

export default async function DetailVideos({ params }: VideosProps) {
  return <VideoList type="tv" id={params.id} />;
}
