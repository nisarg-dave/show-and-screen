"use server";

export async function getTrendingMovies() {
  const movieRes = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const trendingMovies = await movieRes.json();
  return [
    trendingMovies.results[0],
    trendingMovies.results[1],
    trendingMovies.results[2],
  ];
}

export async function getTrendingTvShows() {
  const tvShowsRes = await fetch(
    "https://api.themoviedb.org/3/trending/tv/week",
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const trendingTvShows = await tvShowsRes.json();
  return [
    trendingTvShows.results[0],
    trendingTvShows.results[1],
    trendingTvShows.results[2],
  ];
}