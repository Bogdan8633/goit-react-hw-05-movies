import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { getMovieById } from 'shared/services/movies-api';

import styles from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [year, setYear] = useState('unknow');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getMovieById(id);
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data);
      }
    };
    fetchMovie();
  }, [id]);

  useEffect(() => {
    if (movie) {
      const genresList = movie.genres;
      const takeGenres = genresList.map(item => item.name).join(', ');
      setGenres(takeGenres);
      const rating = (movie.vote_average * 10).toFixed();
      setUserScore(rating);
      const releaseDate = movie.release_date.slice(0, 4);
      setYear(releaseDate);
    }
  }, [movie]);

  return (
    <>
      <div className={styles.thumb}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt=""
          />
        </div>
        <div className={styles.information}>
          <h2 className={styles.filmTitle}>
            {movie?.original_title}&nbsp;
            <span>({year})</span>
          </h2>
          <p>
            User score: <span>{userScore}%</span>
          </p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={styles.additional}>
        <p>Additional information</p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
    </>
  );
};

export default SingleMoviePage;
