import React from 'react';
import { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([
    {
        id: 1,
        title: "YouTube",
        backdrop_path: "https://www.youtube.com/",
        image: "YouTube.png",
        genre: "Favorites",
        genreId: 4
      },
      {
        id: 2,
        title: "Pandora",
          backdrop_path: "https://www.pandora.com/account/sign-in",
          image: "Pandora.png",
          genre: "Favorites",
          genreId: 4
      },
      {
        id: 3,
        title: "Disney+",
        backdrop_path: "https://www.disneyplus.com/home",
        image: "Disney+.png",
        genre: "Favorites",
        genreId: 4
      },
 
      {
        id: 4,
        title: "Photo's",
        backdrop_path: "",
        image: "Photo.png",
        genre: "Favorites",
        genreId: 4
      },
    {
      id: 5,
      name: "Series"
    },
    {
      id: 6,
      name: "Cars"
    },
   
  ]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };