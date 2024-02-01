import React, { useState } from "react";
import moviesData from "./MoviesData";

const Filter = ({ onSearch, setFilteredMovies }) => {
 
  const [rating, setRating] = useState(0);

 
  const handleStarClick = (starRating) => {
    console.log('Clicked Star Rating:', starRating);
    setRating(starRating);
    
    
    const filtered = moviesData.filter((movie) => Math.round(movie.rating / 2) === starRating);
    console.log('Filtered Movies:', filtered);
    setFilteredMovies(filtered);
  };

  // Function to reset filter
  const handleReset = () => {
    setRating(0);
    setFilteredMovies([]);
  };

  return (
    <div className="filter-container">
      {/* Logo and title */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img 
          src="https://icon-library.com/images/movie-app-icon/movie-app-icon-6.jpg" 
          alt="Movie App Logo" 
          style={{ width: '50px', height: '50px' }} 
        />
        <span style={{ color: 'white', fontSize: '24px', marginLeft: '5px' }}>Movie App</span>
      </div>
      
      
      <input 
        type="text"
        placeholder="Search by text..."
        onChange={(event) => {
          const userInput = event.target.value;
          onSearch(userInput);
        }}
      />
      
      
      <div>
        
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            <span
             
              style={{ color: index < rating ? 'yellow' : 'grey', cursor: 'pointer' }}
              onClick={() => handleStarClick(index + 1)}
            >
              ★
            </span>
            
            {index === 4 && <span style={{ color: 'darkred', position: "relative", bottom: "50px", left: "-195px" }}>Filter by stars</span>}
          </span>
        ))}
        
        <button 
          className="glow-on-hover" 
          onClick={handleReset} 
          style={{ marginLeft: '10px', color: 'red' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
