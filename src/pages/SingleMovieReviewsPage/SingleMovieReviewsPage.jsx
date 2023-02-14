import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'shared/services/movies-api';
import Loader from 'modules/Movies/Loader/Loader';

import styles from './singleMovieReviewsPage.module.css';

const SingleMovieReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getReviews(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id, setReviews]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p className={styles.author}>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {reviews.length === 0 ? (
        <h3>We don't have any reviews for this movie</h3>
      ) : (
        <ul className={styles.list}>{elements}</ul>
      )}
    </>
  );
};

export default SingleMovieReviewsPage;
