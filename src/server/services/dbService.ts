import mongoose from "mongoose";

import config from "../config";

const mongoUrl = config.mongoUrl;

export const dbService = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connection = config.mongoDb ? mongoose.connection.useDb(config.mongoDb) : mongoose.connection;
