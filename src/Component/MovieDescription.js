import React from "react";
import { Link } from "react-router-dom";

const MovieDescription = ({ movie }) => (
  <div className="movie-description">
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <iframe
      width="560"
      height="315"
      src={movie.trailerLink}
      title={`${movie.title} Trailer`}
      allowFullScreen
    ></iframe>
    <Link to="/">Back to Home</Link>
  </div>
);

export default MovieDescription;
