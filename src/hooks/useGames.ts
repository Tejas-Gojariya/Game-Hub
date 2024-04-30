import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
 gamesQuery : GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamesQuery.genre?.id,
        platforms: gamesQuery.platform?.id,
      },
    },
    [gamesQuery ]
  );

export default useGames;
