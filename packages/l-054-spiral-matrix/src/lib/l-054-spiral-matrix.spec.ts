import { l054SpiralMatrix } from './l-054-spiral-matrix';


const cases: Array<[number[][], number[]]> = [
  [
    [[1,2,3],[4,5,6],[7,8,9]],
    [1,2,3,6,9,8,7,4,5]
  ],
  [ [[1,2,3,4],[5,6,7,8],[9,10,11,12]],[1,2,3,4,8,12,11,10,9,5,6,7]],
];

describe('54. Spiral Matrix', () => {
  it.each(cases)(
    'Initial: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l054SpiralMatrix(args)).toEqual(expect.arrayContaining(expectedResult));
    }
  );
});
