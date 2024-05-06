import { SimpleGrid, Text } from "@chakra-ui/react";
import Definationitem from "../components/Definationitem";
import CriticScore from "../components/CriticScore";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <Definationitem term="Paltforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </Definationitem>
        <Definationitem term="Metascore">
          <CriticScore score={game.metacritic} />
        </Definationitem>
        <Definationitem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </Definationitem>
        <Definationitem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </Definationitem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
