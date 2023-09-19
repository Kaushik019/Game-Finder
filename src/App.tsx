import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./components/hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap="1"
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList onSelectGenre={(genre) => setselectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
