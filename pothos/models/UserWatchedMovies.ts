import { builder } from "../builder";

builder.prismaObject("UserWatchedMovies", {
  fields: (t) => ({
    movie: t.relation("movie"),
  }),
});
