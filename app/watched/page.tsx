import SearchBar from "@/components/search/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getClient } from "@/app/_lib/ApolloClient";
import {
  UserQueryDocument,
  AddToWatchedMoviesMutationDocument,
} from "@/graphql/generated";
import MediaCard from "@/components/media/MediaCard";
import { TmdbMovie } from "@/types/Tmdb";

async function WatchedPage() {
  const client = getClient();
  const { data } = await client.query({
    query: UserQueryDocument,
    variables: { user: { email: "ndave630@gmail.com" } },
  });
  const currentUser = data.user;

  const handleAddToWatchedWatchedMovies = async (movie: TmdbMovie) => {
    // Can't pass to client unless marked use server
    "use server";

    console.log(movie);
    await client.mutate({
      mutation: AddToWatchedMoviesMutationDocument,
      awaitRefetchQueries: true,
      refetchQueries: [UserQueryDocument],
      variables: {
        user: { email: "ndave630@gmail.com" },
        movie: {
          title: movie.title,
          posterPath: movie.poster_path,
          backdropPath: movie.backdrop_path,
        },
      },
    });
  };

  return (
    <main className="min-h-screen flex items-center flex-col">
      <div className="mt-6">
        <SearchBar handleAddToWatchedMovies={handleAddToWatchedWatchedMovies} />
      </div>
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
            <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-3 md:p-4 gap-4">
              {currentUser.watchedMovies.map((watchedMovie) => (
                <MediaCard
                  key={watchedMovie.movie.id}
                  imgUrl={watchedMovie.movie.posterPath}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Watched TV Shows">
            <div className="grid grid-cols-1 p-6 sm:grid-cols-2 sm:p-6 md:grid-cols-3 md:p-4 gap-4">
              {currentUser.watchedTvShows.map((watchedTvShow) => (
                <MediaCard
                  key={watchedTvShow.tvShow.id}
                  imgUrl={watchedTvShow.tvShow.posterPath}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default WatchedPage;
