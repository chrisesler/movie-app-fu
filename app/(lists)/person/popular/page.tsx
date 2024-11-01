import { pages } from "@/config";

import { PersonList } from "@/components/composite/person";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Popular People",
    description: pages.people.popular.description,
  };
}

export default async function Popular({ searchParams }: ListPageProps) {
  searchParams = await searchParams;
  return (
    <PersonList
      list="popular"
      page={searchParams?.page ?? "1"}
      title={pages.people.popular.title}
      description={pages.people.popular.description}
    />
  );
}
