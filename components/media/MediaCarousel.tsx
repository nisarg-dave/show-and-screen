import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "./MediaCard";

interface MediaCarouselProps {
  movies: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

function MediaCarousel({ movies }: MediaCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full my-3"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="md:basis-1/3 lg:basis-1/5">
            <MovieCard posterPath={movie.poster_path} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MediaCarousel;
