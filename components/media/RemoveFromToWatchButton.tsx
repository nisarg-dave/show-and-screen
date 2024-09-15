"use client";
import React, { use, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  getSession,
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

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getUserEmail = async () => {
      const session = await getSession();
      setUserEmail(session?.user?.email!);
    };
    getUserEmail();
  }, []);

  return (
    <Button
      className="w-full bg-muted-foreground text-secondary"
      variant={"outline"}
      onClick={async () => {
        if (isMovie) {
          const result = await handleRemoveFromToWatchMovies(id, userEmail);
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
          const result = await handleRemoveFromToWatchTvShows(id, userEmail);
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
