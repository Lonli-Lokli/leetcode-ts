// https://leetcode.com/problems/linked-list-cycle/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function l141LinkedListCycle_Hashmap(head: ListNode | null): boolean {
  const set = new Set<ListNode>();
  let node = head;
  while (node !== null) {
    if (set.has(node)) {
      return true;      
    }
    set.add(node);
    node = node.next;
  }
 return false;
}

export function l141LinkedListCycle_Floyd(head: ListNode | null): boolean {

  let slowPointer = head;
  let fastPointer = head?.next?.next ?? null;

  while (fastPointer !== null && fastPointer.next !== null) {
    if (slowPointer === fastPointer) {
      return true;
    }

    slowPointer = slowPointer?.next ?? null;
    fastPointer = fastPointer?.next?.next ?? null; 
 
  }

  return false;
}
