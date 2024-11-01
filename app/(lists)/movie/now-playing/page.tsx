import { pages } from "@/config";

import { MovieList } from "@/components/composite/movie";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Now Playing Movies",
    description: pages.movie.nowPlaying.description,
  };
}

export default async function NowPlaying({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <MovieList
      list="now_playing"
      page={searchParams?.page ?? "1"}
      title={pages.movie.nowPlaying.title}
      description={pages.movie.nowPlaying.description}
    />
  );
}
