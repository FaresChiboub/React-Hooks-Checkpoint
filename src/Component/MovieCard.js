import React from "react";

const MovieCard = ({ movie }) => {
  // Function to render yellow star icons based on rating
  const renderStars = (rating) => {
    const starCount = Math.round(rating / 2);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(
        <span key={i} style={{ color: "yellow", margin: "0 2px" }}>
          ★
        </span>
      );
    }

    return stars;
  };

  // Function to render grey star icons based on remaining stars
  const renderGreyStars = (rating) => {
    const remainingStars = 5 - Math.round(rating / 2);
    const stars = [];

    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={i} style={{ color: "grey", margin: "0 2px" }}>
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="movie-card">
      {/* Movie poster */}
      <img src={movie.posterURL} alt={movie.title} />

      {/* Movie title and description */}
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>

      {/* Star rating */}
      <div>
        {/* Render yellow stars based on the rating */}
        {renderStars(movie.rating)}
        {/* Render grey stars based on remaining stars */}
        {renderGreyStars(movie.rating)}
      </div>

      {/* Display rating */}
      <p>{movie.rating} Stars</p>

      {/* Watch trailer button */}
      <button
        style={{
          position: "relative",
          left: "5px",
          width: "180px",
          height: "60px",
        }}
        className="trailer glow-on-hover"
        onClick={() => (window.location.href = movie.trailerLink)}
      >
        Watch Trailer
      </button>
    </div>
  );
};

export default MovieCard;
