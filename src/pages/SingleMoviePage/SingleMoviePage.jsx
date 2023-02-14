import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import Loader from 'modules/Movies/Loader/Loader';
import { getMovieById } from 'shared/services/movies-api';

import styles from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [year, setYear] = useState('unknow');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMovieById(id);
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data);
      } finally {
        setLoading(false);
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

  const goBack = useCallback(() => navigate(-1), [navigate]);

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {loading && <Loader />}
      <div className={styles.thumb}>
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt=""
            />
          </div>
        )}

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
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default SingleMoviePage;
