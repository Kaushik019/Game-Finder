import {
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre: selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) return null;

  return (
    <>
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
                borderRadius={8}
              />
              <Button
                onClick={() => selectedGenre(genre)}
                variant="link"
                fontSize="lg"
                overflow="hidden"
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
