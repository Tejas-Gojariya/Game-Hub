import useData from "./useData";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: String;
  parent_platforms: { platform: Platforms }[];
}

const useGames = () => useData<Game>("/games" , {genres: select});
export default useGames;
