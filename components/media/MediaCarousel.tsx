import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MediaCard from "./MediaCard";
import { UserQueryQuery } from "@/graphql/generated";
import { TmdbMovie } from "../../types/Tmdb";

interface MediaCarouselProps {
  movies?:
    | UserQueryQuery["user"]["topFiveMovies"]
    | UserQueryQuery["user"]["watchedMovies"]
    | UserQueryQuery["user"]["toWatchMovies"];
  tvShows?:
    | UserQueryQuery["user"]["topFiveTvShows"]
    | UserQueryQuery["user"]["watchedTvShows"]
    | UserQueryQuery["user"]["toWatchTvShows"];
  isMovie?: boolean;
  isTopFiveMovie?: boolean;
  isTmdb?: boolean;
  tmdbMedia?: TmdbMovie[];
}

function MediaCarousel({
  movies,
  tvShows,
  isMovie,
  isTopFiveMovie,
  isTmdb,
  tmdbMedia,
}: MediaCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full my-3"
    >
      <CarouselContent>
        <>
          {isTmdb ? (
            <>
              {tmdbMedia?.map((tmdbMediaItem) => (
                <CarouselItem
                  key={tmdbMediaItem.id}
                  className="md:basis-1/3 lg:basis-1/5"
                >
                  <MediaCard imgUrl={tmdbMediaItem.poster_path} isTmdb={true} />
                </CarouselItem>
              ))}
            </>
          ) : (
            <>
              {isMovie
                ? movies?.map((mediaItem) => (
                    <>
                      {isTopFiveMovie ? (
                        <CarouselItem
                          key={mediaItem.movie.id}
                          className="md:basis-1/2 lg:basis-4/5"
                        >
                          <MediaCard imgUrl={mediaItem.movie.backdropPath} />
                        </CarouselItem>
                      ) : (
                        <CarouselItem
                          key={mediaItem.movie.id}
                          className="md:basis-1/3 lg:basis-1/5"
                        >
                          <MediaCard imgUrl={mediaItem.movie.posterPath} />
                        </CarouselItem>
                      )}
                    </>
                  ))
                : tvShows?.map((mediaItem) => (
                    <CarouselItem
                      key={mediaItem.tvShow.id}
                      className="md:basis-1/3 lg:basis-1/5"
                    >
                      <MediaCard imgUrl={mediaItem.tvShow.posterPath} />
                    </CarouselItem>
                  ))}
            </>
          )}
        </>
      </CarouselContent>
    </Carousel>
  );
}

export default MediaCarousel;
