#!/usr/bin/env node
import { Command } from "commander"

import { versionInfo } from "./version"
import { createPing } from "./ping"
import { createMdp } from "./mdp"
import { createSecret } from "./secret"

const program = new Command()

program
  .name("qbun")
  .description("many bun tools")
  .version(versionInfo, "-v, --version", "Show version")
  .helpOption("-h, --help", "Show help")

program.addCommand(createPing(program))
program.addCommand(createMdp(program))
program.addCommand(createSecret(program))

program.parse(process.argv)
if (process.argv.length <= 2 || program.args.length === 0) {
  program.outputHelp()
}
