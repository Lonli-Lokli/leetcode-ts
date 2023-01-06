import { l075SetMatrixZeroes_Initial, l075SetMatrixZeroes_Optimal } from './l-073-set-matrix-zeroes';

const cases: Array<[number[][], number[][]]> = [
  [
    [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
    [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ],
  ],
];

describe('73. Set Matrix Zeroes', () => {
  it.each(cases)(
    'Initial: given %p as arguments, returns %p',
    (args, expectedResult) => {
      l075SetMatrixZeroes_Initial(args);

      expect(args).toEqual(expectedResult);
    }
  );
  it.each(cases)(
    'Optimal: given %p as arguments, returns %p',
    (args, expectedResult) => {
      l075SetMatrixZeroes_Optimal(args);

      expect(args).toEqual(expectedResult);
    }
  );
});
