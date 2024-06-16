import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { watch } from "fs";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        User: {
          fields: {
            topFiveMovies: {
              // Apollo isn't sure if incoming and existing have any of the same topFiveMovies, hence merging
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingMovieIds = new Set(
                  existing.map((movie) => movie.movie.id)
                );
                const incomingMovieIds = new Set(
                  incoming.map((movie) => movie.movie.id)
                );
                // 3. Identify movies to keep (existing and new)
                const keptMovies: any[] = [];
                incoming.forEach((movie) => {
                  if (existingMovieIds.has(movie.movie.id)) {
                    // Existing movie, keep it
                    keptMovies.push(movie);
                    existingMovieIds.delete(movie.movie.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New movie, add it
                    keptMovies.push(movie);
                  }
                });

                return keptMovies;
              },
            },
            topFiveTvShows: {
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingTvShowIds = new Set(
                  existing.map((show) => show.tvShow.id)
                );
                const incomingTvShowIds = new Set(
                  incoming.map((show) => show.tvShow.id)
                );

                // Identify TV shows to keep (existing and new)
                const keptShows: any[] = [];
                incoming.forEach((show) => {
                  if (existingTvShowIds.has(show.tvShow.id)) {
                    // Existing TV show, keep it
                    keptShows.push(show);
                    existingTvShowIds.delete(show.tvShow.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New TV show, add it
                    keptShows.push(show);
                  }
                });

                return keptShows;
              },
            },
            toWatchMovies: {
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingMovieIds = new Set(
                  existing.map((movie) => movie.movie.id)
                );
                const incomingMovieIds = new Set(
                  incoming.map((movie) => movie.movie.id)
                );
                // 3. Identify movies to keep (existing and new)
                const keptMovies: any[] = [];
                incoming.forEach((movie) => {
                  if (existingMovieIds.has(movie.movie.id)) {
                    // Existing movie, keep it
                    keptMovies.push(movie);
                    existingMovieIds.delete(movie.movie.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New movie, add it
                    keptMovies.push(movie);
                  }
                });

                return keptMovies;
              },
            },
            toWatchTvShows: {
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingTvShowIds = new Set(
                  existing.map((show) => show.tvShow.id)
                );
                const incomingTvShowIds = new Set(
                  incoming.map((show) => show.tvShow.id)
                );

                // Identify TV shows to keep (existing and new)
                const keptShows: any[] = [];
                incoming.forEach((show) => {
                  if (existingTvShowIds.has(show.tvShow.id)) {
                    // Existing TV show, keep it
                    keptShows.push(show);
                    existingTvShowIds.delete(show.tvShow.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New TV show, add it
                    keptShows.push(show);
                  }
                });

                return keptShows;
              },
            },
            watchedMovies: {
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingMovieIds = new Set(
                  existing.map((movie) => movie.movie.id)
                );
                const incomingMovieIds = new Set(
                  incoming.map((movie) => movie.movie.id)
                );
                // 3. Identify movies to keep (existing and new)
                const keptMovies: any[] = [];
                incoming.forEach((movie) => {
                  if (existingMovieIds.has(movie.movie.id)) {
                    // Existing movie, keep it
                    keptMovies.push(movie);
                    existingMovieIds.delete(movie.movie.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New movie, add it
                    keptMovies.push(movie);
                  }
                });

                return keptMovies;
              },
            },
            watchedTvShows: {
              merge(
                existing: any[],
                incoming: any[],
                { readField, mergeObjects }
              ) {
                if (!existing) {
                  return incoming;
                }
                const existingTvShowIds = new Set(
                  existing.map((show) => show.tvShow.id)
                );
                const incomingTvShowIds = new Set(
                  incoming.map((show) => show.tvShow.id)
                );

                // Identify TV shows to keep (existing and new)
                const keptShows: any[] = [];
                incoming.forEach((show) => {
                  if (existingTvShowIds.has(show.tvShow.id)) {
                    // Existing TV show, keep it
                    keptShows.push(show);
                    existingTvShowIds.delete(show.tvShow.id); // Remove from existing set to avoid duplicates
                  } else {
                    // New TV show, add it
                    keptShows.push(show);
                  }
                });

                return keptShows;
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      // this needs to be an absolute url, as relative urls cannot be used in SSR
      uri: "http://localhost:3000/api/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});
