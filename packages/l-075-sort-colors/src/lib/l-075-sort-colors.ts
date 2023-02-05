// https://leetcode.com/problems/sort-colors/
export function l075SortColors(nums: number[]): void {
  let p0 = 0;
  let p2 = nums.length - 1;
  let curr = 0;

  const swap = (from: number, to: number) => {
    const temp = nums[from];
    nums[from] = nums[to];
    nums[to] = temp;
  };
  while (curr <= p2) {
    if (nums[curr] === 0) {
      swap(curr++, p0++);
    } else if (nums[curr] === 2) {
      swap(curr, p2--);
    } else curr++;
  }
}
