import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';

import HomePage from 'pages/HomePage/HomePage';
import MoviesSearchPage from 'pages/MoviesSearchPage/MoviesSearchPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SingleMoviePage from 'pages/SingleMoviePage/SingleMoviePage';
import CastPage from 'pages/CastPage/CastPage';

export const App = () => {
  return (
    // <BrowserRouter>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
        </Route>
        <Route path="/movies-search" element={<MoviesSearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// basename="/goit-react-hw-05-movies"
