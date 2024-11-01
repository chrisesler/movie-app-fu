import { tmdb } from "@/lib/tmdb/api";
import { Separator } from "@/components/ui/separator";
import { MediaCastCard, MediaCrewCard } from "@/components/composite/media";

interface DetailCreditsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: DetailCreditsProps) {
  params = await params;
  const { name } = await tmdb.tv.detail({
    id: params.id,
  });

  return {
    title: `Credits - ${name}`,
  };
}

export default async function DetailCredits({ params }: { params: { id: string } }) {
  params = await params;
  const { cast, crew } = await tmdb.tv.credits({ id: params.id });

  return (
    <section className="space-y-12">
      {cast.length > 0 ? (
        <div className="grid-list">
          {cast.map((cast) => (
            <MediaCastCard key={cast.credit_id} {...cast} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No cast</div>
      )}

      <Separator />

      {crew.length > 0 ? (
        <div className="grid-list">
          {crew.map((crew) => (
            <MediaCrewCard key={crew.credit_id} {...crew} />
          ))}
        </div>
      ) : (
        <div className="empty-box">No crew</div>
      )}
    </section>
  );
}