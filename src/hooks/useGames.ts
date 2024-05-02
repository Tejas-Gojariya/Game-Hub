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
          genres: gamesQuery.genreId,
          parent_platforms: gamesQuery.platformId,
          ordering: gamesQuery.sortOrder,
          search: gamesQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
