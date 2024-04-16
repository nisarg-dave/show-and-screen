import { builder } from "../builder";

builder.prismaObject("UserWantToWatchMovies", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    movieId: t.exposeID("movieId"),
  }),
});
