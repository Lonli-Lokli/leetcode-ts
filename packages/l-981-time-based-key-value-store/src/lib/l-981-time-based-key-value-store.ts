// https://leetcode.com/problems/time-based-key-value-store/
export class TimeMap {
  private map = new Map<string, {timestamp: number, value: string}[]>();

  set(key: string, value: string, timestamp: number): void {
    this.map.set(key, [{ timestamp, value }].concat((this.map.get(key) ?? [])));
  }

  get(key: string, timestamp: number): string {
    const timestamps = this.map.get(key);
    if (!timestamps) return '';

    for (const kv of timestamps) {
      if (kv.timestamp <= timestamp) return kv.value
    }

    return '';
  }
}