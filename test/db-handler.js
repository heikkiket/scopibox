import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
const connect = async () => {
  const uri = await mongod.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // autoReconnect: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000,
  };


  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database, close the connection and stop mongod.
 */
const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

export default { connect, closeDatabase, clearDatabase };
