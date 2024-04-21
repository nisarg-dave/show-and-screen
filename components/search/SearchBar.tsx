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
import { TmdbMediaItem } from "../media/MediaCarousel";

function SearchBar() {
  const input = useRef<HTMLInputElement>(null);
  const [trendingMovies, setTrendingMovies] = useState<TmdbMediaItem[]>();
  const [trendingTvShows, setTrendingTvShows] = useState<TmdbMediaItem[]>();

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
                <span>{trendingItem.title}</span>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <h2 className="text-secondary font-semibold text-sm pb-2">
                Suggested Tv Shows
              </h2>
              {trendingTvShows?.map((trendingItem) => (
                <span>{trendingItem.title}</span>
              ))}
            </CommandGroup>
          </CommandList>
        </PopoverContent>
      </Popover>
    </Command>
  );
}

export default SearchBar;
