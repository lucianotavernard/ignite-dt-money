export function generatePagesArray(from: number, to: number) {
  return Array.from(
    { length: to - from },
    (_, index) => from + index + 1
  ).filter((page) => page > 0)
}
