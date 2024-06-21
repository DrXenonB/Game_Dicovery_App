import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../Hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = UseGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
