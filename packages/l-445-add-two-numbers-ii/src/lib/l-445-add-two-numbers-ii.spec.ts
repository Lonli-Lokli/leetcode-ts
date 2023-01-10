import { l445AddTwoNumbersIi_External, l445AddTwoNumbersIi_Initial, ListNode } from './l-445-add-two-numbers-ii';

const createNode = (input: number[]): ListNode | null => {
  const node = new ListNode();
  let next = node;
  for (const n of input) {
    next.next = new ListNode(n);
    next = next.next;
  }

  return node.next;
};

const cases: () => Array<
  [ListNode | null, ListNode | null, ListNode | null]
> = () => [
  [createNode([7, 2, 4, 3]), createNode([5, 6, 4]), createNode([7, 8, 0, 7])],
  [createNode([2, 4, 3]), createNode([5, 6, 4]), createNode([8, 0, 7])],
  [createNode([0]), createNode([0]), createNode([0])],
];

describe('445. Add Two Numbers II', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l445AddTwoNumbersIi_Initial(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );

  it.each(cases())(
    'External: given %p and %p as arguments, returns %p',
    (l1, l2, expectedResult) => {
      expect(l445AddTwoNumbersIi_External(l1, l2)?.asString()).toEqual(
        expectedResult?.asString()
      );
    }
  );
});
