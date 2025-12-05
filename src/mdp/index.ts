import { Command } from "commander"

import { GetUrls } from "./mdp"

export function createMdp(_: Command): Command {
  const cmd = new Command("mdp")
    .description("get mdpr image urls")
    .option("-u, --url <url>", "mdpr news url")

  cmd.action(async () => {
    const opts = cmd.opts() as { url?: string }
    const url = opts.url
    if (!url) {
      console.error("url is required")
      process.exit(1)
    }

    const urls = await GetUrls(url)
    if (urls.length === 0) {
      console.log("no image found")
      return
    }

    for (const u of urls) {
      console.log(u)
    }
  })

  return cmd
}
