import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: String;
}

const useGenres = () =>
  useData<Genre>("/genres", { params: { genres: selectedGenre?.id }},[SelectedGenre.id );

export default useGenres;
