import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.tvShow.deleteMany({});
  await prisma.userTopFiveMovies.deleteMany({});
  await prisma.userTopFiveTvShows.deleteMany({});
  await prisma.userWantToWatchMovies.deleteMany({});
  await prisma.userWantToWatchTvShows.deleteMany({});
  await prisma.userWatchedMovies.deleteMany({});
  await prisma.userWatchedTvShows.deleteMany({});

  const createdUser = await prisma.user.create({
    data: {
      name: "Nisarg Dave",
      email: "ndave630@gmail.com",
    },
  });

  await prisma.movie.createMany({
    data: [
      {
        title: "Mad Max: Fury Road",
        posterPath:
          "https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
      },
      {
        title: "Top Gun: Maverick",
        posterPath:
          "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      },
      {
        title: "The Shawshank Redemption",
        posterPath:
          "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      },
      {
        title: "NightCrawler",
        posterPath:
          "https://image.tmdb.org/t/p/original/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/wofhl2lsTYCPmMQPsbj6iu9n0P6.jpg",
      },
      {
        title: "Enemy",
        posterPath:
          "https://image.tmdb.org/t/p/original/coJzyPTkSp4RMRGdgE7pXmJbCiG.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/teT1Mo9hZkNCDQ6DFBr5eMJwOpz.jpg",
      },
      {
        title: "The Batman",
        posterPath:
          "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      },
      {
        title: "Dune: Part Two",
        posterPath:
          "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      },
      {
        title: "Fight Club",
        posterPath:
          "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      },
      {
        title: "Dune",
        posterPath:
          "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
      },
      {
        title: "Mission Impossible - Dead Reckoning Part One",
        posterPath:
          "https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/jrSjFod386IYl29ALnbtWbysLhj.jpg",
      },
      {
        title: "Arrival",
        posterPath:
          "https://image.tmdb.org/t/p/original/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg",
      },
      {
        title: "A Quiet Place Part II",
        posterPath:
          "https://image.tmdb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/AsqUSUqXrK8JfH8WEQnCXVbIAv6.jpg",
      },
      {
        title: "Furiosa: A Mad Max Saga",
        posterPath:
          "https://image.tmdb.org/t/p/original/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/q8IEFmEGGSGmAWfwRs23XDwdFN4.jpg",
      },
      {
        title: "A Quiet Place: Day One",
        posterPath:
          "https://image.tmdb.org/t/p/original/2DR8Wi785gwqCspLFVVr7G3sERx.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/1XyIHrP7X7rn3UBkNy9hPb9vCUf.jpg",
      },
      {
        title: "Road House",
        posterPath:
          "https://image.tmdb.org/t/p/original/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
      },
      {
        title: "Air",
        posterPath:
          "https://image.tmdb.org/t/p/original/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
        backdropPath:
          "https://image.tmdb.org/t/p/original/aT3sRVqgpkyCo23fp9myVfKPWbA.jpg",
      },
    ],
  });

  await prisma.tvShow.createMany({
    data: [
      {
        title: "You",
        posterPath:
          "https://image.tmdb.org/t/p/original/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
      },
      {
        title: "The Crown",
        posterPath:
          "https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg",
      },
      {
        title: "Cobra Kai",
        posterPath:
          "https://image.tmdb.org/t/p/original/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
      },
      {
        title: "The Mandalorian",
        posterPath:
          "https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
      },
      {
        title: "Daredevil",
        posterPath:
          "https://image.tmdb.org/t/p/original/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
      },
      {
        title: "The Book of Boba Fett",
        posterPath:
          "https://image.tmdb.org/t/p/original/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
      },
      {
        title: "Ahsoka",
        posterPath:
          "https://image.tmdb.org/t/p/original/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
      },
      {
        title: "Jessica Jones",
        posterPath:
          "https://image.tmdb.org/t/p/original/lwPFyjxAZY6NqHxywgY00Y4MFBx.jpg",
      },
      {
        title: "Jack Ryan",
        posterPath:
          "https://image.tmdb.org/t/p/original/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg",
      },
      {
        title: "True Detective",
        posterPath:
          "https://image.tmdb.org/t/p/original/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg",
      },
      {
        title: "Masters of the Air",
        posterPath:
          "https://image.tmdb.org/t/p/original/rSAmgcoA74371rplbqM27yVsd3y.jpg",
      },
      {
        title: "Halo",
        posterPath:
          "https://image.tmdb.org/t/p/original/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
      },
      {
        title: "Avatar: The Last Airbender",
        posterPath:
          "https://image.tmdb.org/t/p/original/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg",
      },
      {
        title: "House of the Dragon",
        posterPath:
          "https://image.tmdb.org/t/p/original/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
      },
    ],
  });

  const topFiveMoviesArr = await prisma.movie.findMany({
    where: {
      OR: [
        { title: "Mad Max: Fury Road" },
        { title: "Top Gun: Maverick" },
        { title: "The Shawshank Redemption" },
        { title: "NightCrawler" },
        { title: "Enemy" },
      ],
    },
  });

  const topFiveTvShowsArr = await prisma.tvShow.findMany({
    where: {
      OR: [
        { title: "You" },
        { title: "The Crown" },
        { title: "Cobra Kai" },
        { title: "The Mandalorian" },
        { title: "Daredevil" },
      ],
    },
  });

  const watchedMoviesArr = await prisma.movie.findMany({
    where: {
      OR: [
        { title: "Mad Max: Fury Road" },
        { title: "Top Gun: Maverick" },
        { title: "The Shawshank Redemption" },
        { title: "NightCrawler" },
        { title: "Enemy" },
        { title: "The Batman" },
        { title: "Dune: Part Two" },
        { title: "Fight Club" },
        { title: "Dune" },
        { title: "Mission Impossible - Dead Reckoning Part One" },
        { title: "Arrival" },
      ],
    },
  });

  const watchedTvShowsArr = await prisma.tvShow.findMany({
    where: {
      OR: [
        { title: "You" },
        { title: "The Crown" },
        { title: "Cobra Kai" },
        { title: "The Mandalorian" },
        { title: "Daredevil" },
        { title: "The Book of Boba Fett" },
        { title: "Ahsoka" },
        { title: "Jessica Jones" },
        { title: "Jack Ryan" },
      ],
    },
  });

  const toWatchMoviesArr = await prisma.movie.findMany({
    where: {
      OR: [
        { title: "A Quiet Place Part II" },
        { title: "Furiosa: A Mad Max Saga" },
        { title: "A Quiet Place: Day One" },
        { title: "Road House" },
        { title: "Air" },
      ],
    },
  });

  const toWatchTvShowsArr = await prisma.tvShow.findMany({
    where: {
      OR: [
        { title: "True Detective" },
        { title: "Masters of the Air" },
        { title: "Halo" },
        { title: "Avatar: The Last Airbender" },
        { title: "House of the Dragon" },
      ],
    },
  });

  // When you use create directly within the topFiveMovies field of the user.update mutation:
  // You specify the movieId for each movie in your top five list.
  // Prisma interprets this as an instruction to create a new entry in the UserTopFiveMovies table.
  // Prisma automatically sets the userId value based on the where clause in the user update (email: "ndave630@gmail.com"). This ensures the association is created between the specific user and the movies you're referencing.
  await prisma.user.update({
    where: { email: "ndave630@gmail.com" },
    data: {
      topFiveMovies: {
        create: topFiveMoviesArr.map((movie) => ({
          movieId: movie.id,
        })),
      },
      topFiveTvShows: {
        create: topFiveTvShowsArr.map((tvShow) => ({
          tvShowId: tvShow.id,
        })),
      },
      watchedMovies: {
        create: watchedMoviesArr.map((watchedMovie) => ({
          movieId: watchedMovie.id,
        })),
      },
      watchedTvShows: {
        create: watchedTvShowsArr.map((watchedTvShow) => ({
          tvShowId: watchedTvShow.id,
        })),
      },
      toWatchMovies: {
        create: toWatchMoviesArr.map((toWatchMovie) => ({
          movieId: toWatchMovie.id,
        })),
      },
      toWatchTvShows: {
        create: toWatchTvShowsArr.map((toWatchTvShow) => ({
          tvShowId: toWatchTvShow.id,
        })),
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
