import { builder } from "../builder";

builder.prismaObject("Movie", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    posterPath: t.exposeString("posterPath"),
    backdropPath: t.exposeString("backdropPath"),
  }),
});

export const MovieInput = builder.inputType("MovieInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
    posterPath: t.string({ required: true }),
    backdropPath: t.string({ required: true }),
  }),
});

export const MovieTitleInput = builder.inputType("MovieTitleInput", {
  fields: (t) => ({
    title: t.string({ required: true }),
  }),
});
