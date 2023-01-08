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
export function l206ReverseLinkedList_Iteratively(
  head: ListNode | null
): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current !== null) {
    const next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

export function l206ReverseLinkedList_Recursively(
  head: ListNode | null
): ListNode | null {
  
  if (head === null || head.next === null) return head;

  const newHead = l206ReverseLinkedList_Recursively(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

export function l206ReverseLinkedList_Updated(
  head: ListNode | null
): ListNode | null {
  const reverse = (
    prev: ListNode | null,
    curr: ListNode | null
  ): ListNode | null => {
    if (curr === null) {
      return prev;
    }

    const newNext = curr.next;

    curr.next = prev;

    return reverse(curr, newNext);
  };
  return reverse(null, head);
}
