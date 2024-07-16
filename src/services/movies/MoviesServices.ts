import { api } from "../../api";
import { MovieCredits } from "./CreditsApiModels";
import { Genre, Movie, MoviesResponse } from "./MovieApiModels";
import { MovieDetail } from "./MovieDetailsApiModel";

export async function getNowPlayingMovies() {
  const response = await api.get<MoviesResponse>(
    `movie/now_playing?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.results;
}

export async function getPopularMovies() {
  const response = await api.get<MoviesResponse>(
    `movie/popular?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.results;
}

export async function getTopRatedMovies() {
  const response = await api.get<MoviesResponse>(
    `movie/top_rated?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.results;
}

export async function getGenres() {
  const response = await api.get(
    `/genre/movie/list?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.genres;
}

export async function getMovieDetails(movieId: number) {
  const response = await api.get<MovieDetail>(
    `movie/${movieId}?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data;
}

export async function getSimilarMovies(movieId: number) {
  const response = await api.get<MoviesResponse>(
    `movie/${movieId}/similar?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.results;
}

export async function getCast(movieId: number) {
  const response = await api.get<MovieCredits>(
    `movie/${movieId}/credits?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  return response.data.cast;
}

export async function getSearch(query: string) {
  const response = await api.get<MoviesResponse>(
    `search/movie?api_key=${process.env.EXPO_PUBLIC_API_KEY}&query=${query}`
  );

  if (!response) {
    return null;
  }

  return response.data.results;
}
