import { builder } from "../builder";

builder.prismaObject("TvShow", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    posterPath: t.exposeString("posterPath"),
  }),
});

export const TvShowInput = builder.inputType("TvShowInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    posterPath: t.string({ required: true }),
  }),
});

export const TvShowIdInput = builder.inputType("TvShowIdInput", {
  fields: (t) => ({
    id: t.string({ required: true }),
  }),
});
