// https://leetcode.com/problems/reverse-nodes-in-k-group/
import { ListNode } from '@leetcode/core';

export function l025ReverseNodesInKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let groupStart: ListNode | null = dummy;

  const getNth = (node: ListNode | null, n: number) => {
    while (node && n > 0) {
      node = node?.next;
      n--;
    }
    return node;
  };
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const kth = getNth(groupStart, k);
    if (!kth) break;

    const groupNext = kth.next;
    let curr = groupStart?.next ?? null;
    let prev = kth.next;
    while (curr && curr !== groupNext) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }

    if (groupStart) {
      const tmp: ListNode | null = groupStart.next;
      groupStart.next = kth;
      groupStart = tmp;
    }
  }

  return dummy.next;
}
