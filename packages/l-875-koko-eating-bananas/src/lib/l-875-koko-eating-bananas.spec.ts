import { l875KokoEatingBananas } from './l-875-koko-eating-bananas';

describe('875. Koko Eating Bananas', () => {
  it('Case 1', () => {
    expect(l875KokoEatingBananas([3, 6, 7, 11], 8)).toEqual(4);
  });
  it('Case 2', () => {
    expect(l875KokoEatingBananas([30, 11, 23, 4, 20], 5)).toEqual(30);
  });
  it('Case 3', () => {
    expect(l875KokoEatingBananas([30, 11, 23, 4, 20], 6)).toEqual(23);
  });
});
