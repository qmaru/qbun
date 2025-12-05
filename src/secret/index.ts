import { Command } from "commander"

import { Generate } from "./secret"
import type { FormatType } from "./secret"

export function createSecret(_: Command): Command {
  const cmd = new Command("secret")
    .description("generate secret string")
    .option("-l, --length <length>", "length of the secret string")
    .option("-f, --format <format>", "format of the secret string (base64, hex)")

  cmd.action(async () => {
    const opts = cmd.opts() as { length?: string; format?: FormatType }
    const length = opts.length ? parseInt(opts.length, 10) : 16
    const format = opts.format || "base64"

    const secretStr = await Generate(length, format)
    console.log(secretStr)
  })

  return cmd
}
