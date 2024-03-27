import MovieCarousel from "@/components/MovieCarousel";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/week", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen min-w-screen">
      <div className="my-4 mx-4">
        <MovieCarousel movies={data.results} />
      </div>
    </main>
  );
}
