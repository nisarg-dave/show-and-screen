import { builder } from "../builder";
import { prisma } from "../db";
import { FindUserInput } from "./User";
import { TvShowIdInput } from "./TvShow";

builder.prismaObject("UserWantToWatchTvShows", {
  fields: (t) => ({
    tvShow: t.relation("tvShow"),
  }),
});

builder.mutationFields((t) => ({
  removeFromWantToWatchTvShows: t.prismaField({
    type: "TvShow",
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
        where: { id: args.tvShow.id },
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

      const userWantToWatchTvShow =
        await prisma.userWantToWatchTvShows.findFirst({
          where: {
            userId: foundUser.id,
            tvShowId: foundTvShow.id,
          },
        });

      if (!userWantToWatchTvShow) {
        throw new Error("Tv Show not found in user's want to watch list");
      }

      await prisma.userWantToWatchTvShows.delete({
        where: {
          userId_tvShowId: {
            tvShowId: foundTvShow.id,
            userId: foundUser.id,
          },
        },
      });
      return foundTvShow;
    },
  }),
}));
