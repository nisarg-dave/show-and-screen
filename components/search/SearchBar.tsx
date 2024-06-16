"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import DropDown from "./DropDown";
import { TmdbMovie, TmdbTvShow } from "@/types/Tmdb";
import {
  handleAddToWatchedMovies,
  handleAddToWatchedTvShows,
} from "../../app/actions";
import { usePathname } from "next/navigation";

function SearchBar() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleSelectMovie = (movie: TmdbMovie) => {
    setOpen(!open);
    setInput(movie.title);
    if (pathname === "/watched") {
      handleAddToWatchedMovies(movie);
    } else if (pathname === "/toWatch") {
    }
  };

  const handleSelectTvShow = (tvShow: TmdbTvShow) => {
    setOpen(!open);
    setInput(tvShow.name);
    if (pathname === "/watched") {
      handleAddToWatchedTvShows(tvShow);
    } else if (pathname === "/toWatch") {
    }
  };

  return (
    <>
      <Input
        className="w-[80vw] bg-muted-foreground text-secondary"
        onClick={() => setOpen(!open)}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {open ? (
        <DropDown
          handleSelectMovie={handleSelectMovie}
          handleSelectTvShow={handleSelectTvShow}
          input={input}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
