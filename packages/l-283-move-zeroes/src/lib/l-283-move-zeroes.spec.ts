import { l283MoveZeroes } from './l-283-move-zeroes';

describe('283. Move Zeroes', () => {
  it('Case 1', () => {
    const arr = [0,1,0,3,12];
    l283MoveZeroes(arr);
    expect(arr).toEqual([1,3,12,0,0]);
  });
});
