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
} from "@/graphql/generated";
import { TmdbMovie, TmdbTvShow } from "@/types/Tmdb";
import { revalidatePath } from "next/cache";

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
  movie: TmdbMovie,
  currentUserEmail: string
) {
  await client.mutate({
    mutation: AddToWatchedMoviesMutationDocument,
    variables: {
      user: { email: currentUserEmail },
      movie: {
        title: movie.title,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
      },
    },
  });
}

export async function handleAddToWatchedTvShows(
  tvShow: TmdbTvShow,
  currentUserEmail: string
) {
  await client.mutate({
    mutation: AddToWatchedTvShowsMutationDocument,
    variables: {
      user: { email: currentUserEmail },
      tvShow: {
        title: tvShow.name,
        posterPath: tvShow.poster_path,
      },
    },
  });
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
  movie: TmdbMovie,
  currentUserEmail: string
) {
  await client.mutate({
    mutation: AddToWatchMoviesMutationDocument,
    variables: {
      user: { email: currentUserEmail },
      movie: {
        title: movie.title,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
      },
    },
  });
}

export async function handleAddToWatchTvShows(
  tvShow: TmdbTvShow,
  currentUserEmail: string
) {
  await client.mutate({
    mutation: AddToWatchTvShowsMutationDocument,
    variables: {
      user: { email: currentUserEmail },
      tvShow: {
        title: tvShow.name,
        posterPath: tvShow.poster_path,
      },
    },
  });
}

export async function handleRemoveFromToWatchMovies() {}

export async function handleRemoveFromToWatchTvShows() {}
