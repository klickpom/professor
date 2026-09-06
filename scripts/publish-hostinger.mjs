import { mkdtempSync, cpSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");

if (!existsSync(join(outDir, "index.html"))) {
  console.error("Missing out/index.html. Run npm run build first.");
  process.exit(1);
}

const remote = spawnSync("git", ["remote", "get-url", "origin"], {
  cwd: root,
  encoding: "utf8",
  windowsHide: true,
});
if (remote.status) process.exit(remote.status);
const origin = remote.stdout.trim();

const dir = mkdtempSync(join(tmpdir(), "professor-hostinger-"));
cpSync(outDir, dir, { recursive: true });

const gitEnv = {
  ...process.env,
  GIT_AUTHOR_NAME: process.env.GIT_AUTHOR_NAME || "klickpom",
  GIT_AUTHOR_EMAIL:
    process.env.GIT_AUTHOR_EMAIL || "klickpom@users.noreply.github.com",
  GIT_COMMITTER_NAME: process.env.GIT_COMMITTER_NAME || "klickpom",
  GIT_COMMITTER_EMAIL:
    process.env.GIT_COMMITTER_EMAIL || "klickpom@users.noreply.github.com",
};

function git(args) {
  const result = spawnSync("git", args, {
    cwd: dir,
    env: gitEnv,
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.status) process.exit(result.status);
}

try {
  git(["init", "-b", "hostinger"]);
  git(["add", "-A"]);
  git(["commit", "-m", "deploy: static export for professor-eg.online"]);
  git(["remote", "add", "origin", origin]);
  git(["push", "-f", "origin", "hostinger"]);
} finally {
  rmSync(dir, { recursive: true, force: true });
}

console.log("Published static site to origin/hostinger.");
