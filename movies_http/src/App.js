import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);


  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);
    fetch('https://swapi.dev/api/films/').then(response => {
      if (!response.ok) {
        throw new Error('Somthing went wrong');
      }
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map(movieData => ({ id: movieData.episode_id, title: movieData.title, openingText: movieData.opening_crawl, releaseDate: movieData.release_date }));
      setMovies(transformedMovies);
      setIsLoading(false);
    })
      .catch(e => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Foudn not movies</p>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
