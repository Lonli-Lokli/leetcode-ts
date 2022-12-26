import { l008StringToIntegerAtoi } from './l-008-string-to-integer-atoi';

describe('008. String to Integer (atoi)', () => {
  it('Example 1: ', () => {
    expect(l008StringToIntegerAtoi('42')).toEqual(42);
  });
  it('Example 2: ', () => {
    expect(l008StringToIntegerAtoi('   -42')).toEqual(-42);
  });
  it('Example 3: ', () => {
    expect(l008StringToIntegerAtoi('4193 with words')).toEqual(4193);
  });
  it('Example 4: ', () => {
    expect(l008StringToIntegerAtoi('4193 with words')).toEqual(4193);
  });
  it('Example 5: ', () => {
    expect(l008StringToIntegerAtoi('+-12')).toEqual(0);
  });
});
