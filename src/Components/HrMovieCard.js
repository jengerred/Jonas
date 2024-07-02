import React from 'react';
import '../MCard.css';
import { MoviesContext } from './CarouselList';
import { useContext, useRef } from 'react';

const IMAGE_BASE_URL = "/";


function HrMovieCard({ movie, index }) {
  const { movies } = useContext(MoviesContext);
  const elementRef = useRef(null);

  return (
    <section className='section' ref={elementRef}>
       {movies.map((movie) => (
         <div key={movie.id}>
    <img src={IMAGE_BASE_URL+movie.image} 
    className='hover-img'/>
    <h2 className='m-title'>{movie.title}</h2>
    </div>
  ))}
    </section>
  )
}

export default HrMovieCard