import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import { lazy, Suspense } from 'react';
import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('../pages/MoviesSearchPage/MoviesSearchPage')
);
const MovieDatailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('../pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    // <BrowserRouter basename="/goit-react-hw-05-movies">
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDatailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="/movies-search" element={<MoviesSearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
