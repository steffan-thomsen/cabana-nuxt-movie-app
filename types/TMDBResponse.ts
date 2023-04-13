import { Movie } from './Movie';

export type TMDBResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
