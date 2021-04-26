import { ApolloServer } from "apollo-server-express";

import schemas from "../schemas/index.js";
import resolvers from "../resolvers/index.js";
import buildContext from './buildContext.js'

const createApollo = () => {
  const apolloServer = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    context: async ({ req, res }) => buildContext({req, res})
  });
  return apolloServer;
};

export default createApollo;
