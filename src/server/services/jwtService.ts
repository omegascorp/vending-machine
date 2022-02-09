import jsonwebtoken from "jsonwebtoken";
import config from "../config";

interface JwtData {
  id: string;
}

export function signJwt(data: JwtData): Promise<string> {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(data, config.jwtSecret, (error: Error, token: string) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(token);
    });
  });
}

export function verifyJwt(token: string): Promise<JwtData> {
  return new Promise((resolve, reject) => {
    jsonwebtoken.verify(token, config.jwtSecret, (error: Error, data: JwtData) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
}

export async function userIdByJwtToken(token: string) {
  if (!token) {
    return null;
  }
  const jwtData = await verifyJwt(token);
  if (!jwtData) {
    return null;
  }
  return jwtData.id;
}
