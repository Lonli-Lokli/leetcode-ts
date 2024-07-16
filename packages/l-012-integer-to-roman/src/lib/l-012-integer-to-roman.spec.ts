import { l012IntegerToRoman } from './l-012-integer-to-roman';

describe('12. Integer to Roman', () => {
  it('Example 1', () => {
    expect(l012IntegerToRoman(3749)).toEqual('MMMDCCXLIX');
  });
  it('Example 2', () => {
    expect(l012IntegerToRoman(58)).toEqual('LVIII');
  });
  it('Example 3', () => {
    expect(l012IntegerToRoman(1994)).toEqual('MCMXCIV');
  });
});
