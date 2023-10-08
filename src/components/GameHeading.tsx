import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../stores/useGameQueryStore";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY="10px" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
