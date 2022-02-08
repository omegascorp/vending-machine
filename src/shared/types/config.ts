export interface ServerConfig  {
  env: string;
  debug: boolean;
  mongoUrl: string;
  mongoDb: string;
  url: string;
  jwtSecret: string;
  version: string;
}
