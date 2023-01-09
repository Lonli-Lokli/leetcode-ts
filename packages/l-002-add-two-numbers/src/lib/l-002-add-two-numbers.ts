// https://leetcode.com/problems/add-two-numbers/
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  asString(): string {
    return (
      this.val.toString() + (this.next === null ? '' : this.next.asString())
    );
  }
}

export function l002AddTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result: ListNode = new ListNode(0);
  let current1 = l1;
  let current2 = l2;
  let processing = result;
  let addition = 0;
  while (current1 !== null || current2 !== null) {
    const sum = addition + (current1?.val ?? 0) + (current2?.val ?? 0);
    processing.next = new ListNode(sum % 10);
    processing = processing.next;
    current1 = current1?.next ?? null;
    current2 = current2?.next ?? null;
    addition = sum > 9 ? 1 : 0
  }

  if (addition > 0) {
    processing.next = new ListNode(1);
  }
  return result.next
}

