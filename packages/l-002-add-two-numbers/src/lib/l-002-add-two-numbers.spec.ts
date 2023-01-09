import { l002AddTwoNumbers, ListNode } from './l-002-add-two-numbers';

const cases: () => Array<[ListNode | null, ListNode | null, ListNode | null]> = () => [
  [
    createNode([2, 4, 3]),
    createNode([5, 6, 4]),
    createNode([7, 0, 8]),
  ],
  [
    createNode([9,9,9,9,9,9,9]),
    createNode([9,9,9,9]),
    createNode([8,9,9,9,0,0,0,1])
  ]
];

const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
}

describe('2. Add Two Numbers', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l002AddTwoNumbers(l1, l2)?.asString()).toEqual(expectedResult?.asString());
    }
  ); 
});
