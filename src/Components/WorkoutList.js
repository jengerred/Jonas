import React from 'react';
import { createContext, useState } from 'react';


const WorkoutContext = createContext();

const WorkoutProvider = function ({ children })  {
    
  const [workout, setWorkout] = useState([
    {
        id: 1,
        title: "At Home Workout For Men No Equipment - Follow Along Workout",
        backdrop_path: "https://www.youtube.com/watch?v=xLpdkNY-RP8&t=7s",
        image: "Workout.png",
        genre: "Workout",
        genreId: 1
      },
      {
        id: 2,
        title: "At Home Workout For Men No Equipment - Follow Along Workout",
        backdrop_path: "https://www.youtube.com/watch?v=xLpdkNY-RP8&t=7s",
        image: "Workout.png",
        genre: "Workout",
        genreId: 1
      },
      {
        id: 3,
        title: "At Home Workout For Men No Equipment - Follow Along Workout",
        backdrop_path: "https://www.youtube.com/watch?v=xLpdkNY-RP8&t=7s",
        image: "Workout.png",
        genre: "Workout",
        genreId: 1
      },
    
    // Add more cards here...
  ]);

  return (
    <WorkoutContext.Provider value={{ workout, setWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutProvider, WorkoutContext };