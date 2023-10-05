import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGameQueryStore from "../hooks/useGameQueryStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GenreSkeleton } from "./GridSkeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>

      {isLoading && <GenreSkeleton count={20} />}

      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize={genre.id === selectedGenreId ? "xl" : "lg"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
