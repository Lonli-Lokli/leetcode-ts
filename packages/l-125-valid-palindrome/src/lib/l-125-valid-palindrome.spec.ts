import { l125ValidPalindrome } from './l-125-valid-palindrome';

describe('125. Valid Palindrome', () => {
  it('Example 1:', () => {
    expect(l125ValidPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  });
  it('Example 2:', () => {
    expect(l125ValidPalindrome("race a car")).toEqual(false);
  });
  it('Example 3:', () => {
    expect(l125ValidPalindrome(" ")).toEqual(true);
  });
  it('Example 4:', () => {
    expect(l125ValidPalindrome("ab_a")).toEqual(true);
  });
  it('Example 5:', () => {
    expect(l125ValidPalindrome("0P")).toEqual(false);
  });
});
