import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './index.css';
import Header from './Components/Header';

import Slider from './Components/Carousel';
import { CarouselProvider } from './Components/CarouselList';

import {WorkoutProvider} from './Components/WorkoutList';
import WorkoutDisplay from './Components/WorkoutDisplay';

import {HealthyProvider} from './Components/HealthyEatingList';
import HealthyDisplay from './Components/HealthyDisplay';

import {MoviesProvider} from './Components/MoviesList';
import MoviesDisplay from './Components/MoviesDisplay';

import {FavoritesProvider} from './Components/FavoritesList';
import FavoritesDisplay from './Components/Favorites';


// import ProductionHouse from './Componets/ProductionHouse';





function App() {


  return (
    <div className="app">

      <Header/>
 
      <CarouselProvider>
            <Slider/> 
       </CarouselProvider>

       <FavoritesProvider>
              <FavoritesDisplay/>
        </FavoritesProvider>

        <WorkoutProvider>
              <WorkoutDisplay/>
        </WorkoutProvider>

        <HealthyProvider>
              <HealthyDisplay/>
        </HealthyProvider>
      
        <MoviesProvider>
              <MoviesDisplay/>
        </MoviesProvider>
        
    </div>
  )
}

export default App
