import { Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import PlatformIconList from "./platformIconList";
import CriticScore from "./criticScore";
import GameCardImage from "./gameCardImage";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <GameCardImage game={game} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <HStack>
              <CriticScore score={game.metacritic} />
            </HStack>
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
