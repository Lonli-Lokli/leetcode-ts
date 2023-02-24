export function l036ValidSudoku(board: string[][]): boolean {
  const hasDuplicates = (shiftTop: number, shiftLeft:number, rows: number, cols: number): boolean => {
      const set = new Set<string>();
      
      for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
              const i = r + shiftTop;
              const j = c + shiftLeft;
              if (board[i][j] === '.') continue;
              if (set.has(board[i][j])) 
                  return true;
              set.add(board[i][j]);
          }
      }
      
      return false;
  }
  
  for (let r = 0; r < board.length; r ++) {
      if (hasDuplicates(r, 0, 1, board[r].length)) return false;
  }
  for (let c = 0; c < board[0].length; c ++) {
      if (hasDuplicates(0, c, board[c].length, 1)) return false;
  }
  if (hasDuplicates(0, 0, 3, 3) || hasDuplicates(0, 3, 3, 3) || hasDuplicates(0, 6, 3, 3) || hasDuplicates(3, 0, 3, 3) 
     || hasDuplicates(3, 3, 3, 3) || hasDuplicates(3, 6, 3, 3) || hasDuplicates(6, 0, 3, 3) || hasDuplicates(6, 3, 3, 3) || hasDuplicates(6, 6, 3, 3))
      return false;
  
  return true;
};