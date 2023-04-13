export type Movie = {
  id: number;
  title: string;
  tagline: string;
  release_date: string;
  genres: {
    id: number;
    name: string
  }[];
  runtime: number | null;
  overview: string;
  poster_path: string;
  vote_average: number || null
};
