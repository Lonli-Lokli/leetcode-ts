import {
  l116PopulatingNextRightPointersInEachNode_Recursion,
  l116PopulatingNextRightPointersInEachNode_Queue,
} from './l-116-populating-next-right-pointers-in-each-node';
import { createTreeNext, TreeNodeNext } from '@leetcode/core';

const cases: () => Array<[TreeNodeNext | null, string]> = () => [
  [createTreeNext([1, 2, 3, 4, 5, 6, 7]), '1,#,2,3,#,4,5,6,7,#'],
];

const collectNexts = (root: TreeNodeNext | null) => {
  if (!root) return root;
  const result: string[] = [];

  const traverse = (node: TreeNodeNext) => {
    result.push(node.val.toString());
    let clone: TreeNodeNext | null = node;
    while (clone !== null) {
      result.push(clone.next?.val.toString() ?? '#');
      clone = clone.next;
    }
    if (node.left) {
      traverse(node.left);
    }
  };
  traverse(root);
  return result.join(',');
};
describe('116. Populating Next Right Pointers in Each Node', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(
        collectNexts(l116PopulatingNextRightPointersInEachNode_Queue(node))
      ).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Recursion: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(
        collectNexts(l116PopulatingNextRightPointersInEachNode_Recursion(node))
      ).toEqual(expectedResult);
    }
  );
});
