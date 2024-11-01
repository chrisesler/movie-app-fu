import { tmdb } from "@/lib/tmdb/api";
import { ListPagination } from "@/components/composite/list";
import { TvCard } from "@/components/composite/tv";

interface DetailSimilarProps {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
}

export async function generateMetadata({ params }: DetailSimilarProps) {
  params = await params;
  const { name } = await tmdb.tv.detail({
    id: params.id,
  });

  return {
    title: `Similar - ${name}`,
  };
}

export default async function DetailSimilar({ params, searchParams }: DetailSimilarProps) {
  params = await params;
  searchParams = await searchParams;
  const {
    results: tvShows,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.tv.similar({
    id: params.id,
    page: searchParams.page,
  });

  if (!tvShows?.length) {
    return <div className="empty-box">No recommendations</div>;
  }

  return (
    <div className="space-y-4">
      <section className="grid-list">
        {tvShows.map((tv) => (
          <TvCard key={tv.id} {...tv} />
        ))}
      </section>
      <ListPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
