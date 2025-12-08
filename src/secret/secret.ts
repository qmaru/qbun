import { SafeRandom } from "@qmaru/rtools-node"

export type FormatType = "base64" | "hex"

export const Generate = async (length: number, format: FormatType) => {
  const safeBytes = SafeRandom.gen_bytes(length)
  if (format === "hex") {
    return safeBytes.to_hex()
  }
  return safeBytes.to_base64()
}
