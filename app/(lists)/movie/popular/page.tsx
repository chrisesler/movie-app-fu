import { pages } from "@/config";

import { MovieList } from "@/components/composite/movie";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Popular Movies",
    description: pages.movie.popular.description,
  };
}

export default async function Popular({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <MovieList
      list="popular"
      page={searchParams?.page ?? "1"}
      title={pages.movie.popular.title}
      description={pages.movie.popular.description}
    />
  );
}
