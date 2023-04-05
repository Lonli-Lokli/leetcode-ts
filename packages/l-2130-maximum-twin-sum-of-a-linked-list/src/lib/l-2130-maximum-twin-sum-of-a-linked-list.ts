import { ListNode } from '@leetcode/core';

export function l2130MaximumTwinSumOfALinkedList_Simple(
  head: ListNode | null
): number {
  const asList = (node: ListNode | null): number[] => {
    const arr: number[] = [];
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  };

  const list = asList(head);
  return list.reduce((acc, curr, i) =>
    Math.max(acc, curr + list[list.length - i - 1])
  );
}
export function l2130MaximumTwinSumOfALinkedList_Stack(
  head: ListNode | null
): number {
  const stack: number[] = [];
  let slow: ListNode | null = head;
  let fast = head?.next ?? null;

  while (slow !== null && fast != null) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next?.next ?? null;
  }

  let maxTwinSum = 0;
  while (slow != null) {
    maxTwinSum = Math.max(maxTwinSum, slow.val + stack.pop()!);
    slow = slow.next;
  }

  return maxTwinSum;
}
