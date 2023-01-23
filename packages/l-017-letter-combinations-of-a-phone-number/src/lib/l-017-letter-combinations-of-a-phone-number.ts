// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
export function l017LetterCombinationsOfAPhoneNumber_Recursive(
  digits: string
): string[] {
  const map: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const result: string[] = [];
  const backtrack = (i: number, current: string) => {
    if (digits.length === current.length) {
      result.push(current);
      return;
    }
    for (const c of map[digits[i]]) {
      backtrack(i + 1, current + c);
    }
  };
  if (digits.length > 0) backtrack(0, '');
  return result;
}

export function l017LetterCombinationsOfAPhoneNumber_Iterative(
  digits: string
): string[] {
  if (digits === '') return [];

  const map: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  if (digits === '') return [];
  let result = map[digits[0]];
  
  let index = 1;

  while (index < digits.length) {
    const words = [];
    const second = map[digits[index]];
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < second.length; j++) {
        words.push(result[i] + second[j]);
      }
    }
    result = words;
    index++;
  }

  return result;
}
