import { l044WildcardMatching_DynamicProgramming } from './l-044-wildcard-matching';

describe('44. Wildcard Matching', () => {
  it('Case 1', () => {
    expect(l044WildcardMatching_DynamicProgramming("aa", "a")).toEqual(false);
  });
  it('Case 2', () => {
    expect(l044WildcardMatching_DynamicProgramming("aa", "*")).toEqual(true);
  });
  it('Case 3', () => {
    expect(l044WildcardMatching_DynamicProgramming("cb", "?a")).toEqual(false);
  });
  it('Case 4', () => {
    expect(l044WildcardMatching_DynamicProgramming("adceb", "*a*b")).toEqual(true);
  });
  it('Case 5', () => {
    expect(l044WildcardMatching_DynamicProgramming("", "******")).toEqual(true);
  });
});
