import UseGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { data } = UseGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
