import { l740DeleteAndEarn } from './l-740-delete-and-earn';

describe('740. Delete and Earn', () => {
  it('Case 1', () => {
    expect(l740DeleteAndEarn([3, 4, 2])).toEqual(6);
  });
  it('Case 2', () => {
    expect(l740DeleteAndEarn([2, 2, 3, 3, 3, 4])).toEqual(9);
  });
});
