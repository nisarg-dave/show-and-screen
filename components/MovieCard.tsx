import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Tv2 } from "lucide-react";
import Link from "next/link";

interface MovieCardProps {
  posterPath: string;
}

function MovieCard({ posterPath }: MovieCardProps) {
  return (
    <Card className="cursor-pointer bg-secondary-foreground border-border relative">
      <CardContent className="py-4 px-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          className="h-full"
          alt="Movie Picture"
        ></img>
        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
          <div className="flex gap-x-10">
            <Star className="text-background w-9 h-9" />
            <Tv2 className="text-background w-9 h-9" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
