import { ApolloServer } from "apollo-server-express";

import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";

const createApollo = () => {
  const apolloServer = new ApolloServer({
    typeDefs: schemas,
    resolvers,
  });
  return apolloServer;
};

export default createApollo;
