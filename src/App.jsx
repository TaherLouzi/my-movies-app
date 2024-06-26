import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MoviesListPage from './pages/MoviesListPage';
import AddMoviePage from './pages/AddMoviePage';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies/add">ajout film</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MoviesListPage />} />
        <Route path="/movies/add" element={<AddMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
