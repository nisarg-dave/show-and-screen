import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../../pothos/schemas";
import { NextRequest } from "next/server";

const server = new ApolloServer({
  schema,
});
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});
export { handler as GET, handler as POST };
