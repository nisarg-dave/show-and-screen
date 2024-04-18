import { builder } from "../builder";

builder.prismaObject("UserWatchedTvShows", {
  fields: (t) => ({
    tvShow: t.relation("tvShow"),
  }),
});
