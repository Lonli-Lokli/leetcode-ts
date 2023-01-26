export function l121BestTimeToBuyAndSellStock(prices: number[]): number {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(prices[i] - min, profit);
    min = Math.min(prices[i], min);
  }

  return profit;
}
