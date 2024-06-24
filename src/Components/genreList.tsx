import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageURL from "../Services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = UseGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageURL(genre.image_background)}
                objectFit="cover"
                boxSize={8}
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
