// https://leetcode.com/problems/min-stack/
export class MinStack {
  private stack: number[] = [];
  private min: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
      this.min.push(val);
    }
  }

  pop(): void {
    const top = this.stack.pop();
    if (this.min[this.min.length - 1] === top) {
      this.min.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}
