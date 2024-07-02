import {useContext} from 'react';
import {GenreContext} from './GenreList';
import { MoviesContext } from './CarouselList';
import MovieList from './CarouselDisplay';
import MovieCard from './CarouselCard';


function GenreMovieList() {
  const { genres } = useContext(GenreContext);
  const { movies } = useContext(MoviesContext);

  return (
    <div>
      {genres.map((genre) => (
        <div key={genre.id} className="g-id">
          <h2 className="g-name">{genre.name}</h2>
          {movies
                .filter((movie) => movie.genreId === genre.id)
                .map((movie) => (
            <MovieList />
           
                ))}
        </div>
      ))}
    </div>
  );
}
export default GenreMovieList;