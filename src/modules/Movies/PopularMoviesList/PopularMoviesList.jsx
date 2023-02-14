import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './popularMoviesList.module.css';

const PopularMoviesList = ({ items }) => {
  const elements = items.map(({ id, original_title }) => (
    <Link className={styles.item} key={id} to={`/movie/${id}`}>
      <li>
        <p className={styles.link}>{original_title}</p>
      </li>
    </Link>
  ));

  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.moviesList}>{elements}</ul>
    </>
  );
};

export default memo(PopularMoviesList);

PopularMoviesList.defaultProps = {
  items: [],
};

PopularMoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
