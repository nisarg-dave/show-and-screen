import { builder } from "../builder";
import { prisma } from "../db";

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
        // include: {
        //   topFiveMovies: {
        //     select: {
        //       movie: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //           backdropPath: true,
        //         },
        //       },
        //     },
        //   },
        //   topFiveTvShows: {
        //     select: {
        //       tvShow: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //         },
        //       },
        //     },
        //   },
        //   toWatchMovies: {
        //     select: {
        //       movie: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //           backdropPath: true,
        //         },
        //       },
        //     },
        //   },
        //   toWatchTvShows: {
        //     select: {
        //       tvShow: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //         },
        //       },
        //     },
        //   },
        //   watchedMovies: {
        //     select: {
        //       movie: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //           backdropPath: true,
        //         },
        //       },
        //     },
        //   },
        //   watchedTvShows: {
        //     select: {
        //       tvShow: {
        //         select: {
        //           id: true,
        //           title: true,
        //           posterPath: true,
        //         },
        //       },
        //     },
        //   },
        // },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  }),
}));
