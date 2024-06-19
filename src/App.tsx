import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} bg={"gold"}>
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg={"cornflowerblue"}>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
