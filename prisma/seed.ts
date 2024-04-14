import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.tvShow.deleteMany({});

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
        title: "Mission: Impossible - Dead Reckoning Part One",
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
    ],
  });

  // await prisma.user.update({
  //   where: { email: "ndave630@gmail.com" },
  //   data: {
  //     topFiveTvShows: {
  //       create: [
  //         {
  //           title: "You",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
  //           watchedUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "The Crown",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg",
  //           watchedUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Cobra Kai",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
  //           watchedUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "The Mandalorian",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
  //           watchedUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Daredevil",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
  //           watchedUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //       ],
  //     },
  //     watchedMovies: {

  //     watchedTvShows: {
  //       create: [
  //         {
  //           title: "You",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "The Crown",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/1M876KPjulVwppEpldhdc8V4o68.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Cobra Kai",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "The Mandalorian",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "The Book of Boba Fett",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Ahsoka",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Daredevil",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Jessica Jones",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/lwPFyjxAZY6NqHxywgY00Y4MFBx.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //         {
  //           title: "Jessica Jones",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg",
  //           topFiveUserId: createdUser.id,
  //           wantToWatchUserId: createdUser.id,
  //         },
  //       ],
  //     },
  //     toWatchMovies: {
  //       create: [
  //         {
  //           title: "A Quiet Place Part II",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Furiosa: A Mad Max Saga",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "A Quiet Place: Day One",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/2DR8Wi785gwqCspLFVVr7G3sERx.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Road House",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Air",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/76AKQPdH3M8cvsFR9K8JsOzVlY5.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //       ],
  //     },
  //     toWatchTvShows: {
  //       create: [
  //         {
  //           title: "True Detective",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Masters of the Air",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/rSAmgcoA74371rplbqM27yVsd3y.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Halo",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "Avatar: The Last Airbender",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/lzZpWEaqzP0qVA5nkCc5ASbNcSy.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //         {
  //           title: "House of the Dragon",
  //           imgUrl:
  //             "https://image.tmdb.org/t/p/original/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg",
  //           topFiveUserId: createdUser.id,
  //           watchedUserId: createdUser.id,
  //         },
  //       ],
  //     },
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
