import { configure, getLogger } from "log4js";
import path from "path";

import config from "../config";

const logger = getLogger("default");
const logLevel = config.debug ? "debug" : "warn";
logger.level = logLevel;

export function configureLog(name: string) {
  configure({
    appenders: {
      console: { type: "console" },
      default: { type: "file", filename: path.join(__dirname, `../../logs/${name}.log`) },
    },
    categories: {
      default: { appenders: ["console", "default"], level: logLevel },
    },
  });
}

export default {
  info(value: any, ...params: any[]) {
    return logger.info(value, ...params);
  },
  warn(value: any, ...params: any[]) {
    return logger.warn(value, ...params);
  },
  error(value: any, ...params: any[]) {
    return logger.error(value, ...params);
  },
}
