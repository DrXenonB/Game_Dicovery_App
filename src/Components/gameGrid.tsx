import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../Hooks/useGames";
import GameCard from "./gameCard";

const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={"10px"}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
