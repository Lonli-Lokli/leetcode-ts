import { l2379MinimumRecolorsToGetKConsecutiveBlackBlocks } from './l-2379-minimum-recolors-to-get-k-consecutive-black-blocks';

describe('2379. Minimum Recolors to Get K Consecutive Black Blocks', () => {
  it('Case 1', () => {
    expect(l2379MinimumRecolorsToGetKConsecutiveBlackBlocks("WBBWWBBWBW", 7)).toEqual(
      3
    );
  });
  it('Case 2', () => {
    expect(l2379MinimumRecolorsToGetKConsecutiveBlackBlocks("WBWBBBW", 2)).toEqual(
      0
    );
  });
});
