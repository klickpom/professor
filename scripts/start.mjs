import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT || "3000";
const staticIndex = join(root, "out", "index.html");
const serveJs = join(root, "node_modules", "serve", "build", "main.js");
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");

const child = existsSync(staticIndex)
  ? spawn(
      process.execPath,
      [serveJs, "out", "-l", `tcp://0.0.0.0:${port}`, "--no-port-switching"],
      { cwd: root, stdio: "inherit", env: process.env },
    )
  : spawn(
      process.execPath,
      [nextBin, "start", "--hostname", "0.0.0.0", "--port", port],
      { cwd: root, stdio: "inherit", env: process.env },
    );

child.on("exit", (code) => process.exit(code ?? 1));
