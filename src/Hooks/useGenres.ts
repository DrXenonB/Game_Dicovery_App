import genres from "../Data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => ({ data: genres, error: null, isLoading: false });

export default UseGenres;
