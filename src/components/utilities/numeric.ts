export function isNumeric(n: string): boolean {
  const v: number = parseFloat(n)
  return !isNaN(v) && isFinite(v)
}

export function genericSort(a: any, b: any): number {
  if (isNumeric(a) && isNumeric(b)) return parseFloat(a) - parseFloat(b)
  if (a.localeCompare) return a.localeCompare(b)
  return 0
}
