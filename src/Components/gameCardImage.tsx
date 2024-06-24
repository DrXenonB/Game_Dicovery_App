import { Box, Tag, Image } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import getCroppedImageURL from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCardImage = ({ game }: Props) => {
  const position = game.rating_top;

  const tag = position !== 0 && (
    <Tag position="absolute" top={0} right={0} variant="solid">
      #{game.rating_top}
    </Tag>
  );

  return (
    <Box position="relative">
      <Image
        src={getCroppedImageURL(game.background_image)}
        position="relative"
      />
      {tag}
    </Box>
  );
};

export default GameCardImage;
