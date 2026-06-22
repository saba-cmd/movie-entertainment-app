import Sidebar from './components/Sidebar.jsx';
import SearchBar from './components/SearchBar.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import TrendingSection from './components/TrendingSection.jsx';
import { useMovies } from './context/MovieContext.jsx';

const pageTitles = {
  movies: 'Movies',
  tv: 'TV Series',
  bookmarked: 'Bookmarked Movies',
};

function App() {
  const {
    activePage,
    searchTerm,
    searchedMovies,
    trendingMovies,
    recommendedMovies,
    loading,
    error,
  } = useMovies();

  const isSearching = searchTerm.trim().length > 0;
  const isHomePage = activePage === 'home';

  let searchTitle = `Found ${searchedMovies.length} result${searchedMovies.length === 1 ? '' : 's'} for “${searchTerm}”`;

  if (activePage === 'bookmarked') {
    searchTitle = `Found ${searchedMovies.length} bookmarked result${searchedMovies.length === 1 ? '' : 's'} for “${searchTerm}”`;
  }

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <SearchBar />

        {loading && <p className="status-text">Loading movies...</p>}
        {error && <p className="status-text status-text--error">{error}</p>}

        {!loading && !error && isSearching && (
          <MovieGrid title={searchTitle} movies={searchedMovies} />
        )}

        {!loading && !error && !isSearching && isHomePage && (
          <>
            <TrendingSection movies={trendingMovies} />
            <MovieGrid title="Recommended for you" movies={recommendedMovies} />
          </>
        )}

        {!loading && !error && !isSearching && !isHomePage && (
          <MovieGrid title={pageTitles[activePage]} movies={searchedMovies} />
        )}
      </main>
    </div>
  );
}

export default App;
