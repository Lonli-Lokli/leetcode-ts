export function l171ExcelSheetColumnNumber(columnTitle: string): number {
  return columnTitle
    .split('')
    .reverse()
    .reduce(
      (acc, curr, idx) =>
        acc + (curr.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * Math.pow(26, idx),
      0
    );
}
