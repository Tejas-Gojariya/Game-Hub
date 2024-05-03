import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usegameQueryStore from "../store";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = usegameQueryStore((s) => s.gameQuery.genreId);
  const platformId = usegameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenres(genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
