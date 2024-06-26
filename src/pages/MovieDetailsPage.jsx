import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/api/movies/${id}`) 
      .then(response => setMovie(response.data))
      .catch(error => console.error('erreur recup film:', error));
  }, [id]);

  if (!movie) return <div>chargement...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>realisateur: {movie.director}</p>
      <p>annee: {movie.year}</p>
      <p>type: {movie.genre}</p>
      <p>Synopsis: {movie.synopsis}</p>
      <p>acteurs: {movie.actors.join(', ')}</p>
    </div>
  );
};

export default MovieDetailsPage;
