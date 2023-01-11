// https://leetcode.com/problems/intersection-of-two-linked-lists/
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

export function l160IntersectionOfTwoLinkedLists(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const list2array = (list: ListNode | null) => {
    const arr: ListNode[] = [];
    let current = list;
    while (current !== null) {
      arr.push(current);
      current = current?.next ?? null;
    }
    return arr;
  };

  const arrA = list2array(headA);
  const arrB = list2array(headB);

  let a = arrA.pop() ?? null;
  let b = arrB.pop() ?? null;
  while (a && b) {
    if (a !== b) {
      return a.next;
    }
    const newA = arrA.pop() ?? null;
    const newB = arrB.pop() ?? null;
    if (newA === null) return a;
    if (newB === null) return b;    
    a = newA;
    b = newB;

  }

  return null;
}
