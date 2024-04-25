"use client";
import { useState, useEffect } from "react";
import { getTrendingMovies, getTrendingTvShows } from "./actions";
import { TmdbMovie, TmdbTvShow } from "../../types/Tmdb";
import { Separator } from "@radix-ui/react-separator";

interface DropDownMenuProps {
  handleSelect: (mediaName: string) => void;
}

function DropDown({ handleSelect }: DropDownMenuProps) {
  const [trendingMovies, setTrendingMovies] = useState<TmdbMovie[]>();
  const [trendingTvShows, setTrendingTvShows] = useState<TmdbTvShow[]>();
  useEffect(() => {
    const findTrendingMovies = async () => {
      const trendingItems = await getTrendingMovies();
      setTrendingMovies(trendingItems!);
    };

    const findTrendingTvShows = async () => {
      const trendingItems = await getTrendingTvShows();
      setTrendingTvShows(trendingItems!);
    };

    findTrendingMovies();
    findTrendingTvShows();
  }, []);
  return (
    <div className="w-[80vw] h-80 bg-muted-foreground rounded-md border border-input p-4 text-secondary">
      <h2 className="font-semibold text-base mb-2">Movie Suggestions</h2>
      {trendingMovies?.map((trendingMovie) => (
        <p
          className="my-2 cursor-pointer hover:bg-secondary hover:text-primary"
          onClick={() => handleSelect(trendingMovie.title)}
        >
          {trendingMovie.title}
        </p>
      ))}
      <Separator className="my-4 border border-input mb-2" />
      <h2 className="font-semibold text-base">TV Show Suggestions</h2>
      {trendingTvShows?.map((trendingTvShow) => (
        <p
          className="my-2 cursor-pointer hover:bg-secondary hover:text-primary"
          onClick={() => handleSelect(trendingTvShow.name)}
        >
          {trendingTvShow.name}
        </p>
      ))}
    </div>
  );
}

export default DropDown;
