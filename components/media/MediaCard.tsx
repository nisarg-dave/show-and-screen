import { Card, CardContent } from "@/components/ui/card";
import { Star, Tv2 } from "lucide-react";
import TopFiveButton from "./TopFiveButton";

interface MediaCardProps {
  imgUrl: string;
  isTmdb?: boolean;
  isTopFive?: boolean;
  isWatched?: boolean;
  id?: string;
  isMovie?: boolean;
  isTvShow?: boolean;
}

function MediaCard({
  imgUrl,
  isTmdb,
  isTopFive,
  isWatched,
  id,
  isMovie,
  isTvShow,
}: MediaCardProps) {
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
              <Star className="text-muted-foreground hover:text-secondary w-9 h-9" />
              <Tv2 className="text-muted-foreground hover:text-secondary w-9 h-9" />
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
        {isWatched ? (
          <div className="mt-2">
            <TopFiveButton id={id!} isMovie={isMovie} isTvShow={isTvShow} />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default MediaCard;
