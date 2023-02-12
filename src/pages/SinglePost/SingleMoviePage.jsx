import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieById } from 'shared/services/movies-api';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result);
        // console.log('це movie', movie);
      } catch ({ response }) {
        console.log(response.data);
      }
    };
    fetchMovie();
  }, [id]);

  console.log('це movie', movie);

  useEffect(() => {
    if (movie) {
      const genresList = movie.genres;
      const takeGenres = genresList.map(item => item.name).join(', ');
      setGenres(takeGenres);
    }
  }, [movie]);

  return (
    <>
      <div>
        <div>Picture</div>
        {/* <img src={movie?.backdrop_path} alt="" /> */}
        <h2>{movie?.original_title}</h2>
        <p>
          User score: <span>100%</span>
        </p>
        <h3>Overview</h3>
        <p>{movie?.overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
      <div>
        <p>Additional information</p>
        <p>Cast</p>
        <p>Reviews</p>
      </div>
    </>
  );
};

export default SingleMoviePage;
