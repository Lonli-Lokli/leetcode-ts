// https://leetcode.com/problems/valid-palindrome-ii/
export function l680ValidPalindromeIi(s: string): boolean {
  const helper = (i: number, j: number, mismatch: boolean): boolean => {
    while (i < j) {
      if (s[i] !== s[j]) {
        return mismatch
          ? false
          : helper(i + 1, j, true) || helper(i, j - 1, true);
      }
      i++;
      j--;
    }

    return true;
  };

  return helper(0, s.length - 1, false);
}
