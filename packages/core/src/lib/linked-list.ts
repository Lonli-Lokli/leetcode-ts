export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
};
