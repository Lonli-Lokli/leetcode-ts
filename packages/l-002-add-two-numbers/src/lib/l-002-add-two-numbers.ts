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

export function l002AddTwoNumbers_Initial(l1: ListNode | null, l2: ListNode | null): ListNode | null {
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


// enhanced version after review
export function l002AddTwoNumbers_Updated(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result: ListNode = new ListNode(0);
  let current1 = l1;
  let current2 = l2;
  let processing = result;
  let sum = 0;
  while (current1 !== null || current2 !== null || sum > 0) {
    sum += (current1?.val ?? 0) + (current2?.val ?? 0);
    processing.next = new ListNode(sum % 10);
    processing = processing.next;
    current1 = current1?.next ?? null;
    current2 = current2?.next ?? null;
    sum = sum > 9 ? 1 : 0;
  }

  return result.next
}

export function l002AddTwoNumbers_NonReversed(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  
  const list2array = (list: ListNode | null): number[] => {
    const arr: number[] = [];
    while (list !== null) {
      arr.push(list.val);
      list = list.next;
    } 
    return arr;
  }

  const arr1 = list2array(l1);
  const arr2 = list2array(l2);
  const result = new ListNode(0);
  let node: ListNode | null = result;

  
  let sum = 0;
  while (arr1.length > 0 || arr2.length > 0 || sum > 0) {
    sum += (arr1.pop() ?? 0) + (arr2.pop() ?? 0);
    node.next = new ListNode(sum % 10);
    node = node.next;
    sum = sum > 9 ? 1 : 0
  }
  return result.next;
}
