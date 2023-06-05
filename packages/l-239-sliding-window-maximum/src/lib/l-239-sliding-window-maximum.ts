// https://leetcode.com/problems/sliding-window-maximum/
export function l239SlidingWindowMaximum_Slow(
  nums: number[],
  k: number
): number[] {
  const map = new Map<number, number>();
  const output = [];

  // first build the initial window and set first max
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < k; i++) {
    max = Math.max(max, nums[i]);
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  output.push(max);

  // go for all other windows
  for (let i = k; i < nums.length; i++) {
    const curr = nums[i]!;

    // first process new number
    map.set(curr, (map.get(curr) ?? 0) + 1);

    // remove non-window element
    const toRemove = nums[i - k];
    const toRemoveFreq = map.get(toRemove)!;
    if (toRemoveFreq === 1) {
      // last one, so delete from map
      map.delete(toRemove);
    } else {
      map.set(toRemove, toRemoveFreq - 1);
    }

    // we need to calculate new max if previous one was removed
    if (toRemoveFreq === 1 && max === toRemove) {
      max = Math.max(...map.keys());
    }
    if (curr > max) {
      max = curr;
    }
    output.push(max);
  }
  return output;
}

export function l239SlidingWindowMaximum_Neetcode(
  nums: number[],
  k: number
): number[] {
  const res: number[] = [];
  let left = 0;
  let right = 0;

  const queue: number[] = [];

  while (right < nums.length) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
      queue.pop();
    }
    queue.push(right);

    if (left > queue[0]) {
      queue.shift();
    }

    if (right + 1 >= k) {
      res.push(nums[queue[0]]);
      left += 1;
    }

    right += 1;
  }

  return res;
}
