import { l202HappyNumber } from './l-202-happy-number';

const cases: () => Array<[number, boolean]> = () => [
  [19, true],
  [2, false],
];

describe('202. Happy Number', () => {
  it.each(cases())(
    'Initial: given %p, returns %p',
    (number, expectedResult) => {
      expect(l202HappyNumber(number)).toEqual(expectedResult);
    }
  );
});
