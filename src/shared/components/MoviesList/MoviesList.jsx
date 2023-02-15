import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, original_title }) => (
    <Link
      className={styles.item}
      key={id}
      to={`/movie/${id}`}
      state={{ from: location }}
    >
      <li>
        <p className={styles.link}>{original_title}</p>
      </li>
    </Link>
  ));

  return (
    <>
      <ul className={styles.moviesList}>{elements}</ul>
    </>
  );
};

export default memo(MoviesList);

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
