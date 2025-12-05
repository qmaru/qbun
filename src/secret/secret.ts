import initSync, { SafeRandom } from "@qmaru/rtools-web"

export type FormatType = "base64" | "hex"

export const Generate = async (length: number, format: FormatType) => {
  await initSync()
  const safeBytes = SafeRandom.gen_bytes(length)
  if (format === "hex") {
    return safeBytes.to_hex()
  }
  return safeBytes.to_base64()
}
