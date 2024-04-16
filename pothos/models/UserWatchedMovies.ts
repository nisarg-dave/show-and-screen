import { builder } from "../builder";

builder.prismaObject("UserWatchedMovies", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    movieId: t.exposeID("movieId"),
  }),
});
