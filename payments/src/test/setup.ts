import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

jest.mock("../nats-wrapper");

let mongo: any;

process.env.STRIPE_KEY =
  "sk_test_51PNZddBYq9j5mLiDSOgh8LKp0YmFCSX03nARpykq0SxoFX56PS5m7z5L8lK2xyqqjEjXAkB3S6j4sWmyeRdSIPmZ006sN0wqQJ";

beforeAll(async () => {
  process.env.JWT_KEY = "asdf";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});
