import { l079WordSearch } from './l-079-word-search';

describe('79. Word Search', () => {
  test.each`
    board                                                                 | word            | expectedResult
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCCED'}     | ${true}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]} | ${'SEE'}        | ${true}
    ${[['C', 'A', 'A'], ['A', 'A', 'A'], ['B', 'C', 'D']]}                | ${'AAB'}        | ${true}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCESEEEFS'} | ${true}
  `(
    'given board $board and words $words we should get $expectedResult',
    ({
      board,
      word,
      expectedResult,
    }: {
      board: string[][];
      word: string;
      expectedResult: boolean;
    }) => {
      expect(l079WordSearch(board, word)).toEqual(expectedResult);
    }
  );
});
