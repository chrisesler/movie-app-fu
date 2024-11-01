import { tmdb } from "@/lib/tmdb/api";
import { ListPagination } from "@/components/composite/list";
import { MovieCard } from "@/components/composite/movie";

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
  const { title } = await tmdb.movie.detail({
    id: params.id,
  });

  return {
    title: `Similar - ${title}`,
  };
}

export default async function DetailSimilar({ params, searchParams }: DetailSimilarProps) {
  params = await params;
  const {
    results: movies,
    total_pages: totalPages,
    page: currentPage,
  } = await tmdb.movie.similar({
    id: params.id,
    page: searchParams.page,
  });

  if (!movies?.length) {
    return <div className="empty-box">No recommendations</div>;
  }

  return (
    <div className="space-y-4">
      <section className="grid-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </section>
      <ListPagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
