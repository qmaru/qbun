import { Command } from "commander"

import { Ping } from "./ping"

export function createPing(_: Command): Command {
  const cmd = new Command("ping").description("cli test")

  cmd.action(() => {
    const result = Ping()
    console.log(result)
  })

  return cmd
}
