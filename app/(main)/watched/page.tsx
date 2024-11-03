import SearchBar from "@/components/search/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MediaCard from "@/components/media/MediaCard";
import RefreshCache from "../../_lib/refresh-cache";
import { checkChanged, getCurrentUser } from "../../actions";
import { Suspense } from "react";
import { getSession } from "@/app/actions";

async function WatchedPage() {
  const session = await getSession();
  const currentUser = await getCurrentUser(session?.user?.email!);
  const topFiveMovieIds = currentUser.topFiveMovies.map(
    (item) => item.movie.id
  );
  const topFiveTvShowIds = currentUser.topFiveTvShows.map(
    (item) => item.tvShow.id
  );

  return (
    <main className="min-h-screen flex items-center flex-col">
      <div className="mt-6">
        <SearchBar />
      </div>
      <RefreshCache check={checkChanged} currentUser={currentUser} />
      <div className="mt-5">
        <Tabs defaultValue="Watched Movies" className="w-[80vw]">
          <TabsList className="grid w-full grid-cols-2 bg-muted-foreground">
            <TabsTrigger value="Watched Movies" className="text-secondary">
              Watched Movies
            </TabsTrigger>
            <TabsTrigger value="Watched TV Shows" className="text-secondary">
              Watched TV Shows
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Watched Movies">
            <Suspense
              fallback={
                <p className="text-secondary text-3xl">Loading Movies...</p>
              }
            >
              <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:p-4 gap-4">
                {currentUser.watchedMovies.map((watchedMovie) =>
                  topFiveMovieIds.includes(watchedMovie.movie.id) ? (
                    <MediaCard
                      key={watchedMovie.movie.id}
                      imgUrl={watchedMovie.movie.posterPath}
                      isTopFive={true}
                      isMovie={true}
                      id={watchedMovie.movie.id}
                    />
                  ) : (
                    <MediaCard
                      key={watchedMovie.movie.id}
                      imgUrl={watchedMovie.movie.posterPath}
                      isWatchedPage={true}
                      isMovie={true}
                      id={watchedMovie.movie.id}
                    />
                  )
                )}
              </div>
            </Suspense>
          </TabsContent>
          <TabsContent value="Watched TV Shows">
            <Suspense
              fallback={
                <p className="text-secondary text-3xl">Loading TV Shows...</p>
              }
            >
              <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:p-4 gap-4">
                {currentUser.watchedTvShows.map((watchedTvShow) =>
                  topFiveTvShowIds.includes(watchedTvShow.tvShow.id) ? (
                    <MediaCard
                      key={watchedTvShow.tvShow.id}
                      imgUrl={watchedTvShow.tvShow.posterPath}
                      isTopFive={true}
                      isTvShow={true}
                      id={watchedTvShow.tvShow.id}
                    />
                  ) : (
                    <MediaCard
                      key={watchedTvShow.tvShow.id}
                      imgUrl={watchedTvShow.tvShow.posterPath}
                      isWatchedPage={true}
                      isTvShow={true}
                      id={watchedTvShow.tvShow.id}
                    />
                  )
                )}
              </div>
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default WatchedPage;
