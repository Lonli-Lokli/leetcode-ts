import { l022GenerateParentheses } from './l-022-generate-parentheses';

describe('22. Generate Parentheses', () => {
  it('Case 1', () => {
    expect(l022GenerateParentheses(3)).toEqual( ["((()))","(()())","(())()","()(())","()()()"]);
  });
  it('Case 2', () => {
    expect(l022GenerateParentheses(1)).toEqual( ["()"]);
  });
});
