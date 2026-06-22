import { useMovies } from '../context/MovieContext.jsx';
import { SearchIcon } from './Icons.jsx';

function SearchBar() {
  const { searchTerm, setSearchTerm, activePage } = useMovies();

  let placeholder = 'Search for movies or TV series';

  if (activePage === 'movies') {
    placeholder = 'Search for movies';
  }

  if (activePage === 'tv') {
    placeholder = 'Search for TV series';
  }

  if (activePage === 'bookmarked') {
    placeholder = 'Search for bookmarked shows';
  }

  return (
    <label className="search-bar">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;
