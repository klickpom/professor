import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");

const protectedNames = new Set([
  ".env",
  ".env.example",
  ".git",
  ".github",
  ".gitignore",
  ".next",
  "AGENTS.md",
  "CLAUDE.md",
  "README.md",
  "app",
  "components",
  "data",
  "eslint.config.mjs",
  "i18n",
  "lib",
  "messages",
  "next.config.ts",
  "node_modules",
  "out",
  "package-lock.json",
  "package.json",
  "postcss.config.mjs",
  "proxy.ts",
  "public",
  "scripts",
  "tsconfig.json",
]);

if (!existsSync(join(outDir, "index.html"))) {
  console.error("Missing out/index.html. Run npm run build first.");
  process.exit(1);
}

for (const entry of readdirSync(outDir, { withFileTypes: true })) {
  if (protectedNames.has(entry.name)) {
    console.error(`Refusing to overwrite source path: ${entry.name}`);
    process.exit(1);
  }
  const dest = join(root, entry.name);
  rmSync(dest, { recursive: true, force: true });
  cpSync(join(outDir, entry.name), dest, { recursive: true });
}

console.log("Copied static export to the repo root for Hostinger public_html.");
