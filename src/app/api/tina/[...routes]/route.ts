import { createTinaRouteHandler } from "tinacms/dist/toolkit/next-api-handler";

const handler = createTinaRouteHandler({
  tina: {
    databaseAdaptor: "memory",
  },
});

export { handler as GET, handler as POST };
