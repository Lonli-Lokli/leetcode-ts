import { StockSpanner } from './l-901-online-stock-span';

describe('901. Online Stock Span', () => {
  it('Case 1', () => {
    const stockSpanner = new StockSpanner();
    expect(stockSpanner.next(100)).toBe(1); // return 1
    expect(stockSpanner.next(80)).toBe(1); // return 1
    expect(stockSpanner.next(60)).toBe(1); // return 1
    expect(stockSpanner.next(70)).toBe(2); // return 2
    expect(stockSpanner.next(60)).toBe(1); // return 1
    expect(stockSpanner.next(75)).toBe(4); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
    expect(stockSpanner.next(85)).toBe(6); // return 6
  });
});
