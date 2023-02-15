import { searchMovies } from 'shared/services/movies-api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';
import MoviesList from 'shared/components/MoviesList/MoviesList';

const MoviesPage = () => {
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
      <MoviesList items={movies} />
      <Outlet />
    </>
  );
};

export default MoviesPage;
