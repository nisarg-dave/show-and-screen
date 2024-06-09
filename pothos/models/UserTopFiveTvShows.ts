import { builder } from "../builder";
import { prisma } from "../db";
import { TvShowIdInput } from "./TvShow";
import { FindUserInput } from "./User";

builder.prismaObject("UserTopFiveTvShows", {
  fields: (t) => ({
    tvShow: t.relation("tvShow"),
  }),
});

builder.mutationFields((t) => ({
  removeFromTopFiveTvShows: t.prismaField({
    type: "UserTopFiveTvShows",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      tvShow: t.arg({
        type: TvShowIdInput,
        required: true,
      }),
    },
    resolve: async (query, parent, args) => {
      const foundTvShow = await prisma.tvShow.findFirst({
        where: {
          id: args.tvShow.id,
        },
      });

      const foundUser = await prisma.user.findUnique({
        where: { email: args.user.email },
      });

      if (!foundUser) {
        throw new Error("User not found");
      }
      if (!foundTvShow) {
        throw new Error("Tv Show not found");
      }

      const userTopFiveTvShow = await prisma.userTopFiveTvShows.findFirst({
        where: {
          userId: foundUser.id,
          tvShowId: foundTvShow.id,
        },
      });

      if (!userTopFiveTvShow) {
        throw new Error("Tv Show not found in user's top five list");
      }

      return prisma.userTopFiveTvShows.delete({
        where: {
          userId_tvShowId: {
            tvShowId: foundTvShow.id,
            userId: foundUser.id,
          },
        },
      });
    },
  }),
  addToTopFiveTvShows: t.prismaField({
    type: "UserTopFiveTvShows",
    args: {
      user: t.arg({
        type: FindUserInput,
        required: true,
      }),
      tvShow: t.arg({
        type: TvShowIdInput,
        required: true,
      }),
    },
    resolve: async (query, parent, args) => {
      const foundTvShow = await prisma.tvShow.findFirst({
        where: {
          id: args.tvShow.id,
        },
      });

      const foundUser = await prisma.user.findUnique({
        where: { email: args.user.email },
      });

      if (!foundUser) {
        throw new Error("User not found");
      }
      if (!foundTvShow) {
        throw new Error("Tv Show not found");
      }

      return prisma.userTopFiveTvShows.create({
        data: {
          tvShowId: foundTvShow.id,
          userId: foundUser.id,
        },
      });
    },
  }),
}));
