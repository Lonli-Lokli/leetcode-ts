import {
  l347TopKFrequentElements_Naive,
  l347TopKFrequentElements_Neetcode,
} from './l-347-top-k-frequent-elements';

const cases: () => Array<[number[], number, number[]]> = () => [
  [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
  [[1], 1, [1]],
];

describe('347. Top K Frequent Elements', () => {
  it.each(cases())(
    'Naive: given %p and %p as arguments, returns %p',
    (nums, k, expectedResult) => {
      expect(l347TopKFrequentElements_Naive(nums, k)).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Neetcode: given %p and %p as arguments, returns %p',
    (nums, k, expectedResult) => {
      expect(l347TopKFrequentElements_Neetcode(nums, k)).toEqual(
        expectedResult
      );
    }
  );
});
