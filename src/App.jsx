import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);
  // const [sortMovies, setSortMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/movies");
        const data = await response.json();
        
        // const sortedMovies = data.map(movies => ({ ...movies })); 
        setMovies(data);
      } catch (error) {
        console.error("Movie was not found", error);
      }    };
    fetchMovies();
  }, []);

  const sortMoviesByRating = () => {
    console.log("Before Sorting:", movies);
    
    const sorted = movies.sort((a, b) => b.rating - a.rating);
    
    console.log("After Sorting:", sorted);
    
    setMovies((()=> sorted));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Library</h1>
      <button 
        onClick={sortMoviesByRating} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Sort by Rating
      </button>
      
        <MovieList movies={movies} />
    
    </div>
  );
}