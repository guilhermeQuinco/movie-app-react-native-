// Interface for a Genre
interface Genre {
  id: number;
  name: string;
}

// Interface for a Production Company
interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

// Interface for a Production Country
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

// Interface for a Spoken Language
interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// Interface for a Collection
interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

// Interface for a Movie
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
