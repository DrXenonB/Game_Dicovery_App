import { Box, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import getCroppedImageURL from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCardImage = ({ game }: Props) => {
  const position = game.rating_top;

  const starRating = position !== 0 && (
    <Box position="absolute" top={0} right={0} color="yellow.300" fontSize={12}>
      {"★".repeat(game.rating_top)}
    </Box>
  );

  return (
    <Box position="relative">
      <Image
        src={getCroppedImageURL(game.background_image)}
        position="relative"
      />
      {starRating}
    </Box>
  );
};

export default GameCardImage;
