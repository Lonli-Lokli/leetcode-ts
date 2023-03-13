// https://leetcode.com/problems/longest-consecutive-sequence/
export function l128LongestConsecutiveSequence(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const i of set.values()) {
    if (!set.has(i - 1)) {
      let currNum = i;
      let currStrike = 1;
      while (set.has(currNum + 1)) {
        currNum++;
        currStrike++;
      }
      longest = Math.max(longest, currStrike);
    }
  }

  return longest;
}
