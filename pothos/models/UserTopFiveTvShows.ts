import { builder } from "../builder";

builder.prismaObject("UserTopFiveTvShows", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    tvShowId: t.exposeID("tvShowId"),
  }),
});
