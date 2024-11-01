import { MovieWithMediaType, PersonWithMediaType, TvShowWithMediaType } from "@/lib/tmdb/models";

export type SearchResultType = MovieWithMediaType | TvShowWithMediaType | PersonWithMediaType;
