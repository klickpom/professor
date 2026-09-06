import { spawnSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const proxy = join(root, "proxy.ts");
const parked = join(root, "proxy.ts.static-off");

if (existsSync(proxy)) {
  renameSync(proxy, parked);
}

const env = {
  ...process.env,
  STATIC_EXPORT: "1",
  NEXT_PUBLIC_SITE_URL: "https://professo-eg.online",
};

try {
  const build = spawnSync("npx", ["next", "build"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: true,
  });
  if (build.status) process.exit(build.status);

  const flatten = spawnSync("node", ["scripts/flatten-default-locale.mjs"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: true,
  });
  if (flatten.status) process.exit(flatten.status);
} finally {
  if (existsSync(parked)) {
    renameSync(parked, proxy);
  }
}
