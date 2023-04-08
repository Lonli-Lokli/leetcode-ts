export function l424LongestRepeatingCharacterReplacement(s: string, k: number): number {
  const letters = Array.from({length: 26}, () => 0);
  let result = 0;
  let right = 0;
  let left = 0;
  while (right < s.length) {
      letters[s[right].charCodeAt(0) - 'A'.charCodeAt(0)] += 1; 
      const max = Math.max(...letters);
      const windowLen = right - left + 1;
      if ((windowLen - max) <= k) {
          result = Math.max(result, windowLen);
      } else {
          letters[s[left].charCodeAt(0) - 'A'.charCodeAt(0)] -= 1; 
          left++;
      }
      right++;
      
  }
  
  return result;    
};
