import MediaCarousel from "@/components/media/MediaCarousel";
import { checkChanged, getCurrentUser } from "../../actions";
import RefreshCache from "../../_lib/refresh-cache";

async function getTrendingMovies() {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/week", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

async function getTrendingTvShows() {
  const res = await fetch("https://api.themoviedb.org/3/trending/tv/week", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

async function getNowPlayingMovies() {
  const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

async function getUpcomingMovies() {
  const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

async function getTopRatedTvShows() {
  const res = await fetch("https://api.themoviedb.org/3/tv/top_rated", {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });
  return res.json();
}

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const trendingTvShows = await getTrendingTvShows();
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedTvShows = await getTopRatedTvShows();
  const currentUser = await getCurrentUser("ndave630@gmail.com");

  return (
    <main className="min-h-screen min-w-screen">
      <RefreshCache check={checkChanged} currentUser={currentUser} />
      <div className="mx-4 my-4">
        <h2 className="text-secondary font-semibold text-xl">
          My Top 5 Movies
        </h2>
        <MediaCarousel
          movies={currentUser?.topFiveMovies}
          isMovie={true}
          isTopFiveMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          My Top 5 TV Shows
        </h2>
        <MediaCarousel tvShows={currentUser?.topFiveTvShows} isMovie={false} />
        <h2 className="text-secondary font-semibold text-xl">
          My Watched Movies
        </h2>
        <MediaCarousel
          movies={currentUser?.watchedMovies.toReversed().slice(0, 10)}
          isMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          My Watched TV Shows
        </h2>
        <MediaCarousel
          tvShows={currentUser?.watchedTvShows.toReversed().slice(0, 10)}
          isMovie={false}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Movies I Want To Watch
        </h2>
        <MediaCarousel
          movies={currentUser?.toWatchMovies.toReversed().slice(0, 10)}
          isMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          TV Shows I Want To Watch
        </h2>
        <MediaCarousel
          tvShows={currentUser?.toWatchTvShows.toReversed().slice(0, 10)}
          isMovie={false}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Trending Movies
        </h2>
        <MediaCarousel
          tmdbMedia={trendingMovies.results}
          isTmdb={true}
          isTmdbMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Trending TV Shows
        </h2>
        <MediaCarousel
          tmdbMedia={trendingTvShows.results}
          isTmdb={true}
          isTmdbMovie={false}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Now Playing Movies
        </h2>
        <MediaCarousel
          tmdbMedia={nowPlayingMovies.results}
          isTmdb={true}
          isTmdbMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Upcoming Movies
        </h2>
        <MediaCarousel
          tmdbMedia={upcomingMovies.results}
          isTmdb={true}
          isTmdbMovie={true}
        />
        <h2 className="text-secondary font-semibold text-xl">
          Top Rated TV Shows
        </h2>
        <MediaCarousel
          tmdbMedia={topRatedTvShows.results}
          isTmdb={true}
          isTmdbMovie={false}
        />
      </div>
    </main>
  );
}
