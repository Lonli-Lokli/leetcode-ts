import { l020ValidParentheses } from './l-020-valid-parentheses';

describe('20. Valid Parentheses', () => {
  it('Example 1: ', () => {
    expect(l020ValidParentheses("()")).toEqual(true);
  });
  it('Example 2: ', () => {
    expect(l020ValidParentheses("()[]{}")).toEqual(true);
  });
  it('Example 3: ', () => {
    expect(l020ValidParentheses("(]")).toEqual(false);
  });
});
