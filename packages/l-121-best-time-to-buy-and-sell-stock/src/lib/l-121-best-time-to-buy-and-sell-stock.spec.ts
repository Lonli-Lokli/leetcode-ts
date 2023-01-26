import { l121BestTimeToBuyAndSellStock } from './l-121-best-time-to-buy-and-sell-stock';

describe('121. Best Time to Buy and Sell Stock', () => {
  it('Case 1', () => {
    expect(l121BestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
  it('Case 2', () => {
    expect(l121BestTimeToBuyAndSellStock([7, 6, 4, 3, 1])).toEqual(0);
  });
  it('Case 3', () => {
    expect(l121BestTimeToBuyAndSellStock([1,2])).toEqual(1);
  });
});
