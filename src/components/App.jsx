import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('../pages/MoviesSearchPage/MoviesSearchPage')
);
const SingleMoviePage = lazy(() =>
  import('../pages/SingleMoviePage/SingleMoviePage')
);
const SingleMovieCastPage = lazy(() =>
  import('../pages/SingleMovieCastPage/SingleMovieCastPage')
);
const SingleMovieReviewsPage = lazy(() =>
  import('../pages/SingleMovieReviewsPage/SingleMovieReviewsPage')
);

export const App = () => {
  return (
    //
    // <BrowserRouter>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />}>
            <Route path="cast" element={<SingleMovieCastPage />} />
            <Route path="reviews" element={<SingleMovieReviewsPage />} />
          </Route>
          <Route path="/movies-search" element={<MoviesSearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
