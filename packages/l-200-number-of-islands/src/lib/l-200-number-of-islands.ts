// https://leetcode.com/problems/number-of-islands/
export function l200NumberOfIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  type QElement = { value: string };

  const ROWS = grid.length;
  const COLUMNS = grid[0].length;
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const qGrid: QElement[][] = [];

  // convert to JS-friendly objects intead of primitives for easier `isVisited` check
  for (let r = 0; r < ROWS; r++) {
    qGrid.push([]);
    for (let c = 0; c < COLUMNS; c++) {
      qGrid[r].push({
        value: grid[r][c],
      });
    }
  }

  // initial values
  const visited = new Set<QElement>();
  let islands = 0;

  // bfs search
  const bfs = (r: number, c: number) => {
    const queue: Array<number[]> = [];
    visited.add(qGrid[r][c]);
    queue.push([r, c]);

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
      for (const [dirR, dirC] of DIRECTIONS) {
        const neighbourR = row + dirR;
        const neighbourC = col + dirC;
        if (
          neighbourR >= 0 && neighbourR < ROWS &&
          neighbourC >=0 && neighbourC < COLUMNS &&
          qGrid[neighbourR][neighbourC].value === '1' &&
          !visited.has(qGrid[neighbourR][neighbourC])
        ) {
          queue.push([neighbourR, neighbourC]);
          visited.add(qGrid[neighbourR][neighbourC]);
        }
      }
    }
  };

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
      if (qGrid[r][c].value === '1' && !visited.has(qGrid[r][c])) {
        bfs(r, c);
        islands++;
      }
    }
  }

  return islands;
}
