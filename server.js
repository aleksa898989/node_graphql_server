const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const databaseConnection = require("./db/databaseConnection");
require("dotenv").config();

const app = express();
const apolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

const main = async () => {
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("hello");
  });

  await databaseConnection(process.env.MONGO_URI);
  app.listen(4000, () => {
    console.log(`server is running at a port 4000`);
  });
};

main();
