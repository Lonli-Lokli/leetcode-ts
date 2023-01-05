import { l005LongestPalindromicSubstring_EXTERNAL, l005LongestPalindromicSubstring_FASTER, l005LongestPalindromicSubstring_SLOW } from './l-005-longest-palindromic-substring';

const cases = [['babad', 'bab'], ['cbbd', 'bb'], ['a', 'a'],['bb', 'bb'],['abb', 'bb'],['abcba1abcbc2abcba', 'bcba1abcb'] ];

describe('5. Longest Palindromic Substring', () => {
  it.each(cases)(
    "SLOW: given %p as arguments, returns %p",
    (arg, expectedResult) => {
      expect(l005LongestPalindromicSubstring_SLOW(arg)).toEqual(expectedResult);
    }
  );  
  it.each(cases)(
    "FASTER: given %p as arguments, returns %p",
    (arg, expectedResult) => {
      expect(l005LongestPalindromicSubstring_FASTER(arg)).toEqual(expectedResult);
    }
  ); 
  it.each(cases)(
    "EXTERNAL: given %p as arguments, returns %p",
    (arg, expectedResult) => {
      expect(l005LongestPalindromicSubstring_EXTERNAL(arg)).toEqual(expectedResult);
    }
  ); 
});
