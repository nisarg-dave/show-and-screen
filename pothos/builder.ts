import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
// These are the prisma types generated by running npm run prisma-build
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "./db";

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({});
// builder.mutationType({});
