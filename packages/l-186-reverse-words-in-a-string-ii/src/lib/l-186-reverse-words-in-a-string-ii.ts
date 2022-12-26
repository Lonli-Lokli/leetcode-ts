// https://leetcode.com/problems/reverse-words-in-a-string-ii/
export function l186ReverseWordsInAStringIi(s: string[]): void {
  const inputLength = s.length;
  let start = 0,
    end = 0;

  reverse(s, 0, inputLength - 1);
  while (start < inputLength) {
    while (end < inputLength && s[end] != ' ') {
      ++end;
    }
    reverse(s, start, end - 1);
    start = end + 1;
    ++end;
  }
}

function reverse(s: string[], left: number, right: number) {
  while (left < right) {
    const swapped = s[right];
    s[right--] = s[left];
    s[left++] = swapped;
  }
}
