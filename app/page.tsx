import MovieCarousel from "@/components/MovieCarousel";
import Image from "next/image";

async function getTrendingMovies() {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/week", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

async function getTrendingTvShows() {
  const res = await fetch("https://api.themoviedb.org/3/trending/tv/week", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const trendingTvShows = await getTrendingTvShows();

  return (
    <main className="min-h-screen min-w-screen">
      <div className="my-4 mx-4">
        <MovieCarousel movies={trendingMovies.results} />
        <MovieCarousel movies={trendingTvShows.results} />
      </div>
    </main>
  );
}
