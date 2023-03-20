import { MovingAverage } from './l-346-moving-average-from-data-stream';

describe('346. Moving Average from Data Stream', () => {
  it('Case 1', () => {
    const movingAverage = new MovingAverage(3);
    expect(movingAverage.next(1)).toBe(1); // return 1.0 = 1 / 1
    expect(movingAverage.next(10)).toBe(5.5); // return 5.5 = (1 + 10) / 2
    expect(movingAverage.next(3)).toBe(4.666666666666667); // return 4.66667 = (1 + 10 + 3) / 3
    expect(movingAverage.next(5)).toBe(6); // return 6.0 = (10 + 3 + 5) / 3
  });
});
