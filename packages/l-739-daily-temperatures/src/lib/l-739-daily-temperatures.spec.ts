import {
  l739DailyTemperatures_BruteForce,
  l739DailyTemperatures_Stack,
} from './l-739-daily-temperatures';

describe('739. Daily Temperatures', () => {
  it('Case 1', () => {
    expect(
      l739DailyTemperatures_BruteForce([73, 74, 75, 71, 69, 72, 76, 73])
    ).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    expect(
      l739DailyTemperatures_Stack([73, 74, 75, 71, 69, 72, 76, 73])
    ).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
  it('Case 2', () => {
    expect(l739DailyTemperatures_BruteForce([30, 40, 50, 60])).toEqual([
      1, 1, 1, 0,
    ]);
    expect(l739DailyTemperatures_Stack([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });
  it('Case 3', () => {
    expect(l739DailyTemperatures_BruteForce([30, 60, 90])).toEqual([1, 1, 0]);
    expect(l739DailyTemperatures_Stack([30, 60, 90])).toEqual([1, 1, 0]);
  });
});
