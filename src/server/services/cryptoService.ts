import crypto from "crypto";

export function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
