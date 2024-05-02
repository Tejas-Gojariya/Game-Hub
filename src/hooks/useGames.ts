import { useQuery } from "@chakra-ui/react";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { platforms } from "./usePlatforms";
import { useInfiniteQuery } from "@tanstack/react-query";

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
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["game", gamesQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gamesQuery.genre?.id,
          parent_platforms: gamesQuery.platform?.id,
          ordering: gamesQuery.sortOrder,
          search: gamesQuery.searchText,
          page: pageParam,
        },
      }), 
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
