import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCardSkeleton from "./gamecardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

const useGames = (selectedGenre: Genre | null ) => useData<Game>("/games");

export default GameGrid;
