import React from 'react';
import { createContext, useState } from 'react';


const HealthyContext = createContext();

const HealthyProvider = function ({ children })  {
  const [healthy, setHealthy] = useState([
    {
        id: 1,
        title: "How I lose fat and keep muscle | Nutrition 101",
        backdrop_path: "https://www.youtube.com/watch?v=KNQwfd2kLJg",
        image: "HealthyEating.png",
        genre: "Healthy Eating",
        genreId: 2
      },
      {
        id: 2,
        title: "How I lose fat and keep muscle | Nutrition 101",
        backdrop_path: "https://www.youtube.com/watch?v=KNQwfd2kLJg",
        image: "HealthyEating.png",
        genre: "Healthy Eating",
        genreId: 2
      },
     
    
    // Add more cards here...
  ]);

  return (
    <HealthyContext.Provider value={{ healthy, setHealthy}}>
      {children}
    </HealthyContext.Provider>
  );
};

export { HealthyProvider, HealthyContext };