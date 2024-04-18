import { builder } from "../builder";

builder.prismaObject("UserWantToWatchMovies", {
  fields: (t) => ({
    movie: t.relation("movie"),
  }),
});
