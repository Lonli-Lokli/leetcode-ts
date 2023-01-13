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

export function l160IntersectionOfTwoLinkedLists_Submitted(
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

export function l160IntersectionOfTwoLinkedLists_Hashset(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {

  if (headA === null || headB === null) return null;
  const set = new Set();
  let currentA: ListNode | null = headA;
  while(currentA) {
    set.add(currentA);
    currentA = currentA.next;
  }
  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;

}

export function l160IntersectionOfTwoLinkedLists_Neetcode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const maxLength = (node: ListNode | null) => {
    let length = 0;
    while (node !== null) {
      length++;
      node = node.next;
    }
    return length;
  }

  const skip = (node: ListNode | null, skip: number) => {
    let curr = node;
    while (skip > 0) {
      curr = curr?.next ?? null;
      skip--;
    }

    return curr;
  }

  const maxLenA = maxLength(headA);
  const maxLenB = maxLength(headB);
  
  let newHeadA = skip(headA, Math.max(maxLenA - maxLenB, 0));
  let newHeadB = skip(headB, Math.max(maxLenB - maxLenA, 0));

  while (newHeadA !== newHeadB) {
    newHeadA = newHeadA?.next ?? null;
    newHeadB = newHeadB?.next ?? null;
  }

  return newHeadA === null || newHeadB === null ? null : newHeadA;

}

export function l160IntersectionOfTwoLinkedLists_Leetcode_Approach(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {

  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA === null ? headB : currA.next
    currB = currB === null ? headA : currB.next
  }

  return currA;
}