import { api } from "../../api";
import { Genre, MoviesResponse } from "./MovieApiModels";

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
