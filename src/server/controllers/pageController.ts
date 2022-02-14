import { fs } from "mz";
import path from "path";
import config from "../config";

export async function renderAppPage() {
  const pageBuffer = await fs.readFile(path.join(__dirname, "../../../templates/page.html"));

  return {
    content: pageBuffer.toString().replace(/\{\{version\}\}/g, config.version),
  };
}
