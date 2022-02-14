import { createRouter, Method } from "path-router-express";

import config from "../config";
import { createProductApi, deleteProductApi, readProductsApi, updateProductApi } from "../controllers/productController";
import { authResolve } from "../resolves/authResolve";
import logService from "../services/logService";

const router = createRouter({
  debug: config.debug,
  log: logService,
  routes: [
    {
      path: "/products",
      method: Method.get,
      callback: readProductsApi,
    },
    {
      path: "/products",
      method: Method.post,
      resolves: [authResolve],
      callback: createProductApi,
    },
    {
      path: "/products/:id",
      method: Method.put,
      resolves: [authResolve],
      callback: updateProductApi,
    },
    {
      path: "/products/:id",
      method: Method.delete,
      resolves: [authResolve],
      callback: deleteProductApi,
    },
  ],
});

export default router;
