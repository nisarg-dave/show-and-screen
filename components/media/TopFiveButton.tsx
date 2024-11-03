"use client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "../ui/button";
import {
  handleAddToTopFiveMovies,
  handleAddToTopFiveTvShows,
  handleRemoveFromTopFiveMovies,
  handleRemoveFromTopFiveTvShows,
} from "@/app/actions";
import { useEffect, useState } from "react";
import { getSession } from "@/app/actions";

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
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getUserEmail = async () => {
      const session = await getSession();
      setUserEmail(session?.user?.email!);
    };
    getUserEmail();
  }, []);

  return (
    <>
      {isTopFive ? (
        <Button
          className="w-full"
          onClick={() => {
            if (isMovie) {
              handleRemoveFromTopFiveMovies(userEmail, id);
              toast({
                title: "Removed",
                description: "Removed From Top Five",
              });
            }
            if (isTvShow) {
              handleRemoveFromTopFiveTvShows(userEmail, id);
              toast({
                title: "Removed",
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
          onClick={async () => {
            if (isMovie) {
              const result = await handleAddToTopFiveMovies(userEmail, id);
              if (result) {
                toast({
                  title: "Added",
                  description: "Added To Top Five",
                });
              } else {
                toast({
                  title: "Failed To Add",
                  description: "Failed To Add To Top Five",
                });
              }
            }
            if (isTvShow) {
              const result = await handleAddToTopFiveTvShows(userEmail, id);
              if (result) {
                toast({
                  title: "Added",
                  description: "Added To Top Five",
                });
              } else {
                toast({
                  title: "Failed To Add",
                  description: "Failed To Add To Top Five",
                });
              }
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
