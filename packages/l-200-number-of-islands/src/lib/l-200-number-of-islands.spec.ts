import { l200NumberOfIslands } from './l-200-number-of-islands';

const cases: () => Array<[string[][], number]> = () => [
  [
    [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ],
    1,
  ],
  [
    [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ],
    3,
  ],
];

describe('200. Number of Islands', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, should succeed',
    (grid, islands) => {
      expect(l200NumberOfIslands(grid)).toEqual(islands);
    }
  );
});
