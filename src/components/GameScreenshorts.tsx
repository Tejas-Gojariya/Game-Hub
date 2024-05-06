import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshort from "../hooks/useScreenshorts";

interface Props {
  gameId: number;
}

const GameScreenshorts = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshort(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshorts;
