import SearchBar from "@/components/search/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getClient } from "@/app/_lib/ApolloClient";
import { UserQueryDocument } from "@/graphql/generated";
import MediaCard from "@/components/media/MediaCard";

import RefreshCache from "./refresh-cache";
import { checkWatchedChanged } from "../actions";
import { Suspense } from "react";

async function WatchedPage() {
  const client = getClient();
  const { data } = await client.query({
    query: UserQueryDocument,
    variables: { user: { email: "ndave630@gmail.com" } },
    fetchPolicy: "network-only", // Doesn't check cache before making a network request
  });
  const currentUser = data.user;

  return (
    <main className="min-h-screen flex items-center flex-col">
      <div className="mt-6">
        <SearchBar />
      </div>
      <RefreshCache check={checkWatchedChanged} currentUser={currentUser} />
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
                {currentUser.watchedMovies.map((watchedMovie) => (
                  <MediaCard
                    key={watchedMovie.movie.id}
                    imgUrl={watchedMovie.movie.posterPath}
                  />
                ))}
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
                {currentUser.watchedTvShows.map((watchedTvShow) => (
                  <MediaCard
                    key={watchedTvShow.tvShow.id}
                    imgUrl={watchedTvShow.tvShow.posterPath}
                  />
                ))}
              </div>
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default WatchedPage;
