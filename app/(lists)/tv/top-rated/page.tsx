import { pages } from "@/config";

import { TvList } from "@/components/composite/tv";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Top Rated TV Shows",
    description: pages.tv.topRated.description,
  };
}

export default async function TopRated({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <TvList
      list="top_rated"
      page={searchParams?.page ?? "1"}
      title={pages.tv.topRated.title}
      description={pages.tv.topRated.description}
    />
  );
}
