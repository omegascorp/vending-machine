import { createRouter, Method } from "path-router-express";

import config from "../config";
import { createUserApi } from "../controllers/userController";
import logService from "../services/logService";
import { onRouterError } from "../services/routerErrorService";

const router = createRouter({
  debug: config.debug,
  log: logService,
  onError: onRouterError,
  routes: [
    {
      path: "/user",
      method: Method.post,
      callback: createUserApi,
    },
  ],
});

export default router;
