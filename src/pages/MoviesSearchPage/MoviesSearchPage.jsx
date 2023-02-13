import { searchMovies } from 'shared/services/movies-api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from 'modules/Movies/Loader/Loader';
import styles from './moviesSearchPage.module.css';

const MoviesSearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('moviename');

  useEffect(() => {
    if (movieName === '' || movieName === null) {
      return;
    }

    const fetchMoviesOnSearch = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(movieName);
        setMovies([...data.results]);
        console.log('При запиті нам повертається така data:', data);
        console.log(
          'При запиті нам повертається така data.results:',
          data.results
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesOnSearch();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ moviename: form.elements.moviename.value });
    form.reset();
  };

  return (
    <>
      <h2>Find movie:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviename" />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul className={styles.moviesList}>
        {movies.map(movie => (
          <Link
            className={styles.item}
            key={movie.id}
            to={`/movie/${movie.id}`}
          >
            <li onClick={() => console.log('Клікнули на Li')}>
              <p className={styles.link}>{movie.original_title}</p>
            </li>
          </Link>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesSearchPage;
