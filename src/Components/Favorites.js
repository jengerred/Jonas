import React from 'react';
import '../MCard.css';
import { FavoritesContext, FavoritesProvider } from './FavoritesList';
import { useContext, useRef } from 'react';
import AddFavorites from './FavoriteAdd';

const IMAGE_BASE_URL = "/";


function FavoritesDisplay() {

  const { favorites } = useContext(FavoritesContext);
  const elementRef = useRef(null);

  return (
    <section className='section' ref={elementRef}>
       {favorites.map((favorites) => (
         <div key={favorites.id} className="fav-card">
    <img src={IMAGE_BASE_URL+favorites.image} onClick={() => window.open(favorites.backdrop_path, '_blank')}
    className='fav-img'/>
    </div>
  ))}
  
 


    </section>
  )
}

export default FavoritesDisplay