import { builder } from "../builder";

builder.prismaObject("Movie", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    posterPath: t.exposeString("posterPath"),
    backdropPath: t.exposeString("backdropPath"),
  }),
});
