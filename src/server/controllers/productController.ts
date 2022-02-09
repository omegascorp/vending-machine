import { Request } from "express";
import Joi from "joi";
import { Product } from "../../shared/types/product";
import { User } from "../../shared/types/user";
import { productModel } from "../models/productModel";
import { checkProductCreateAccess, checkProductEditAccess } from "../validators/productValidatort";
import { validateSchema } from "../validators/schemaValidator";

export async function readProductsApi(req: Request) {
  const products = await productModel.find({}, null, {
    sort: {
      createdAt: -1,
    },
  });

  return {
    json: products,
  };
}

export async function createProductApi(req: Request, user: User) {
  const body = validateSchema<Partial<Product>>(req.body, Joi.object({
    productName: Joi.string(),
    amountAvailable: Joi.number(),
    cost: Joi.string(),
  }));

  checkProductCreateAccess(user);

  const product = await productModel.create({
    productName: body.productName,
    amountAvailable: body.amountAvailable,
    cost: body.cost,
    sellerId: user._id,
  });

  return {
    json: product,
  };
}

export async function editProductApi(req: Request, user: User) {
  const body = validateSchema<Partial<Product>>(req.body, Joi.object({
    productName: Joi.string(),
    amountAvailable: Joi.number(),
    cost: Joi.string(),
  }));

  const product = await productModel.create({
    productName: body.productName,
    amountAvailable: body.amountAvailable,
    cost: body.cost,
    
    sellerId: user._id,
  });

  checkProductEditAccess(user, product);



  return {
    json: product,
  };
}
