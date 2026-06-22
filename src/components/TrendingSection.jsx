import MovieCard from './MovieCard.jsx';

function TrendingSection({ movies }) {
  return (
    <section className="section-block trending-section">
      <h1 className="section-title">Trending</h1>

      <div className="trending-row">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} variant="trending" />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
