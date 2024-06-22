import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import UseGenres from "../Hooks/useGenres";
import getCroppedImageURL from "../Services/image-url";

const GenreList = () => {
  const { data } = UseGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize={8}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
