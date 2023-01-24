// https://leetcode.com/problems/word-search-ii/
export function l212WordSearchIi_Initial(
  board: string[][],
  words: string[]
): string[] {
  const ROWS = board.length;
  const COLUMNS = board[0].length;

  const backtrack = (
    subWord: string,
    word: string,
    current: string,
    row: number,
    column: number,
    visited: Set<string>
  ): boolean => {
    if (word === current) return true;

    if (subWord.length === 0) return false;
    if (row < 0 || row >= ROWS) return false;
    if (column < 0 || column >= COLUMNS) return false;

    if (board[row][column] !== subWord[0]) return false;

    const id = row.toString().padEnd(2, '$') + column.toString().padEnd(2, '$');
    if (visited.has(id)) return false;

    visited.add(id);

    const result =
      backtrack(
        subWord.slice(1),
        word,
        current + subWord[0],
        row + 1,
        column,
        visited
      ) ||
      backtrack(
        subWord.slice(1),
        word,
        current + subWord[0],
        row - 1,
        column,
        visited
      ) ||
      backtrack(
        subWord.slice(1),
        word,
        current + subWord[0],
        row,
        column + 1,
        visited
      ) ||
      backtrack(
        subWord.slice(1),
        word,
        current + subWord[0],
        row,
        column - 1,
        visited
      );

    if (!result) {
      visited.delete(id);
    }

    return result;
  };

  const result: Set<string> = new Set<string>();
  for (const word of words) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        if (
          !result.has(word) &&
          backtrack(word, word, '', i, j, new Set<string>())
        ) {
          result.add(word);
        }
      }
    }
  }

  return Array.from(result.values());
}

export function l212WordSearchIi_Trie(
  board: string[][],
  words: string[]
): string[] {
  class TrieNode {
    public children = new Map<string, TrieNode>();
    public isWord = false;

    addWord(word: string) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let curr: TrieNode = this;

      for (const c of word) {
        if (!curr.children.has(c)) {
          curr.children.set(c, new TrieNode());
        }
        curr = curr.children.get(c)!;
      }

      curr.isWord = true;
    }
  }

  const root = new TrieNode();
  words.forEach((w) => root.addWord(w));

  const ROWS = board.length;
  const COLUMNS = board[0].length;

  const visited = new Set<string>();
  const result = new Set<string>();

  const backtrack = (
    node: TrieNode,
    word: string,
    r: number,
    c: number
  ): void => {
    if (r < 0 || c < 0 || r === ROWS || c === COLUMNS) return;
    const id = r.toString().padEnd(2, '$') + c.toString().padEnd(2, '$');
    if (visited.has(id) || !node.children.has(board[r][c])) return;
    visited.add(id);
    node = node.children.get(board[r][c])!;

    word += board[r][c];

    if (node.isWord) {
      result.add(word);
    }

    backtrack(node, word, r - 1, c);
    backtrack(node, word, r + 1, c);
    backtrack(node, word, r, c - 1);
    backtrack(node, word, r, c + 1);
    visited.delete(id);
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      backtrack(root, '', i, j);
    }
  }

  return Array.from(result.values());
}

export function l212WordSearchIi_Leetcode(
  board: string[][],
  words: string[]
): string[] {
  class TrieNode {
    public links = new Map<string, TrieNode>();
    public word: string | null = null;
    public end = false;
  }

  const backTrack = (node: TrieNode, i: number, j: number): void => {
    const letter = board[i][j];
    const curNode = node.links.get(letter);
    if (!curNode) return;

    if (curNode.end && curNode.word) {
      answer.push(curNode.word);
      curNode.end = false;
    }

    const ch = board[i][j];
    board[i][j] = '#';

    if (i + 1 < row && curNode.links.has(board[i + 1][j])) {
      backTrack(curNode, i + 1, j);
    }

    if (i - 1 >= 0 && curNode.links.has(board[i - 1][j])) {
      backTrack(curNode, i - 1, j);
    }

    if (j + 1 < col && curNode.links.has(board[i][j + 1])) {
      backTrack(curNode, i, j + 1);
    }

    if (j - 1 >= 0 && curNode.links.has(board[i][j - 1])) {
      backTrack(curNode, i, j - 1);
    }

    board[i][j] = ch;

    if (curNode.links.size === 0) {
      node.links.delete(letter);
    }
  };

  const answer: string[] = [];
  const row = board.length;
  const col = board[0].length;
  const root = new TrieNode();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let cur = root;
    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      if (!cur.links.has(ch)) {
        const newNode = new TrieNode();
        cur.links.set(ch, newNode);
        cur = newNode;
      } else {
        cur = cur.links.get(ch)!;
      }
    }
    cur.word = word;
    cur.end = true;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (root.links.has(board[i][j])) {
        backTrack(root, i, j);
      }
    }
  }

  return answer;
}
