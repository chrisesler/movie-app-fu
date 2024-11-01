import { MediaWatchProviders } from "@/components/composite/media";

interface DetailWatchProps {
  params: {
    id: string;
  };
}

export default async function DetailWatch({ params }: DetailWatchProps) {
  params = await params;
  return <MediaWatchProviders id={params.id} type="tv" />;
}
