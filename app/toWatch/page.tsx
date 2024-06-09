import React from "react";
import SearchBar from "@/components/search/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MediaCard from "@/components/media/MediaCard";

import { checkWatchedChanged, getCurrentUser } from "../actions";
import { Suspense } from "react";

async function ToWatchPage() {
  const currentUser = await getCurrentUser("ndave630@gmail.com");

  return (
    <main className="min-h-screen flex items-center flex-col">
      <div className="mt-6">
        <SearchBar />
      </div>
      <div className="mt-5">
        <Tabs defaultValue="To Watch Movies" className="w-[80vw]">
          <TabsList className="grid w-full grid-cols-2 bg-muted-foreground">
            <TabsTrigger value="To Watch Movies" className="text-secondary">
              To Watch Movies
            </TabsTrigger>
            <TabsTrigger value="To Watch TV Shows" className="text-secondary">
              To Watch Tv Shows
            </TabsTrigger>
          </TabsList>
          <TabsContent value="To Watch Movies">
            <Suspense
              fallback={
                <p className="text-secondary text-3xl">Loading Movies...</p>
              }
            >
              <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:p-4 gap-4">
                {currentUser.toWatchMovies.map((toWatchMovie) => (
                  <MediaCard
                    key={toWatchMovie.movie.id}
                    imgUrl={toWatchMovie.movie.posterPath}
                  />
                ))}
              </div>
            </Suspense>
          </TabsContent>
          <TabsContent value="To Watch TV Shows">
            <Suspense
              fallback={
                <p className="text-secondary text-3xl">Loading TV Shows...</p>
              }
            >
              <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-4 md:p-4 gap-4">
                {currentUser.toWatchTvShows.map((toWatchTvShow) => (
                  <MediaCard
                    key={toWatchTvShow.tvShow.id}
                    imgUrl={toWatchTvShow.tvShow.posterPath}
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

export default ToWatchPage;
