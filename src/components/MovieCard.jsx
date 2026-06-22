import { useMovies } from '../context/MovieContext.jsx';
import { BookmarkIcon, CategoryIcon } from './Icons.jsx';

function MovieCard({ movie, variant = 'regular' }) {
  const { toggleBookmark } = useMovies();
  const imageUrl =
    variant === 'trending'
      ? movie.thumbnail.regular.large
      : movie.thumbnail.regular.medium;

  return (
    <article className={`movie-card ${variant === 'trending' ? 'movie-card--trending' : ''}`}>
      <div className="poster-box">
        <img className="poster-image" src={imageUrl} alt={movie.title} />

        <button
          type="button"
          className={`bookmark-button ${movie.isBookmarked ? 'bookmark-button--saved' : ''}`}
          aria-label={`Save ${movie.title}`}
          onClick={() => toggleBookmark(movie.title)}
        >
          <BookmarkIcon filled={movie.isBookmarked} />
        </button>
      </div>

      <div className="movie-text">
        <p className="movie-meta">
          <span>{movie.year}</span>
          <span className="dot">•</span>
          <span className="category-label"><CategoryIcon category={movie.category} /> {movie.category}</span>
          <span className="dot">•</span>
          <span>{movie.rating}</span>
        </p>
        <h3>{movie.title}</h3>
      </div>
    </article>
  );
}

export default MovieCard;
