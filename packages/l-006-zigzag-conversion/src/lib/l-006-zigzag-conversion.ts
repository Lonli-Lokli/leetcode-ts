export function l006ZigzagConversion(s: string, numRows: number): string {
  if (s.length === 1 || numRows < 2) return s;

  const gap = 2 * numRows - 2;
  
  let output = "";

  for (let row = 0; row < numRows; row++) {
      for (let currentRow = row; currentRow < s.length; currentRow += gap) {
          if (row === 0 || row === numRows - 1) {
              output += s[currentRow];
          } else {
              output += s[currentRow];
              const shift = currentRow + gap - (row * 2);
              if (shift < s.length) {
                  output += s[shift];
              }
          }
      }
  }

  return output;
};