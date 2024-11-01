import { tmdb } from "@/lib/tmdb/api";
import { VideoList } from "@/components/composite/video";

interface DetailVideosProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: DetailVideosProps) {
  params = await params;
  const { title } = await tmdb.movie.detail({
    id: params.id,
  });

  return {
    title: `Videos - ${title}`,
  };
}

export default function DetailVideos({ params }: DetailVideosProps) {
  return <VideoList type="movie" id={params.id} />;
}
