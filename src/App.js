import React, { useState } from "react";
import moviesData from "./Component/MoviesData";
import Filter from "./Component/Filter";
import MovieList from "./Component/MovieList";

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = (userInput) => {
    const filtered = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <div className="navbar"></div>
      <Filter onSearch={handleSearch} setFilteredMovies={setFilteredMovies} />
      <MovieList
        movies={filteredMovies.length > 0 ? filteredMovies : moviesData}
      />
    </div>
  );
};

export default App;
