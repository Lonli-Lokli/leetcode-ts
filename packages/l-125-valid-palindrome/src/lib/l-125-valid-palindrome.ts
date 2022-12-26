// https://leetcode.com/problems/valid-palindrome/
export function l125ValidPalindrome(input: string): boolean {
  return input.split('').reverse().join().replace(/[^a-zA-Z0-9]/g, '').toUpperCase() == input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
}
