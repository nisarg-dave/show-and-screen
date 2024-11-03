"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Star, Tv2 } from "lucide-react";
import TopFiveButton from "./TopFiveButton";
import RemoveFromToWatchButton from "./RemoveFromToWatchButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  handleAddToWatchedMovies,
  handleAddToWatchedTvShows,
  handleAddToWatchMovies,
  handleAddToWatchTvShows,
} from "@/app/actions";
import { TmdbMovie, TmdbTvShow } from "@/types/Tmdb";
import { getSession } from "@/app/actions";
import { useEffect, useState } from "react";

interface MediaCardProps {
  imgUrl: string;
  isTmdb?: boolean;
  isTopFive?: boolean;
  isWatchedPage?: boolean;
  id?: string;
  isMovie?: boolean;
  isTvShow?: boolean;
  isToWatchPage?: boolean;
  isTmdbMovie?: boolean;
  tmdbMediaMovie?: Partial<TmdbMovie>;
  tmdbMediaTvShow?: Partial<TmdbTvShow>;
}

function MediaCard({
  imgUrl,
  isTmdb,
  isTopFive,
  isWatchedPage,
  id,
  isMovie,
  isTvShow,
  isToWatchPage,
  isTmdbMovie,
  tmdbMediaMovie,
  tmdbMediaTvShow,
}: MediaCardProps) {
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
    // The relative positioning on the .Card creates a reference point for absolute positioning of its child elements.
    // The absolute positioning on the inner div creates an overlay effect on top of the .CardContent within the boundaries of the .Card.
    <Card className="bg-secondary-foreground border-border relative">
      <CardContent className="py-4 px-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${imgUrl}`}
          className="h-full"
          alt="Movie Picture"
        ></img>
        {isTmdb ? (
          <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full cursor-pointer">
            <div className="flex gap-x-10">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Star
                      className="text-muted-foreground hover:text-secondary w-9 h-9"
                      onClick={async () => {
                        if (isTmdbMovie) {
                          const result = await handleAddToWatchMovies(
                            tmdbMediaMovie!,
                            userEmail
                          );
                          if (result) {
                            toast({
                              title: "Added To Watch",
                              description: "Added To Watch List",
                            });
                          } else {
                            toast({
                              title: "Failed To Add",
                              description: "Failed To Add To Watch List",
                            });
                          }
                        } else {
                          const result = await handleAddToWatchTvShows(
                            tmdbMediaTvShow!,
                            userEmail
                          );
                          if (result) {
                            toast({
                              title: "Added To Watch",
                              description: "Added To Watch List",
                            });
                          } else {
                            toast({
                              title: "Failed To Add",
                              description: "Failed To Add To Watch List",
                            });
                          }
                        }
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="text-sm">
                    Want to watch?
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Tv2
                      className="text-muted-foreground hover:text-secondary w-9 h-9"
                      onClick={async () => {
                        if (isTmdbMovie) {
                          const result = await handleAddToWatchedMovies(
                            tmdbMediaMovie!,
                            userEmail
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
                        } else {
                          const result = await handleAddToWatchedTvShows(
                            tmdbMediaTvShow!,
                            userEmail
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
                    />
                  </TooltipTrigger>
                  <TooltipContent className="text-sm">
                    Already watched.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ) : null}
        {isTopFive ? (
          <div className="mt-2">
            <TopFiveButton
              isTopFive={isTopFive}
              id={id!}
              isMovie={isMovie}
              isTvShow={isTvShow}
            />
          </div>
        ) : null}
        {isWatchedPage ? (
          <div className="mt-2">
            <TopFiveButton id={id!} isMovie={isMovie} isTvShow={isTvShow} />
          </div>
        ) : null}
        {isToWatchPage ? (
          <div className="mt-2">
            <RemoveFromToWatchButton
              id={id!}
              isMovie={isMovie}
              isTvShow={isTvShow}
            />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default MediaCard;
