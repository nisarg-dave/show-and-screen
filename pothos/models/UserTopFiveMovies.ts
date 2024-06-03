import { builder } from "../builder";
import { prisma } from "../db";
import { MovieIdInput } from "./Movie";
import { FindUserInput } from "./User";

builder.prismaObject("UserTopFiveMovies", {
  fields: (t) => ({
    movie: t.relation("movie"),
  }),
});

// Directly updating User to disconnect a movie might leave orphaned entries in UserTopFiveMovies where the userId exists but the corresponding movie entry is missing.
// This violates the constraints imposed by the relation and onDelete: Restrict
builder.mutationFields((t) => ({
  removeFromTopFiveMovies: t.prismaField({
    type: "UserTopFiveMovies",
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

      const userTopFiveMovie = await prisma.userTopFiveMovies.findFirst({
        where: {
          userId: foundUser.id,
          movieId: foundMovie.id,
        },
      });

      if (!userTopFiveMovie) {
        throw new Error("Movie not found in user's top five list");
      }

      return prisma.userTopFiveMovies.delete({
        where: {
          userId_movieId: {
            movieId: foundMovie.id,
            userId: foundUser.id,
          },
        },
      });
    },
  }),
}));
