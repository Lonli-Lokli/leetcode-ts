import {
  l567PermutationInString_Submitted,
  l567PermutationInString_Neetcode,
} from './l-567-permutation-in-string';

describe('567. Permutation in String', () => {
  it('Case 1', () => {
    expect(l567PermutationInString_Submitted('ab', 'eidbaooo')).toEqual(true);
    expect(l567PermutationInString_Neetcode('ab', 'eidbaooo')).toEqual(true);
  });
  it('Case 2', () => {
    expect(l567PermutationInString_Submitted('ab', 'eidboaoo')).toEqual(false);
    expect(l567PermutationInString_Neetcode('ab', 'eidboaoo')).toEqual(false);
  });
});
