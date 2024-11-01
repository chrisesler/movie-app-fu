import { pages } from "@/config";

import { MovieList } from "@/components/composite/movie";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Top Rated Movies",
    description: pages.movie.topRated.description,
  };
}

export default async function TopRated({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <MovieList
      list="top_rated"
      page={searchParams?.page ?? "1"}
      title={pages.movie.topRated.title}
      description={pages.movie.topRated.description}
    />
  );
}
