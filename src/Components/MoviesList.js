import React from 'react';
import { createContext, useState } from 'react';


const MoviesContext = createContext();

const MoviesProvider = function ({ children })  {
  const [movies, setMovies] = useState([
    {
        id: 1,
        title: "The Sandlot",
        backdrop_path: "https://www.disneyplus.com/video/c5ab5416-8f62-460e-936b-56d9749dc3ac?distributionPartner=google",
        image: "TheSandlot.png",
        genre: "Movies",
        genreId: 4
      },
      {
        id: 2,
        title: "The Sandlot",
        backdrop_path: "https://www.disneyplus.com/video/c5ab5416-8f62-460e-936b-56d9749dc3ac?distributionPartner=google",
        image: "TheSandlot.png",
        genre: "Movies",
        genreId: 4
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
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };