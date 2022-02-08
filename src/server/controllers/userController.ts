import { Request } from "express";
import Joi from "joi";
import { userModel } from "../models/userModel";
import { sha256 } from "../services/cryptoService";
import { validateSchema } from "../services/joiService";


export async function createUserApi(req: Request) {
  const body = validateSchema<{
    username: string,
    password: string,
  }>(req.body, Joi.object({
    username: Joi.string(),
    password: Joi.string().min(4),
  }));
  const password = sha256(body.password);
  await userModel.create({
    username: body.username,
    password,
  });

  return {
    json: {}
  };
}
