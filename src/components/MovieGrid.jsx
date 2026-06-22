import MovieCard from './MovieCard.jsx';

function MovieGrid({ title, movies }) {
  return (
    <section className="section-block">
      <h1 className="section-title">{title}</h1>

      {movies.length === 0 ? (
        <p className="status-text">Nothing found here yet.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieGrid;
