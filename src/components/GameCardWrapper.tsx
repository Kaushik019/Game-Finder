import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Game } from "../hooks/useGames";

interface Props {
  game?: Game;
}

const GameCardWrapper = ({ game }: Props) => (
  <GameCardContainer key={game?.id}>
    {game ? <GameCard game={game} /> : <GameCardSkeleton />}
  </GameCardContainer>
);

export default GameCardWrapper;
