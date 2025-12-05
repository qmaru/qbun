import getMdprImages from "@qmaru/mdp-js"

export async function GetUrls(url: string): Promise<string[]> {
  const images = await getMdprImages(url)
  return images
}
