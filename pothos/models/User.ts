import { disconnect } from "process";
import { builder } from "../builder";
import { prisma } from "../db";
import { MovieInput, MovieTitleInput } from "./Movie";
import { TvShowInput } from "./TvShow";

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
  addToWatchedTvShows: t.prismaField({
    type: "User",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      tvShow: t.arg({
        type: TvShowInput,
        required: true,
      }),
    },
    resolve: async (query, parent, args) => {
      const foundTvShow = await prisma.tvShow.findFirst({
        where: {
          title: args.tvShow.title,
        },
      });

      const user = await prisma.user.findUnique({
        ...query,
        where: { email: args.user.email },
      });
      if (!user) {
        throw new Error("User not found");
      }

      if (foundTvShow) {
        return await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            watchedTvShows: {
              connectOrCreate: {
                create: {
                  tvShowId: foundTvShow.id,
                },
                where: {
                  userId_tvShowId: {
                    userId: user.id,
                    tvShowId: foundTvShow.id,
                  },
                },
              },
            },
          },
        });
      } else {
        const createdTvShow = await prisma.tvShow.create({
          data: {
            title: args.tvShow.title,
            posterPath: args.tvShow.posterPath,
          },
        });
        return await prisma.user.update({
          where: {
            email: user.email,
          },
          data: {
            watchedTvShows: {
              connectOrCreate: {
                create: {
                  tvShowId: createdTvShow.id,
                },
                where: {
                  userId_tvShowId: {
                    userId: user.id,
                    tvShowId: createdTvShow.id,
                  },
                },
              },
            },
          },
        });
      }
    },
  }),
  removeFromTopFiveMovies: t.prismaField({
    type: "User",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      movie: t.arg({
        type: MovieTitleInput,
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
      if (!foundMovie) {
        throw new Error("Movie not found");
      }

      return prisma.user.update({
        where: {
          email: args.user.email,
        },
        data: {
          topFiveMovies: {
            disconnect: {
              userId_movieId: {
                movieId: foundMovie.id,
                userId: user.id,
              },
            },
          },
        },
      });
    },
  }),
}));
