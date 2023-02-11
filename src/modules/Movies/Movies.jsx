import { useState, useEffect } from 'react';
import MoviesSearchList from './MoviesSearchList/MoviesSearchList';
import Loader from './Loader/Loader';
import { getMostPopular } from 'shared/services/movies-api';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   const [hitsQuantity, setHitsQuantity] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMostPopular();
        setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setLoading, setError, setItems]);

  return (
    <>
      <MoviesSearchList items={items} />
      {error && <h2>{error}</h2>}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
