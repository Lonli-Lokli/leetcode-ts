import { l212WordSearchIi_Initial, l212WordSearchIi_Leetcode, l212WordSearchIi_Trie } from './l-212-word-search-ii';

describe('212. Word Search II', () => {
  test.each`
    board                                                                                       | words                             | expectedResult
    ${[['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']]} | ${['oath', 'pea', 'eat', 'rain']} | ${['eat', 'oath']}
    ${[['a', 'b'], ['c', 'd']]}                                                                 | ${['abcb']}                       | ${[]}
    ${['a']}                                                                                    | ${['ab']}                         | ${[]}
    ${[['o', 'a', 'b', 'n'], ['o', 't', 'a', 'e'], ['a', 'h', 'k', 'r'], ['a', 'f', 'l', 'v']]} | ${['oa', 'oaa']}                  | ${['oa', 'oaa']}
  `(
    'given board $board and words $words we should get $expectedResult',
    ({
      board,
      words,
      expectedResult,
    }: {
      board: string[][];
      words: string[];
      expectedResult: string[];
    }) => {
      expect(l212WordSearchIi_Initial(board, words)).toEqual(
        expect.arrayContaining(expectedResult)
      );
      expect(l212WordSearchIi_Trie(board, words)).toEqual(
        expect.arrayContaining(expectedResult)
      );
      expect(l212WordSearchIi_Leetcode(board, words)).toEqual(
        expect.arrayContaining(expectedResult)
      );
    }
  );
});
