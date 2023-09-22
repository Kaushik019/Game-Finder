import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre: selectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>

      {isLoading &&
        skeletons.map((skeleton) => (
          <Card key={skeleton} margin="6px" width="90%" height="40px">
            <HStack>
              <Skeleton />
              <CardBody>
                <SkeletonText noOfLines={1} />
              </CardBody>
            </HStack>
          </Card>
        ))}

      <List>
        {genres.map((genre) => (
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
                onClick={() => selectGenre(genre)}
                variant="link"
                fontSize={genre.id === selectedGenre?.id ? "xl" : "lg"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
