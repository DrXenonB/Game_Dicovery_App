import UseGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { genres } = UseGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
