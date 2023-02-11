import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './moviesSearchList.module.css';

const MoviesSearchList = ({ items }) => {
  const elements = items.map(({ id, original_title }) => (
    <li onClick={() => console.log('Клікнули на Li')} id={id}>
      <p>{original_title}</p>
    </li>
  ));

  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.moviesList}>{elements}</ul>
    </>
  );
};

export default memo(MoviesSearchList);

MoviesSearchList.defaultProps = {
  items: [],
};

MoviesSearchList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
