// https://leetcode.com/problems/longest-palindromic-substring/
export function l005LongestPalindromicSubstring_SLOW(s: string): string {
  // that's O(N3) so time limits exceeds
  let palindrome = '';
  const isPalindrome = (i: string): boolean =>
    i.split('').reverse().join('') == i;
  for (let x = 0; x < s.length; x++) {
    for (let y = 1; y <= s.length; y++) {
      const toCheck = s.substring(x, y);
      if (isPalindrome(toCheck) && toCheck.length > palindrome.length) {
        palindrome = toCheck;
      }
    }
  }

  return palindrome;
}

export function l005LongestPalindromicSubstring_FASTER(s: string): string {
  // that's time O(N2), space O(1)
  let start = 0;
  let maxLength = 1;
  const expandArea = (left: number, right: number) => {    
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandArea(i - 1, i + 1);
    expandArea(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

export function l005LongestPalindromicSubstring_EXTERNAL(s: string): string {
  if (!s || s.length <= 1) {
    return s;
  }

  const expand = (s: string, begin: number, end: number): string => {
    while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--;
      end++;
    }

    return s.substring(begin + 1, end);
  };
  let longestPalindrome = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
      if (maybeLongest.length > longestPalindrome.length) {
        longestPalindrome = maybeLongest;
      }
    });
  }

  return longestPalindrome;
}
