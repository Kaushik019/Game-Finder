import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameGridContainer = ({ children }: Props) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding={5}
    >
      {children}
    </SimpleGrid>
  );
};

export default GameGridContainer;
