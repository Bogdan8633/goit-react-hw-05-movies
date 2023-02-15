import { searchMovies } from 'shared/services/movies-api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'modules/Movies/Loader/Loader';
import styles from './moviesSearchPage.module.css';
import MoviesList from 'shared/components/MoviesList/MoviesList';

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
        <MoviesList items={movies} />
      </ul>
      <Outlet />
    </>
  );
};

export default MoviesSearchPage;
