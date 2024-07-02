import React from 'react';
import '../MCard.css';
import { MoviesContext } from './MoviesList'
import {useContext, useRef} from 'react';




function MovieCard() {

  const IMAGE_BASE_URL = "/";

  const { movies } = useContext(MoviesContext);

  const elementRef = useRef(null);


  return (
   
    <div className="m-container" ref={elementRef}>
      {movies.map((movies) => (
        <div key={movies.id} className="movie-card">
      <img src={IMAGE_BASE_URL + movies.image} 
        className="poster-image" onClick={() => window.open(movies.backdrop_path, '_blank')}/>
    
      </div>

        ))}
 </div>

  )
}

export default  MovieCard;


