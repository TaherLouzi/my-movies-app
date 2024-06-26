import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const MoviesListPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7062/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('erreur recup films!', error);
      });
  }, []);

  return (
    <div>
      <h1>List des films</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesListPage;
