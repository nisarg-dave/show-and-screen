import { builder } from "../builder";
import { prisma } from "../db";
import { MovieIdInput } from "./Movie";
import { FindUserInput } from "./User";

builder.prismaObject("UserWantToWatchMovies", {
  fields: (t) => ({
    movie: t.relation("movie"),
  }),
});

builder.mutationFields((t) => ({
  removeFromWantToWatchMovies: t.prismaField({
    type: "Movie",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      movie: t.arg({
        type: MovieIdInput,
        required: true,
      }),
    },
    resolve: async (query, parent, args) => {
      const foundMovie = await prisma.movie.findFirst({
        where: {
          id: args.movie.id,
        },
      });

      const foundUser = await prisma.user.findUnique({
        where: { email: args.user.email },
      });

      if (!foundUser) {
        throw new Error("User not found");
      }
      if (!foundMovie) {
        throw new Error("Movie not found");
      }

      const userWantToWatchMovie = await prisma.userWantToWatchMovies.findFirst(
        {
          where: {
            userId: foundUser.id,
            movieId: foundMovie.id,
          },
        }
      );

      if (!userWantToWatchMovie) {
        throw new Error("Movie not found in user's want to watch list");
      }

      await prisma.userWantToWatchMovies.delete({
        where: {
          userId_movieId: {
            movieId: foundMovie.id,
            userId: foundUser.id,
          },
        },
      });
      return foundMovie;
    },
  }),
}));
