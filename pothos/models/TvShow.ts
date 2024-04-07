import { builder } from "../builder";

builder.prismaObject("TvShow", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    imgUrl: t.exposeString("imgUrl"),
  }),
});
