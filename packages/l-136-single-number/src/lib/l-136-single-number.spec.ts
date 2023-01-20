import { l136SingleNumber, l136SingleNumber_Smart } from './l-136-single-number';


const cases: () => Array<[number[], number]> = () => [
  [[2,2,1], 1],
  [[4,1,2,1,2], 4],
];

describe('136. Single Number', () => {
  it.each(cases())(
    'Initial: given %p, returns %p',
    (number, expectedResult) => {
      expect(l136SingleNumber(number)).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Smart: given %p, returns %p',
    (number, expectedResult) => {
      expect(l136SingleNumber_Smart(number)).toEqual(expectedResult);
    }
  );
});
