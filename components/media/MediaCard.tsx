import { Card, CardContent } from "@/components/ui/card";
import { Star, Tv2 } from "lucide-react";

interface MediaCardProps {
  posterPath: string;
}

function MediaCard({ posterPath }: MediaCardProps) {
  return (
    <Card className="bg-secondary-foreground border-border relative">
      <CardContent className="py-4 px-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          className="h-full"
          alt="Movie Picture"
        ></img>
        <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full cursor-pointer">
          <div className="flex gap-x-10">
            <Star className="text-muted-foreground hover:text-secondary w-9 h-9" />
            <Tv2 className="text-muted-foreground hover:text-secondary w-9 h-9" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MediaCard;