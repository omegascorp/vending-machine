import Joi from "joi";
import { ValidationError } from "./routerErrorService";

export function validateSchema<T>(value: any, schema: Joi.Schema): T {
  const result = schema.validate(value);
  if (result.error) {
    throw new ValidationError(
      result.error.message
      .replace(/\"/g, "")
      .replace(/^[a-z]/, (value) => value.toUpperCase())
    );
  }
  return result.value;
}
