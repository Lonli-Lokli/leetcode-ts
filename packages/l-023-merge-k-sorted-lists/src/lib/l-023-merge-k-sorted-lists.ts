// https://leetcode.com/problems/merge-k-sorted-lists/
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

export function l023MergeKSortedLists_Submitted(lists: Array<ListNode | null>): ListNode | null {
  const result = new ListNode(0);

  const LISTNODE_MAX = 10_000;
  const findMinValueList = (lists: Array<ListNode | null>): ListNode | null=> {
    return lists.sort((a, b) => (a?.val ?? LISTNODE_MAX) - (b?.val ?? LISTNODE_MAX))[0] ?? null;
  }

  let current = result;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const minNode = findMinValueList(lists);
    if (minNode === null) {
      break;
    }

    current.next = minNode;
    current = current.next;

    lists = lists.filter(node => node !== minNode);
    if (minNode.next) {
      lists.push(minNode.next);
    }
  }
  

  return result.next;
}

export function l023MergeKSortedLists_Faster(lists: Array<ListNode | null>): ListNode | null {

  throw new Error('Implement')
}
