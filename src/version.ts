import pkg from "../package.json" assert { type: "json" }

const CommitVer = "COMMIT_VERSION"
const BunVersion = "BUN_VERSION"

export const versionInfo = `qbun version ${pkg.version} (git-${CommitVer}) (bun-${BunVersion})`
