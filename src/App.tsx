import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/navbar";
import GameGrid from "./Components/gameGrid";
import GenreList from "./Components/genreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/platformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX="15px">
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
