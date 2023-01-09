import {
  l141LinkedListCycle_Hashmap,
  l141LinkedListCycle_Floyd,
  ListNode,
} from './l-141-linked-list-cycle';

const cases: () => Array<[ListNode | null, boolean]> = () => [
  [createFirst(), true],
  [createSecond(), true],
];

const createFirst = () => {
  const one = new ListNode(-1);
  const two = new ListNode(0);
  const three = new ListNode(1);
  const four = new ListNode(2);

  one.next = two;
  two.next = three;
  three.next = four;
  four.next = two;

  return one;
};

const createSecond = () => {
  const one = new ListNode(1);
  const two = new ListNode(2);

  one.next = two;
  two.next = one;

  return one;
};

describe('141. Linked List Cycle', () => {
  it.each(cases())(
    'Initial Hashmap: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l141LinkedListCycle_Hashmap(args)).toEqual(expectedResult);
    }
  );

  it.each(cases())(
    'Initial Floyd: given %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(l141LinkedListCycle_Floyd(args)).toEqual(expectedResult);
    }
  );
});
