import { l239SlidingWindowMaximum_Slow, l239SlidingWindowMaximum_Neetcode } from './l-239-sliding-window-maximum';

describe('239. Sliding Window Maximum', () => {
  it('Case 1', () => {
    expect(l239SlidingWindowMaximum_Slow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
    expect(l239SlidingWindowMaximum_Neetcode([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });
});
