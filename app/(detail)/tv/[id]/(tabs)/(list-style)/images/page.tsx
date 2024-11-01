import { tmdb } from "@/lib/tmdb/api";
import { MediaImages } from "@/components/composite/media";

interface DetailImagesProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: DetailImagesProps) {
  params = await params;
  const { name } = await tmdb.tv.detail({
    id: params.id,
  });

  return {
    title: `Images - ${name}`,
  };
}

export default async function DetailImages({ params }: DetailImagesProps) {
  params = await params;
  const { posters, backdrops } = await tmdb.tv.images({
    id: params.id,
    langs: "en",
  });
  return <MediaImages posters={posters} backdrops={backdrops} />;
}
