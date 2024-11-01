import { MediaWatchProviders } from "@/components/composite/media";

interface DetailWatchProps {
  params: {
    id: string;
  };
}

export default function DetailWatch({ params }: DetailWatchProps) {
  return <MediaWatchProviders id={params.id} type="tv" />;
}
