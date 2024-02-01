import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, showLast8Link }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
    {showLast8Link && <Link to="/last8">See Last 8 Movies</Link>}
  </div>
);

export default MovieList;