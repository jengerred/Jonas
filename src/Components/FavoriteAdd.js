import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { FavoritesContext } from './FavoritesList';
import '../MCard.css'

const AddFavorites = () => {
    const [backdropPath, setBackdropPath] = useState('');
    const [image, setImage] = useState('');
    const { setFavorites } = useContext(FavoritesContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newFavorite = {
        id: 6,
        title: 'New Favorite',
        backdrop_path: backdropPath,
        image: image,
        genre: "Favorites",
        genreId: 4
      };
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
      setBackdropPath('');
      setImage('');
    };
 
 
 
  return (
    <form className="add-new" onSubmit={handleSubmit}>
     
      <input
        type="text"
        value={backdropPath}
        onChange={(event) => setBackdropPath(event.target.value)}
        placeholder="Enter Link"
      />
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Enter image URL"
      />
       
      <button  style={{ marginTop: ".6rem", marginLeft: "2rem"}} type="submit">Add Favorite</button>
    </form>
  );

};

export default AddFavorites;