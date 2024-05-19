"use client";
import { useState, useEffect } from "react";
import {
  getTopThreeTrendingMovies,
  getTopThreeTrendingTvShows,
  searchMovie,
  searchTvShow,
} from "../../app/actions";
import { TmdbMovie, TmdbTvShow } from "../../types/Tmdb";
import { Separator } from "@radix-ui/react-separator";

interface DropDownMenuProps {
  handleSelectMovie: (movie: TmdbMovie) => void;
  handleSelectTvShow: (tvShow: TmdbTvShow) => void;
  input: string;
}

function DropDown({
  handleSelectMovie,
  handleSelectTvShow,
  input,
}: DropDownMenuProps) {
  const [trendingMovies, setTrendingMovies] = useState<TmdbMovie[]>();
  const [trendingTvShows, setTrendingTvShows] = useState<TmdbTvShow[]>();
  const [searchedMovies, setSearchedMovies] = useState<TmdbMovie[]>();
  const [searchedTvShows, setSearchedTvShows] = useState<TmdbTvShow[]>();

  useEffect(() => {
    const findTrendingMovies = async () => {
      const trendingItems = await getTopThreeTrendingMovies();
      setTrendingMovies(trendingItems!);
    };

    const findTrendingTvShows = async () => {
      const trendingItems = await getTopThreeTrendingTvShows();
      setTrendingTvShows(trendingItems!);
    };

    const getMovie = async (value: string) => {
      const results = await searchMovie(value);
      setSearchedMovies(results);
    };

    const getTvShow = async (value: string) => {
      const results = await searchTvShow(value);
      setSearchedTvShows(results);
    };

    findTrendingMovies();
    findTrendingTvShows();
    getMovie(input);
    getTvShow(input);
  }, [input]);

  return (
    <div className="w-[80vw] h-80 bg-muted-foreground rounded-md border border-input p-4 text-secondary overflow-y-scroll">
      {input ? (
        <>
          <h2 className="font-semibold text-base mb-2">Movie Results</h2>
          {searchedMovies?.map((searchedMovie) => (
            <div
              className="flex my-2 cursor-pointer hover:bg-secondary hover:text-primary items-center"
              key={searchedMovie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${searchedMovie.poster_path}`}
                alt="Movie Poster"
                className="h-32"
              />
              <p
                className="ml-2"
                onClick={() => handleSelectMovie(searchedMovie)}
              >
                {searchedMovie.title}
              </p>
            </div>
          ))}
          <Separator className="my-4 border border-input mb-2" />
          <h2 className="font-semibold text-base">TV Show Results</h2>
          {searchedTvShows?.map((searchedTvShow) => (
            <div
              className="flex my-2 cursor-pointer hover:bg-secondary hover:text-primary items-center"
              key={searchedTvShow.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${searchedTvShow.poster_path}`}
                alt="TV Show Poster"
                className="h-32"
              />
              <p
                className="ml-2"
                onClick={() => handleSelectTvShow(searchedTvShow)}
              >
                {searchedTvShow.name}
              </p>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-semibold text-base mb-2">Movie Suggestions</h2>
          {trendingMovies?.map((trendingMovie) => (
            <p
              className="my-2 cursor-pointer hover:bg-secondary hover:text-primary"
              onClick={() => handleSelectMovie(trendingMovie)}
              key={trendingMovie.id}
            >
              {trendingMovie.title}
            </p>
          ))}
          <Separator className="my-4 border border-input mb-2" />
          <h2 className="font-semibold text-base">TV Show Suggestions</h2>
          {trendingTvShows?.map((trendingTvShow) => (
            <p
              className="my-2 cursor-pointer hover:bg-secondary hover:text-primary"
              onClick={() => handleSelectTvShow(trendingTvShow)}
              key={trendingTvShow.id}
            >
              {trendingTvShow.name}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default DropDown;
