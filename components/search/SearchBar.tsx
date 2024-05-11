"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import DropDown from "./DropDown";
import { TmdbMovie, TmdbTvShow } from "@/types/Tmdb";
import { handleAddToWatchedWatchedMovies } from "./actions";

function SearchBar() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelectSuggestions = (mediaName: string) => {
    setOpen(!open);
    setInput(mediaName);
  };

  const handleSelectSearchedMovies = (movie: TmdbMovie) => {
    setOpen(!open);
    setInput(movie.title);
    handleAddToWatchedWatchedMovies(movie);
  };

  const handleSelectSearchedTvShows = (tvShow: TmdbTvShow) => {
    setOpen(!open);
    setInput(tvShow.name);
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
          handleSelectSuggestions={handleSelectSuggestions}
          handleSelectSearchedMovies={handleSelectSearchedMovies}
          handleSelectSearchedTvShows={handleSelectSearchedTvShows}
          input={input}
        />
      ) : null}
    </>
  );
}

export default SearchBar;
