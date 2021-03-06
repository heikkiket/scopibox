import "./config.js";

import app from "./app.js";
import createApollo from "./apollo/index.js";
import mongoose from "./db/index.js";

(async () => {
  try {
    const apolloServer = createApollo();
    apolloServer.applyMiddleware({ app });

    mongoose.on("connected", () => {
      app.listen({ port: process.env.PORT }, () =>
        console.log(
          `Server running at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
        )
      );
    });
  } catch (err) {
    console.log("Server error: ", err.message);
  }
})();
