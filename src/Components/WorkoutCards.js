import React from 'react';
import '../MCard.css';
import { WorkoutContext } from './WorkoutList'
import {useContext, useRef} from 'react';



function WorkoutCard() {

  const IMAGE_BASE_URL = "/";

  const { workout } = useContext(WorkoutContext);

  const elementRef = useRef(null);


  return (
   
    <div className="m-container" ref={elementRef}>
      {workout.map((workout) => (
        <div key={workout.id} className="movie-card">
      <img src={IMAGE_BASE_URL + workout.image} 
        className="poster-image" onClick={() => window.open(workout.backdrop_path, '_blank')}/>
    
      </div>

        ))}
 </div>

  )
}

export default WorkoutCard;


