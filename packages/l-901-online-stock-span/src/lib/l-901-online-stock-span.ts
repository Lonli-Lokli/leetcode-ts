// https://leetcode.com/problems/online-stock-span/
export class StockSpanner {
  private stack: any[] = [];

  next(price: number): number {
    let days = 1;
    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      days += this.stack.pop()![1];
    }
    this.stack.push([price, days]);

    return days;
  }
}
