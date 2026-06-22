import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const MovieContext = createContext(null);
const API_URL = 'https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json';
const STORAGE_KEY = 'savedMovies';

function getSavedMoviesFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get(API_URL);
        const savedTitles = getSavedMoviesFromStorage();

        const moviesFromApi = response.data.map((movie) => ({
          ...movie,
          isBookmarked: savedTitles.includes(movie.title),
        }));

        setMovies(moviesFromApi);
      } catch (err) {
        setError('Something went wrong while loading movies.');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  function toggleBookmark(movieTitle) {
    setMovies((currentMovies) => {
      const updatedMovies = currentMovies.map((movie) => {
        if (movie.title !== movieTitle) {
          return movie;
        }

        return {
          ...movie,
          isBookmarked: !movie.isBookmarked,
        };
      });

      const savedTitles = updatedMovies
        .filter((movie) => movie.isBookmarked)
        .map((movie) => movie.title);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedTitles));

      return updatedMovies;
    });
  }

  const pageMovies = useMemo(() => {
    if (activePage === 'movies') {
      return movies.filter((movie) => movie.category === 'Movie');
    }

    if (activePage === 'tv') {
      return movies.filter((movie) => movie.category === 'TV Series');
    }

    if (activePage === 'bookmarked') {
      return movies.filter((movie) => movie.isBookmarked);
    }

    return movies;
  }, [movies, activePage]);

  const searchedMovies = useMemo(() => {
    const searchValue = searchTerm.trim().toLowerCase();

    if (!searchValue) {
      return pageMovies;
    }

    return pageMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );
  }, [pageMovies, searchTerm]);

  const trendingMovies = useMemo(
    () => movies.filter((movie) => movie.isTrending),
    [movies]
  );

  const recommendedMovies = useMemo(
    () => movies.filter((movie) => !movie.isTrending),
    [movies]
  );

  const value = {
    movies,
    activePage,
    setActivePage,
    searchTerm,
    setSearchTerm,
    loading,
    error,
    pageMovies,
    searchedMovies,
    trendingMovies,
    recommendedMovies,
    toggleBookmark,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovies must be used inside MovieProvider');
  }

  return context;
}
