import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const arDir = join(outDir, "ar");

if (!existsSync(arDir)) {
  console.error("Missing out/ar — static export did not emit the default locale.");
  process.exit(1);
}

cpSync(arDir, outDir, { recursive: true });
console.log("Flattened /ar to site root for Hostinger Apache.");
