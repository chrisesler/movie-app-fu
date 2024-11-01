import { pages } from "@/config";

import { MovieList } from "@/components/composite/movie";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Upcoming Movies",
    description: pages.movie.upcoming.description,
  };
}

export default async function Upcoming({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <MovieList
      list="upcoming"
      page={searchParams?.page ?? "1"}
      title={pages.movie.upcoming.title}
      description={pages.movie.upcoming.description}
    />
  );
}
