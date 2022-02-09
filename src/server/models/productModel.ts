import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Product } from "../../shared/types/product";
import { connection } from "../services/dbService";

export interface ProductDocument extends mongoose.Document, Product {
  _id: any;
}

export type ProductModel = mongoose.Model<ProductDocument>;

const productSchema = new mongoose.Schema({
  productName: String,
  amountAvailable: Number,
  cost: Number,
  sellerId: ObjectId,
}, {
  versionKey: false,
  timestamps: true,
});

export const productModel = connection.model<ProductDocument>("product", productSchema);
