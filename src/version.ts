import pkg from "../package.json" assert { type: "json" }

const COMMIT_VERSION = ""
const BUN_VERSION = ""

export const versionInfo = `qbun version ${pkg.version} (git-${COMMIT_VERSION}) (bun-${BUN_VERSION})`
