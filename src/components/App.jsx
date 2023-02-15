import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import Loader from 'modules/Movies/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('../pages/MoviesSearchPage/MoviesSearchPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCastPage = lazy(() =>
  import('../pages/SingleMovieCastPage/SingleMovieCastPage')
);
const SingleMovieReviewsPage = lazy(() =>
  import('../pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesSearchPage from 'pages/MoviesSearchPage/MoviesSearchPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
// import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
// import SingleMovieCastPage from 'pages/SingleMovieCastPage/SingleMovieCastPage';
// import SingleMovieReviewsPage from 'pages/SingleMovieReviewsPage/SingleMovieReviewsPage';

export const App = () => {
  return (
    // <BrowserRouter basename="/goit-react-hw-05-movies">
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<SingleMovieCastPage />} />
            <Route path="reviews" element={<SingleMovieReviewsPage />} />
          </Route>
          <Route path="/movies-search" element={<MoviesSearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

// basename="/goit-react-hw-05-movies"
