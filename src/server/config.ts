import { fs } from "mz";
import path from "path";
import { ServerConfig } from "../shared/types/config";

// envs variables to be replaced in config
const envMap: Record<string, keyof ServerConfig> = {
  "MONGO_URL": "mongoUrl",
  "MONGO_DB": "mongoDb",
};

function getConfig(): ServerConfig {
  const config = fs.readFileSync(path.join(__dirname, "../../env.json"), {
    encoding: 'utf-8',
  });

  const packString = fs.readFileSync(path.join(__dirname, "../../package.json"), {
    encoding: 'utf-8',
  });

  const pack = JSON.parse(packString);

  const envConfig: Record<string, string> = {};
  Object.entries(envMap).forEach(([key, value]) => {
    if (process.env[key]) {
      envConfig[value] = process.env[key];
    }
  });

  return {
    ...JSON.parse(config),
    ...envConfig,
    version: pack.version,
  };
}

export default getConfig();
