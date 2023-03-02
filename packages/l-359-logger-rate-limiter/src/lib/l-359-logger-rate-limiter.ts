// https://leetcode.com/problems/logger-rate-limiter/

export class Logger {
  private messages = new Map<string, number>();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const time = this.messages.get(message);
    if (time === undefined) {
      this.messages.set(message, timestamp);
      return true;
    }
    if (time + 10 > timestamp) return false;
    this.messages.set(message, timestamp);
    return true;
  }
}
