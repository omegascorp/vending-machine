
import mongoose from "mongoose";
import { User } from "../../shared/types/user";
import { connection } from "../services/dbService";

export interface UserDocument extends mongoose.Document, User {
  _id: any;
}

export type UserModel = mongoose.Model<UserDocument>;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  deposit: Number,
  role: String,
}, {
  versionKey: false,
  timestamps: true,
});

userSchema.index({
  "username": 1,
}, {
  unique: true,
});

userSchema.index({
  "username": 1,
  "password": 1,
}, {});

export const userModel = connection.model<UserDocument>("user", userSchema);
