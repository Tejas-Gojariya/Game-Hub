import { useQuery } from "@chakra-ui/react";
import APIClient from "../services/api-client";
import { GameQuery } from "../App";
import { platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

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

const useGames = (gamesQuery: GameQuery) =>
  useQuery({
    queryKey: ["game", gamesQuery],
    queryFn: () => {
      return apiClient.getAll({
        params: {
          genres: gamesQuery.genre?.id,
          parent_platforms: gamesQuery.platform?.id,
          ordering: gamesQuery.sortOrder,
          search: gamesQuery.searchText,
        },
      });
    },
  });

export default useGames;
