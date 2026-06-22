import { useMovies } from '../context/MovieContext.jsx';
import { BookmarkIcon, HomeIcon, LogoIcon, MovieIcon, TvIcon } from './Icons.jsx';

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'movies', label: 'Movies', icon: <MovieIcon /> },
  { id: 'tv', label: 'TV Series', icon: <TvIcon /> },
  { id: 'bookmarked', label: 'Bookmarked', icon: <BookmarkIcon /> },
];

function Sidebar() {
  const { activePage, setActivePage, setSearchTerm } = useMovies();

  function handleNavClick(pageId) {
    setActivePage(pageId);
    setSearchTerm('');
  }

  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="logo" aria-label="Entertainment app logo">
        <LogoIcon />
      </div>

      <nav className="nav-icons">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-button ${activePage === item.id ? 'active' : ''}`}
            aria-label={item.label}
            onClick={() => handleNavClick(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </nav>

      <div className="avatar" aria-label="User avatar">S</div>
    </aside>
  );
}

export default Sidebar;
