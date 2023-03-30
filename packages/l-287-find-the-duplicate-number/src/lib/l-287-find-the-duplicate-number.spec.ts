import {
  l287FindTheDuplicateNumber_Flip,
  l287FindTheDuplicateNumber_Set,
  l287FindTheDuplicateNumber_TortoiseAndHare,
} from './l-287-find-the-duplicate-number';

describe('287. Find the Duplicate Number', () => {
  it('Case 1', () => {
    expect(l287FindTheDuplicateNumber_Set([1, 3, 4, 2, 2])).toEqual(2);
    expect(l287FindTheDuplicateNumber_Flip([1, 3, 4, 2, 2])).toEqual(2);
    expect(l287FindTheDuplicateNumber_TortoiseAndHare([1, 3, 4, 2, 2])).toEqual(2);
  });
  it('Case 2', () => {
    expect(l287FindTheDuplicateNumber_Set([3, 1, 3, 4, 2])).toEqual(3);
    expect(l287FindTheDuplicateNumber_Flip([3, 1, 3, 4, 2])).toEqual(3);
    expect(l287FindTheDuplicateNumber_TortoiseAndHare([3, 1, 3, 4, 2])).toEqual(3);
  });
  it('Case 3', () => {
    expect(l287FindTheDuplicateNumber_Set([2, 2, 2, 2, 2])).toEqual(2);
    expect(l287FindTheDuplicateNumber_Flip([2, 2, 2, 2, 2])).toEqual(2);
    expect(l287FindTheDuplicateNumber_TortoiseAndHare([2, 2, 2, 2, 2])).toEqual(2);
  });
});

