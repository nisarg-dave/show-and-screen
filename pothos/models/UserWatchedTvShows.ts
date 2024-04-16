import { builder } from "../builder";

builder.prismaObject("UserWatchedTvShows", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    tvShowId: t.exposeID("tvShowId"),
  }),
});
