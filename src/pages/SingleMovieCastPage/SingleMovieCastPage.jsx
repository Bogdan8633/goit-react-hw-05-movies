// import CastInfo from '../../modules/Movies/CastInfo/CastInfo';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'shared/services/movies-api';
import Loader from 'modules/Movies/Loader/Loader';

import styles from './singleMovieCastPage.module.css';

const SingleMovieCastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.item}>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt="" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {cast.length !== 0 && <ul className={styles.list}>{elements}</ul>}
    </>
  );
};

export default SingleMovieCastPage;