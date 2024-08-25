"use server";

import { getClient } from "@/app/_lib/ApolloClient";
import {
  AddToTopFiveMoviesMutationDocument,
  AddToTopFiveTvShowsMutationDocument,
  AddToWatchedMoviesMutationDocument,
  AddToWatchedTvShowsMutationDocument,
  RemoveFromTopFiveMoviesMutationDocument,
  RemoveFromTopFiveTvShowsMutationDocument,
  UserQueryDocument,
  UserQueryQuery,
  AddToWatchMoviesMutationDocument,
  AddToWatchTvShowsMutationDocument,
  RemoveFromToWatchMoviesMutationDocument,
  RemoveFromToWatchTvShowsMutationDocument,
} from "@/graphql/generated";
import { TmdbMovie, TmdbTvShow } from "@/types/Tmdb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const client = getClient();

export async function getTopThreeTrendingMovies() {
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

export async function getTopThreeTrendingTvShows() {
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

export async function searchMovie(input: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${input}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const searchedMovies = await res.json();
  return searchedMovies.results;
}

export async function searchTvShow(input: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${input}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    }
  );
  const searchedTvShows = await res.json();
  return searchedTvShows.results;
}

export async function getCurrentUser(email: string) {
  const { data } = await client.query({
    query: UserQueryDocument,
    variables: { user: { email } },
    fetchPolicy: "network-only", // Doesn't check cache before making a network request
  });
  return data.user;
}

export async function handleAddToWatchedMovies(
  movie: Partial<TmdbMovie>,
  currentUserEmail: string
): Promise<boolean> {
  try {
    await client.mutate({
      mutation: AddToWatchedMoviesMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        movie: {
          title: movie.title!,
          posterPath: movie.poster_path!,
          backdropPath: movie.backdrop_path!,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleAddToWatchedTvShows(
  tvShow: Partial<TmdbTvShow>,
  currentUserEmail: string
): Promise<boolean> {
  try {
    await client.mutate({
      mutation: AddToWatchedTvShowsMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        tvShow: {
          title: tvShow.name!,
          posterPath: tvShow.poster_path!,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function checkChanged(currentUser: UserQueryQuery["user"]) {
  const user = await getCurrentUser(currentUser.email);
  if (
    currentUser.watchedMovies.length !== user.watchedMovies.length ||
    currentUser.watchedTvShows.length !== user.watchedTvShows.length ||
    currentUser.topFiveMovies.length !== user.topFiveMovies.length ||
    currentUser.topFiveTvShows.length !== user.topFiveTvShows.length ||
    currentUser.toWatchMovies.length !== user.toWatchMovies.length ||
    currentUser.toWatchTvShows.length !== user.toWatchTvShows.length
  ) {
    revalidatePath("/"); // This will purge the Client-side Router Cache for all paths
  }
}

export async function handleRemoveFromTopFiveMovies(
  currentUserEmail: string,
  id: string
) {
  const currentUser = await getCurrentUser(currentUserEmail);
  try {
    await client.mutate({
      mutation: RemoveFromTopFiveMoviesMutationDocument,
      variables: {
        user: { email: currentUser.email },
        movie: {
          id,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleAddToTopFiveMovies(
  currentUserEmail: string,
  id: string
): Promise<boolean> {
  const currentUser = await getCurrentUser(currentUserEmail);
  if (currentUser.topFiveMovies.length >= 5) {
    return false;
  }
  try {
    await client.mutate({
      mutation: AddToTopFiveMoviesMutationDocument,
      variables: {
        user: { email: currentUser.email },
        movie: {
          id,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleRemoveFromTopFiveTvShows(
  currentUserEmail: string,
  id: string
) {
  const currentUser = await getCurrentUser(currentUserEmail);
  try {
    await client.mutate({
      mutation: RemoveFromTopFiveTvShowsMutationDocument,
      variables: {
        user: { email: currentUser.email },
        tvShow: {
          id,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleAddToTopFiveTvShows(
  currentUserEmail: string,
  id: string
): Promise<boolean> {
  const currentUser = await getCurrentUser(currentUserEmail);
  if (currentUser.topFiveTvShows.length >= 5) {
    return false;
  }
  try {
    await client.mutate({
      mutation: AddToTopFiveTvShowsMutationDocument,
      variables: {
        user: { email: currentUser.email },
        tvShow: {
          id,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleAddToWatchMovies(
  movie: Partial<TmdbMovie>,
  currentUserEmail: string
): Promise<boolean> {
  try {
    await client.mutate({
      mutation: AddToWatchMoviesMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        movie: {
          title: movie.title!,
          posterPath: movie.poster_path!,
          backdropPath: movie.backdrop_path!,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleAddToWatchTvShows(
  tvShow: Partial<TmdbTvShow>,
  currentUserEmail: string
): Promise<boolean> {
  try {
    await client.mutate({
      mutation: AddToWatchTvShowsMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        tvShow: {
          title: tvShow.name!,
          posterPath: tvShow.poster_path!,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleRemoveFromToWatchMovies(
  id: string,
  currentUserEmail: string
): Promise<boolean> {
  try {
    const removedMovie = await client.mutate({
      mutation: RemoveFromToWatchMoviesMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        movie: {
          id,
        },
      },
    });
    await client.mutate({
      mutation: AddToWatchedMoviesMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        movie: {
          title: removedMovie.data!.removeFromWantToWatchMovies.title,
          posterPath: removedMovie.data!.removeFromWantToWatchMovies.posterPath,
          backdropPath:
            removedMovie.data!.removeFromWantToWatchMovies.backdropPath,
        },
      },
    });
    revalidatePath("/");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function handleRemoveFromToWatchTvShows(
  id: string,
  currentUserEmail: string
): Promise<boolean> {
  try {
    const removedTvShow = await client.mutate({
      mutation: RemoveFromToWatchTvShowsMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        tvShow: {
          id,
        },
      },
    });
    await client.mutate({
      mutation: AddToWatchedTvShowsMutationDocument,
      variables: {
        user: { email: currentUserEmail },
        tvShow: {
          title: removedTvShow.data!.removeFromWantToWatchTvShows.title,
          posterPath:
            removedTvShow.data!.removeFromWantToWatchTvShows.posterPath,
        },
      },
    });
    revalidatePath("/");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}
