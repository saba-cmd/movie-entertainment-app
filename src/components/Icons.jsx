export function LogoIcon() {
  return (
    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" aria-hidden="true">
      <rect y="4" width="32" height="21" rx="4" fill="currentColor" />
      <path d="M4 0h5l3 6H7L4 0Zm9 0h5l3 6h-5l-3-6Zm9 0h5l3 6h-5l-3-6Z" fill="#10141E" />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="7" height="7" rx="1" />
      <rect x="11" y="2" width="7" height="7" rx="1" />
      <rect x="2" y="11" width="7" height="7" rx="1" />
      <rect x="11" y="11" width="7" height="7" rx="1" />
    </svg>
  );
}

export function MovieIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <rect x="3" y="2" width="14" height="16" rx="2" />
      <rect x="5" y="4" width="2" height="2" fill="#10141E" />
      <rect x="13" y="4" width="2" height="2" fill="#10141E" />
      <rect x="5" y="9" width="2" height="2" fill="#10141E" />
      <rect x="13" y="9" width="2" height="2" fill="#10141E" />
      <rect x="5" y="14" width="2" height="2" fill="#10141E" />
      <rect x="13" y="14" width="2" height="2" fill="#10141E" />
    </svg>
  );
}

export function TvIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <rect x="3" y="5" width="14" height="11" rx="1.5" />
      <rect x="8" y="17" width="4" height="1.5" rx="0.75" />
      <path d="M7 2 10 5M13 2l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BookmarkIcon({ filled = false }) {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill={filled ? 'currentColor' : 'none'} aria-hidden="true">
      <path d="M3 1.5h10a1 1 0 0 1 1 1v13.2l-6-3.4-6 3.4V2.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CategoryIcon({ category }) {
  return category === 'Movie' ? <MovieIcon /> : <TvIcon />;
}
