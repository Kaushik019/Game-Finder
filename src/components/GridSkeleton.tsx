import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import GameCardWrapper from "./GameCardWrapper";
import GameGridContainer from "./GameGridContainer";

interface Props {
  count?: number;
}

const GenreSkeleton = ({ count = 20 }: Props) =>
  Array.from({ length: count }).map((_, index: number) => (
    <Card key={index} margin="6px" width="90%" height="40px">
      <HStack>
        <Skeleton />
        <CardBody>
          <SkeletonText noOfLines={1} />
        </CardBody>
      </HStack>
    </Card>
  ));

const GameGridSkeleton = ({ count = 20 }: Props) => (
  <GameGridContainer>
    {Array.from({ length: count }).map((_, index) => (
      <GameCardWrapper key={index} />
    ))}
  </GameGridContainer>
);

export { GenreSkeleton, GameGridSkeleton };
