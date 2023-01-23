import { l013RomanToInteger } from './l-013-roman-to-integer';

describe('13. Roman to Integer', () => {
  it('Initial', () => {
    expect(l013RomanToInteger('III')).toEqual(3);
    expect(l013RomanToInteger('IV')).toEqual(4);
    expect(l013RomanToInteger('LVIII')).toEqual(58);
    expect(l013RomanToInteger('MCMXCIV')).toEqual(1994);
  });
});
