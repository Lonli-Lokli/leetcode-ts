import { createTree, TreeNode } from '@leetcode/core';
import {
  l226InvertBinaryTree_Iterative,
  l226InvertBinaryTree_Recursive,
} from './l-226-invert-binary-tree';


const traverseNodes = (input: TreeNode | null) => {
  const visited: number[] = [];
  const queue = [input];

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) continue;

    visited.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  return visited;
};

const cases: () => Array<[TreeNode | null, number[]]> = () => [
  [createTree([4, 2, 7, 1, 3, 6, 9]), [4, 7, 2, 3, 1, 9, 6]],
  [createTree([2, 1, 3]), [2, 3, 1]],
  [createTree([]), []],
];

describe('226. Invert Binary Tree', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(traverseNodes(l226InvertBinaryTree_Recursive(tree))).toEqual(expectedResult);
    }
  );
  it.each(cases())(
    'Iterative: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(traverseNodes(l226InvertBinaryTree_Iterative(tree))).toEqual(
        expectedResult
      );
    }
  );
});
