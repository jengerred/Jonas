import React from 'react';
import { createContext, useState } from 'react';


const CarouselContext = createContext();

const CarouselProvider = function ({ children })  {
  const [carousel, setCarousel] = useState([
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
        title: "How I lose fat and keep muscle | Nutrition 101",
        backdrop_path: "https://www.youtube.com/watch?v=KNQwfd2kLJg",
        image: "HealthyEating.png",
        genre: "Healthy Eating",
        genreId: 2
      },
      {
        id: 3,
        title: "The Sandlot",
        backdrop_path: "https://www.disneyplus.com/video/c5ab5416-8f62-460e-936b-56d9749dc3ac?distributionPartner=google",
        image: "TheSandlot.png",
        genre: "Movies",
        genreId: 4
      },
    
    // Add more cards here...
  ]);

  return (
    <CarouselContext.Provider value={{ carousel, setCarousel}}>
      {children}
    </CarouselContext.Provider>
  );
};

export { CarouselProvider, CarouselContext };