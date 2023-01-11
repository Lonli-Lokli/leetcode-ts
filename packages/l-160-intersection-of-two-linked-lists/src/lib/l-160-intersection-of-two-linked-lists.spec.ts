import { l160IntersectionOfTwoLinkedLists, ListNode } from "./l-160-intersection-of-two-linked-lists";

const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
};

const createIntersection = (listA: ListNode, listB: ListNode, skipA: number, skipB: number): [ListNode,ListNode] => {
  let nodeA: ListNode | null = listA;
  while (skipA > 0) {
    skipA--;
    nodeA = nodeA?.next ?? null; 
  }

  let nodeB: ListNode | null = listB;
  while (skipB > 0) {
    skipB--;
    nodeB = nodeB?.next ?? null;
  }

  nodeB!.next = nodeA!;

  return  [listA, listB]
}

const cases: () => Array<
  [Array<ListNode | null>, number]
> = () => [
  // [ createIntersection(createNode([1, 9, 1, 2, 4])!, createNode([3, -1, -1])!, 3, 0), 2],
  // [ createIntersection(createNode([4,1,8,4,5])!, createNode([5,6,1,8,4,5])!, 2, 2), 8],
  [ createIntersection(createNode([1])!, createNode([1])!, 0, 0), 1],
//  [ [createNode([1]), createNode([1])], 0],
];

describe('2160. Intersection of Two Linked Lists', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    ([headA, headB], expectedResult) => {
      expect(l160IntersectionOfTwoLinkedLists(headA, headB)?.val ?? 0).toEqual(expectedResult);
    }
  );
});
