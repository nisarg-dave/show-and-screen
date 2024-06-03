"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import {
  handleAddToTopFiveMovies,
  handleAddToTopFiveTvShows,
  handleRemoveFromTopFiveMovies,
  handleRemoveFromTopFiveTvShows,
} from "@/app/actions";

interface TopFiveButtonProps {
  isTopFive?: boolean;
  isMovie?: boolean;
  isTvShow?: boolean;
  id: string;
}

function TopFiveButton({
  isTopFive,
  isMovie,
  isTvShow,
  id,
}: TopFiveButtonProps) {
  const { toast } = useToast();

  return (
    <>
      {isTopFive ? (
        <Button
          className="w-full"
          onClick={() => {
            if (isMovie) {
              handleRemoveFromTopFiveMovies("ndave630@gmail.com", id);
              toast({
                title: "Removed From Top Five",
                description: "Removed From Top Five",
              });
            }
            if (isTvShow) {
              handleRemoveFromTopFiveTvShows("ndave630@gmail.com", id);
              toast({
                title: "Removed From Top Five",
                description: "Removed From Top Five",
              });
            }
          }}
        >
          Remove From Top Five
        </Button>
      ) : (
        <Button
          className="w-full bg-muted-foreground text-secondary"
          variant={"outline"}
          onClick={() => {
            if (isMovie) {
              handleAddToTopFiveMovies("ndave630@gmail.com", id);
              toast({
                title: "Added To Top Five",
                description: "Added To Top Five",
              });
            }
            if (isTvShow) {
              handleAddToTopFiveTvShows("ndave630@gmail.com", id);
              toast({
                title: "Added To Top Five",
                description: "Added To Top Five",
              });
            }
          }}
        >
          Add To Top Five
        </Button>
      )}
    </>
  );
}

export default TopFiveButton;
