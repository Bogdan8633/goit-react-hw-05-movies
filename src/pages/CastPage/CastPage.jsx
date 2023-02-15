import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'shared/services/movies-api';
import Loader from 'shared/components/Loader/Loader';

import styles from './castPage.module.css';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id, setCast]);

  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.item}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
        alt=""
        width="300px"
      />
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

export default CastPage;
