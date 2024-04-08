import TmdbMediaCarousel from "@/components/media/TmdbMediaCarousel";
import { GetUsersDocument } from "@/graphql/generated";
import { getClient } from "@/app/_lib/ApolloClient";
import MediaCarousel from "@/components/media/MediaCarousel";

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

export default async function Home() {
  const trendingMovies = await getTrendingMovies();
  const trendingTvShows = await getTrendingTvShows();
  const client = getClient();
  const { data } = await client.query({ query: GetUsersDocument });
  const currentUser = data.users[0];

  return (
    <main className="min-h-screen min-w-screen">
      <div className="mx-4 my-4">
        <h2 className="text-secondary font-semibold text-xl">
          My Top 5 Movies
        </h2>
        <MediaCarousel movies={currentUser.topFiveMovies} />
        <h2 className="text-secondary font-semibold text-xl">
          My Top 5 TV Shows
        </h2>
        <MediaCarousel movies={currentUser.topFiveTvShows} />
        <h2 className="text-secondary font-semibold text-xl">
          My Watched Movies
        </h2>
        <MediaCarousel movies={currentUser.watchedMovies} />
        <h2 className="text-secondary font-semibold text-xl">
          My Watched TV Shows
        </h2>
        <MediaCarousel movies={currentUser.watchedTvShows} />
        <h2 className="text-secondary font-semibold text-xl">
          Movies I Want To Watch
        </h2>
        <MediaCarousel movies={currentUser.toWatchMovies} />
        <h2 className="text-secondary font-semibold text-xl">
          TV Shows I Want To Watch
        </h2>
        <MediaCarousel movies={currentUser.toWatchTvShows} />
        <h2 className="text-secondary font-semibold text-xl">
          Trending Movies
        </h2>
        <TmdbMediaCarousel movies={trendingMovies.results} />
        <h2 className="text-secondary font-semibold text-xl">
          Trending TV Shows
        </h2>
        <TmdbMediaCarousel movies={trendingTvShows.results} />
      </div>
    </main>
  );
}
