import { l042TrappingRainWater } from './l-042-trapping-rain-water';

const cases: Array<[number[], number]> = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
];

describe('42. Trapping Rain Water', () => {
  it.each(cases)(
    'Initial: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l042TrappingRainWater(args)).toEqual(expectedResult);
    }
  );
});
