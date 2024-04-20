import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MediaCard from "./MediaCard";
import { UserQueryQuery } from "@/graphql/generated";

interface MediaCarouselProps {
  movies?:
    | UserQueryQuery["user"]["topFiveMovies"]
    | UserQueryQuery["user"]["watchedMovies"]
    | UserQueryQuery["user"]["toWatchMovies"];
  tvShows?:
    | UserQueryQuery["user"]["topFiveTvShows"]
    | UserQueryQuery["user"]["watchedTvShows"]
    | UserQueryQuery["user"]["toWatchTvShows"];
  isMovie: boolean;
  isTopFiveMovie?: boolean;
}

function MediaCarousel({
  movies,
  tvShows,
  isMovie,
  isTopFiveMovie,
}: MediaCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full my-3"
    >
      <CarouselContent>
        {isMovie
          ? movies?.map((mediaItem) => (
              <CarouselItem
                key={mediaItem.movie.id}
                className="md:basis-1/3 lg:basis-1/5"
              >
                <MediaCard imgUrl={mediaItem.movie.posterPath} />
              </CarouselItem>
            ))
          : tvShows?.map((mediaItem) => (
              <CarouselItem
                key={mediaItem.tvShow.id}
                className="md:basis-1/3 lg:basis-1/5"
              >
                <MediaCard imgUrl={mediaItem.tvShow.posterPath} />
              </CarouselItem>
            ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MediaCarousel;
