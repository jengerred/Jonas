import React from 'react';
import { createContext, useState } from 'react';

const GenreContext = createContext();

const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([
    {
      id: 1,
      name: "Workout"
    },
    {
      id: 2,
      name: "Healthy Eating"
    },
    {
      id: 3,
      name: "Music"
    },
    {
      id: 4,
      name: "Movies"
    },
    {
      id: 5,
      name: "Series"
    },
    {
      id: 6,
      name: "Cars"
    },
    {
      id: 7,
      name: "Drama"
    },
    {
      id: 8,
      name: "Family"
    },
    {
      id: 9,
      name: "Fantasy"
    },
    {
      id: 10,
      name: "History"
    },
    {
      id: 11,
      name: "Horror"
    },
    {
      id: 12,
      name: "Music"
    },
    {
      id: 13,
      name: "Mystery"
    },
    {
      id: 14,
      name: "Romance"
    },
    {
      id: 15,
      name: "Science Fiction"
    },
    {
      id: 16,
      name: "TV Movie"
    },
    {
      id: 17,
      name: "Thriller"
    },
    {
      id: 18,
      name: "War"
    },
    {
      id: 19,
      name: "Western"
    }
  ]);

  return (
    <GenreContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenreContext.Provider>
  );
};

export { GenreProvider, GenreContext };