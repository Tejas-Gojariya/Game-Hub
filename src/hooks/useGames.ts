import { useQuery } from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import SearchInput from "../components/SearchInput";

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
      return apiClient
        .get<FetchResponse<Game>, Error>("/games", {
          params: {
            genres: gamesQuery.genre?.id,
            parent_platforms: gamesQuery.platform?.id,
            ordering: gamesQuery.sortOrder,
            search: gamesQuery.searchText, 
          },
        })
        .then(res => res.data);
    },
  });


export default useGames;
