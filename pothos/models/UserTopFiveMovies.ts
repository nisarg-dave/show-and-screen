import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("UserTopFiveMovies", {
  fields: (t) => ({
    movie: t.relation("movie"),
  }),
});
