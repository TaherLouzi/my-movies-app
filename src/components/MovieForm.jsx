import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [directors, setDirectors] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      duration: parseInt(duration),
      directors,
      genre,
      releaseYear: parseInt(releaseYear),
      synopsis,
    };

    axios.post('http://localhost:7062/api/movies', newMovie)
      .then(response => {
        console.log('Movie added:', response.data);
      })
      .catch(error => {
        console.error('Erreur dans lajout du film!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Duration</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Directors</label>
        <input
          type="text"
          value={directors}
          onChange={(e) => setDirectors(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Release Year</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Synopsis</label>
        <textarea
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
