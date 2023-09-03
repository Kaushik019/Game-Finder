import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Heading>{game.name}</Heading>
      <CardBody>
        <Image src={game.background_image} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
