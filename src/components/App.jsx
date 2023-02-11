import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';

import HomePage from 'modules/Navbar/pages/HomePage/HomePage';
import MoviesPage from 'modules/Navbar/pages/MoviesPage/MoviesPage';
import NotFoundPage from 'modules/Navbar/pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// basename="/goit-react-hw-05-movies"
