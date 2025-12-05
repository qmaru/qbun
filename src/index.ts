#!/usr/bin/env node
import { Command } from "commander"
import pkg from "../package.json" assert { type: "json" }

import { createPing } from "./ping"

const program = new Command()

program
  .name("qbun")
  .description("many bun tools")
  .version(pkg.version)
  .helpOption("-h, --help", "Show help information")

program.addCommand(createPing(program))

program.parse(process.argv)
if (process.argv.length <= 2 || program.args.length === 0) {
  program.outputHelp()
}
