async function getData() {
  const res = await fetch("https://api.themoviedb.org/3/trending/all/week", {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  });

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="grid grid-cols-3 p-6 gap-4">
      {data.results.map((movie: any) => (
        <div key={movie.id} className="">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="h-auto w-96"
          ></img>
        </div>
      ))}
      <div></div>
    </main>
  );
}
