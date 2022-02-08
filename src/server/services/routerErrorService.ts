import { ErrorResult } from "path-router-express";
import { MongoError } from "mongodb";

export class ValidationError extends Error {
  private validationError = true;
}

export class AccessError extends Error {
  private accessError = true;
}

export function onRouterError(error: Error): ErrorResult {
  console.log(error, (error as any).accessError, error instanceof AccessError);
  if (error instanceof AccessError) {
    return {
      status: 403,
      name: "accessDenied",
      message: error.message,
    };
  }
  if (error instanceof ValidationError) {
    return {
      status: 400,
      name: "validationError",
      message: error.message,
    };
  }
  if (error instanceof MongoError && error.message.startsWith("E11000")) {
    return {
      status: 400,
      name: "duplicateEntry",
      message: "Duplicate entry",
    };
  }
  if (error instanceof MongoError) {
    return {
      status: 500,
      name: "serverError",
      message: "Internal Server Error",
    };
  }
  return error;
}
