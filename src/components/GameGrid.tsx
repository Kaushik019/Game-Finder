import { Box } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCardWrapper from "./GameCardWrapper";
import GameGridContainer from "./GameGridContainer";
import { GameGridSkeleton } from "./GridSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

  if (error) return <p>Unable to Load Games</p>;

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<GameGridSkeleton />}
      endMessage={
        <Box marginBottom={5} textAlign="center">
          <b>Yay! You have seen it all</b>
        </Box>
      }
    >
      {isLoading && <GameGridSkeleton />}
      <GameGridContainer>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardWrapper key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </GameGridContainer>
    </InfiniteScroll>
  );
};

export default GameGrid;
