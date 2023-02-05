import { l010RegularExpressionMatching_DynamicProgramming, l010RegularExpressionMatching_Recursive } from './l-010-regular-expression-matching';

describe('10. Regular Expression Matching', () => {
  it('Case 1', () => {
    expect(l010RegularExpressionMatching_Recursive("aa", "a")).toEqual(false);
    expect(l010RegularExpressionMatching_DynamicProgramming("aa", "a")).toEqual(false);
  });
  it('Case 2', () => {
    expect(l010RegularExpressionMatching_Recursive("aa", "a*")).toEqual(true);
    expect(l010RegularExpressionMatching_DynamicProgramming("aa", "a*")).toEqual(true);
  });
  it('Case 3', () => {
    expect(l010RegularExpressionMatching_Recursive("ab", ".*")).toEqual(true);
    expect(l010RegularExpressionMatching_DynamicProgramming("ab", ".*")).toEqual(true);
  });
});
