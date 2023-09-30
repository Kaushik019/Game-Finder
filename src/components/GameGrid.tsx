import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCardWrapper from "./GameCardWrapper";
import GameGridSkeleton from "./GameGridSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);

  if (error) return <p>{error.message}</p>;

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<GameGridSkeleton isLoading={true} />}
      endMessage={
        <Box marginBottom={5} textAlign="center">
          <b>Yay! You have seen it all</b>
        </Box>
      }
    >
      <GameGridSkeleton isLoading={isLoading}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardWrapper key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </GameGridSkeleton>
    </InfiniteScroll>
  );
};

export default GameGrid;
