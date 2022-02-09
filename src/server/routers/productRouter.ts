import { createRouter, Method } from "path-router-express";

import config from "../config";
import { createProductApi, readProductsApi } from "../controllers/productController";
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
  ],
});

export default router;
