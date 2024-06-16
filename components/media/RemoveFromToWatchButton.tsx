"use client";
import React from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  handleRemoveFromToWatchMovies,
  handleRemoveFromToWatchTvShows,
} from "@/app/actions";

interface RemoveFromToWatchButtonProps {
  id: string;
  isMovie?: boolean;
  isTvShow?: boolean;
}

function RemoveFromToWatchButton({
  id,
  isMovie,
  isTvShow,
}: RemoveFromToWatchButtonProps) {
  const { toast } = useToast();

  return (
    <Button
      className="w-full bg-muted-foreground text-secondary"
      variant={"outline"}
      onClick={async () => {
        if (isMovie) {
          const result = await handleRemoveFromToWatchMovies(
            id,
            "ndave630@gmail.com"
          );
          if (result) {
            toast({
              title: "Added To Watched",
              description: "Added To Watched List",
            });
          } else {
            toast({
              title: "Failed To Add",
              description: "Failed To Add To Watched List",
            });
          }
        } else if (isTvShow) {
          const result = await handleRemoveFromToWatchTvShows(
            id,
            "ndave630@gmail.com"
          );
          if (result) {
            toast({
              title: "Added To Watched",
              description: "Added To Watched List",
            });
          } else {
            toast({
              title: "Failed To Add",
              description: "Failed To Add To Watched List",
            });
          }
        }
      }}
    >
      Watched
    </Button>
  );
}

export default RemoveFromToWatchButton;
