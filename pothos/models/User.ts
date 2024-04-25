import { builder } from "../builder";
import { prisma } from "../db";
import { MovieInput } from "./Movie";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    topFiveMovies: t.relation("topFiveMovies"),
    topFiveTvShows: t.relation("topFiveTvShows"),
    watchedMovies: t.relation("watchedMovies"),
    watchedTvShows: t.relation("watchedTvShows"),
    toWatchMovies: t.relation("toWatchMovies"),
    toWatchTvShows: t.relation("toWatchTvShows"),
  }),
});

const FindUserInput = builder.inputType("FindUserInput", {
  fields: (t) => ({
    email: t.string({ required: true }),
  }),
});

builder.queryFields((t) => ({
  user: t.prismaField({
    type: "User",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
    },
    resolve: async (query, root, args, ctx, info) => {
      const user = await prisma.user.findUnique({
        ...query,
        where: { email: args.user.email },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  }),
}));

builder.mutationFields((t) => ({
  addToWatchedMovies: t.prismaField({
    type: "User",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      movie: t.arg({
        type: MovieInput,
        required: true,
      }),
    },
    resolve: async (query, parent, args) => {
      const foundMovie = await prisma.movie.findFirst({
        where: {
          title: args.movie.title,
        },
      });

      const user = await prisma.user.findUnique({
        ...query,
        where: { email: args.user.email },
      });
      if (!user) {
        throw new Error("User not found");
      }

      if (foundMovie) {
        return await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            watchedMovies: {
              connectOrCreate: {
                create: {
                  movieId: foundMovie.id,
                },
                where: {
                  userId_movieId: {
                    userId: user.id,
                    movieId: foundMovie.id,
                  },
                },
              },
            },
          },
        });
      } else {
        const createdMovie = await prisma.movie.create({
          data: {
            title: args.movie.title,
            posterPath: args.movie.posterPath,
            backdropPath: args.movie.backdropPath,
          },
        });
        return await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            watchedMovies: {
              connectOrCreate: {
                create: {
                  movieId: createdMovie.id,
                },
                where: {
                  userId_movieId: {
                    userId: user.id,
                    movieId: createdMovie.id,
                  },
                },
              },
            },
          },
        });
      }
    },
  }),
}));
