import { builder } from "../builder";

builder.prismaObject("UserTopFiveMovies", {
  fields: (t) => ({
    userId: t.exposeID("userId"),
    movieId: t.exposeID("movieId"),
  }),
});
