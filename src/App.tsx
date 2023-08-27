import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap="1"
    >
      <GridItem area={"nav"} bg="coral">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="skyblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
