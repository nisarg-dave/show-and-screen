import { builder } from "../builder";

builder.prismaObject("UserWantToWatchTvShows", {
  fields: (t) => ({
    tvShow: t.relation("tvShow"),
  }),
});
