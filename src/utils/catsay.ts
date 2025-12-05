export function catsay(text: string): string {
  const bubble = `< ${text} >`
  const innerLen = text.length
  const leftPadding = "  "
  const border = `${leftPadding}${"-".repeat(innerLen)}`
  const cat = `
    /\\_/\\
   ( o.o )
    > ^ <
`
  return `${border}\n${bubble}\n${border}${cat}`
}
