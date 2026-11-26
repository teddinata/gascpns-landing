// Writes public/version.json before each build so a deploy can be checked from the admin panel.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const git = (cmd) => {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
};

const release = {
  app: "landing",
  version: require("../package.json").version,
  commit: git("git rev-parse --short HEAD") || "dev",
  built_at: new Date().toISOString(),
};

fs.writeFileSync(path.join(__dirname, "..", "public", "version.json"), JSON.stringify(release, null, 2) + "\n");
