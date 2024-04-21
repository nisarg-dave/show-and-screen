import { builder } from "../builder";

builder.prismaObject("UserTopFiveTvShows", {
  fields: (t) => ({
    tvShow: t.relation("tvShow"),
  }),
});
