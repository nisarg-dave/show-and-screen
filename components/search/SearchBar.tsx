"use client";
import { useEffect, useRef, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { getTrendingMovies, getTrendingTvShows } from "./actions";
import { TmdbMovie } from "../media/MediaCarousel";

type TmdbTvShow = {
  backdrop_path: string;
  id: number;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  name: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

function SearchBar() {
  const input = useRef<HTMLInputElement>(null);
  const [trendingMovies, setTrendingMovies] = useState<TmdbMovie[]>();
  const [trendingTvShows, setTrendingTvShows] = useState<TmdbTvShow[]>();

  useEffect(() => {
    const findTrendingMovies = async () => {
      const trendingItems = await getTrendingMovies();
      setTrendingMovies(trendingItems!);
    };

    const findTrendingTvShows = async () => {
      const trendingItems = await getTrendingTvShows();
      console.log(trendingItems);
      setTrendingTvShows(trendingItems!);
    };

    findTrendingMovies();
    findTrendingTvShows();
  }, []);
  return (
    <Command className="rounded-lg border shadow-md bg-muted-foreground text-secondary">
      <Popover>
        <PopoverTrigger asChild>
          <CommandInput placeholder="Type a movie or tv show..." ref={input} />
        </PopoverTrigger>
        <PopoverContent className="w-[50vw] bg-muted-foreground">
          <CommandList className="text-secondary">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <h2 className="text-secondary font-semibold text-sm pb-2">
                Suggested Movies
              </h2>
              {trendingMovies?.map((trendingItem) => (
                <CommandItem key={trendingItem.id}>
                  <span>{trendingItem.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <h2 className="text-secondary font-semibold text-sm pb-2">
                Suggested Tv Shows
              </h2>
              {trendingTvShows?.map((trendingItem) => (
                <CommandItem key={trendingItem.id}>
                  <span>{trendingItem.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </PopoverContent>
      </Popover>
    </Command>
  );
}

export default SearchBar;
