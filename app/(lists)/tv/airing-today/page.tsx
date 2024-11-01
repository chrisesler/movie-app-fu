import { pages } from "@/config";

import { TvList } from "@/components/composite/tv";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Airing Today TV Shows",
    description: pages.tv.airingToday.description,
  };
}

export default async function AiringToday({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <TvList
      list="airing_today"
      page={searchParams?.page ?? "1"}
      title={pages.tv.airingToday.title}
      description={pages.tv.airingToday.description}
    />
  );
}
