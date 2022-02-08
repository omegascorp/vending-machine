import { createRouter, Method } from "path-router-express";

import config from "../config";
import logService from "../services/logService";

const router = createRouter({
  debug: config.debug,
  log: logService,
  routes: [
  ],
});

export default router;
