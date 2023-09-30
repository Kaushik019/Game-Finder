import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";
import GameCardWrapper from "./GameCardWrapper";

interface Props {
  children?: ReactNode;
  isLoading: boolean;
}

const GameGridSkeleton = ({ children, isLoading }: Props) => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding={5}
    >
      {children ||
        (isLoading &&
          skeletons.map((skeleton) => <GameCardWrapper key={skeleton} />))}
    </SimpleGrid>
  );
};

export default GameGridSkeleton;
