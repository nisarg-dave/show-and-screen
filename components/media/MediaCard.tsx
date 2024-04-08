import { Card, CardContent } from "@/components/ui/card";

interface MediaCardProps {
  imgUrl: string;
}

function TmdbMediaCard({ imgUrl }: MediaCardProps) {
  return (
    <Card className="bg-secondary-foreground border-border relative">
      <CardContent className="py-4 px-4">
        <img
          src={`https://image.tmdb.org/t/p/original/${imgUrl}`}
          className="h-full"
          alt="Movie Picture"
        ></img>
      </CardContent>
    </Card>
  );
}

export default TmdbMediaCard;
