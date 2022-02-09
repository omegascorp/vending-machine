import { Request } from "express";
import { User } from "../../shared/types/user";
import { userModel } from "../models/userModel";
import { userIdByJwtToken } from "../services/jwtService";

export async function authResolve(req: Request): Promise<User> {
  const authorization = req.headers.authorization || "";
  if (typeof authorization !== "string") {
    return null;
  }

  const data = authorization.split(" ");
  if (data.length < 2) {
    return null;
  }

  const token = data[1];
  const userId = await userIdByJwtToken(token);
  const user = await userModel.findById(userId);

  if (!user) {
    return null;
  }

  return user.toJSON();
}