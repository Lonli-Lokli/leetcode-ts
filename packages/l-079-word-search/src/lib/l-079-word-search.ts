export function l079WordSearch(board: string[][], word: string): boolean {
  const ROWS = board.length;
  const COLUMN = board[0].length;

  const backtrack = (
    expected: string,
    current: string,
    r: number,
    c: number
  ): boolean => {
    if (current === word) return true;
    if (r < 0 || r >= board.length) return false;
    if (c < 0 || c >= board[0].length) return false;

    if (board[r][c] !== expected[0]) return false; // fail
  
    const prevValue = board[r][c];
    board[r][c] = '$';
    const result = (
      backtrack(expected.slice(1), current + expected[0], r + 1, c) ||
      backtrack(expected.slice(1), current + expected[0], r - 1, c) ||
      backtrack(expected.slice(1), current + expected[0], r, c - 1) ||
      backtrack(expected.slice(1), current + expected[0], r, c + 1)
    );
    board[r][c] = prevValue;

    return result;
  };
  for (let row = 0; row < ROWS; row++) {
    for (let column = 0; column < COLUMN; column++) {
      const found = backtrack(word, '', row, column);
      if (found) return true;
    }
  }

  return false;
}
