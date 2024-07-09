import { api } from "../../api";
import { Genre, MoviesResponse } from "./MovieApiModels";
import { MovieDetail } from "./MovieDetailsApiModel";

export async function getNowPlayingMovies() {
  const response = await api.get<MoviesResponse>(
    `movie/now_playing?api_key=${process.env.API_KEY}`
  );

  return response.data.results;
}

export async function getPopularMovies() {
  const response = await api.get<MoviesResponse>(
    `movie/popular?api_key=${process.env.API_KEY}`
  );

  return response.data.results;
}

export async function getGenres() {
  const response = await api.get(
    `/genre/movie/list?api_key=${process.env.API_KEY}`
  );

  return response.data.genres;
}

export async function getMovieDetails(movieId: number) {
  const response = await api.get<MovieDetail>(
    `movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  return response.data;
}
