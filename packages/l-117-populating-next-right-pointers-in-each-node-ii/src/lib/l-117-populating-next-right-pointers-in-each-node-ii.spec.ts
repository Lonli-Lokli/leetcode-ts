import {
  l117PopulatingNextRightPointersInEachNodeIi_Queue,
  l117PopulatingNextRightPointersInEachNodeIi_Recursive,
  Node,
} from './l-117-populating-next-right-pointers-in-each-node-ii';

import { createTreeNext, TreeNodeNext } from '@leetcode/core';

const cases: () => Array<[TreeNodeNext | null, string]> = () => [
  [createTreeNext([1, 2, 3, 4, 5, null, 7]), '1,#,2,3,#,4,5,7,#'],
  [
    createTreeNext([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]),
    '1,#,2,3,#,4,5,6,#,7,8,#',
  ],
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

describe('117. Populating Next Right Pointers in Each Node II', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(
        collectNexts(l117PopulatingNextRightPointersInEachNodeIi_Recursive(node))
      ).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Queue: given %p and %p as arguments, returns %p',
    (node, expectedResult) => {
      expect(
        collectNexts(l117PopulatingNextRightPointersInEachNodeIi_Queue(node))
      ).toEqual(expectedResult);
    }
  );
});
