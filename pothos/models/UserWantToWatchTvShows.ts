import { builder } from "../builder";

builder.prismaObject("UserWantToWatchTvShows", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    tvShowId: t.exposeID("tvShowId"),
  }),
});
