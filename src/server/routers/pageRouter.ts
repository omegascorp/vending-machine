import { createRouter, Method } from "path-router-express";

import config from "../config";
import { renderAppPage } from "../controllers/pageController";
import logService from "../services/logService";

const router = createRouter({
  debug: config.debug,
  log: logService,
  routes: [
    {
      method: Method.get,
      path: "/",
      callback: renderAppPage,
    },
  ],
});

export default router;
