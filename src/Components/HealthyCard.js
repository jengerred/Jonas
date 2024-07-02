import React from 'react';
import '../MCard.css';
import { HealthyContext } from './HealthyEatingList';
import {useContext, useRef} from 'react';




function HealthyEatingCard() {

  const IMAGE_BASE_URL = "/";

  const { healthy } = useContext(HealthyContext);

  const elementRef = useRef(null);


  return (
   
    <div className="m-container" ref={elementRef}>
      {healthy.map((healthy) => (
        <div key={healthy.id} className="movie-card">
      <img src={IMAGE_BASE_URL + healthy.image} 
        className="poster-image" onClick={() => window.open(healthy.backdrop_path, '_blank')}/>
    
      </div>

        ))}
 </div>

  )
}

export default HealthyEatingCard;


