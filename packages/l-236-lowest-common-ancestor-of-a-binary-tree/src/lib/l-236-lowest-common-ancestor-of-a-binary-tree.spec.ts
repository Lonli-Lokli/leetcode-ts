
import { l236LowestCommonAncestorOfABinaryTree_Submitted, TreeNode } from './l-236-lowest-common-ancestor-of-a-binary-tree';

const createTree = (items: (number | null)[]): TreeNode | null => {
  if (items.length === 0) return null;
  const root = new TreeNode(items.shift()!);
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const left = items.shift() ?? null;
    node.left = left !== null ? new TreeNode(left) : null;
    const right = items.shift() ?? null;
    node.right = right !== null ? new TreeNode(right) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

type TestCase = {
  node: TreeNode | null;
  p: TreeNode | null;
  q: TreeNode | null;
};
const cases: () => Array<[TestCase, number]> = () => [
  [createCase(createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 1), 3],
  [createCase(createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 4), 5],
];

const asNodeCollection = (
  node: TreeNode | null,
  collection: Array<TreeNode | null>
): Array<TreeNode | null> => {
  if (node === null) return collection;

  collection.push(node);
  asNodeCollection(node.left, collection);
  asNodeCollection(node.right, collection);
  return collection;
};
const createCase = (node: TreeNode | null, p: number, q: number): TestCase => {
  let pNode: TreeNode | null = null;
  let qNode: TreeNode | null = null;

  const allNodes = asNodeCollection(node, []);
  for (let i = 0; i < allNodes.length; i++) {
    if (allNodes[i]?.val === p) {
      pNode = allNodes[i];
    }
    if (allNodes[i]?.val === q) {
      qNode = allNodes[i];
    }
  }

  return {
    node: node,
    p: pNode,
    q: qNode,
  };
};

describe('23. Lowest Common Ancestor of a Binary Tree', () => {
  it.each(cases())(
    'Recursive: given %p and %p as arguments, returns %p',
    (args, expectedResult) => {
      expect(
        l236LowestCommonAncestorOfABinaryTree_Submitted(
          args.node,
          args.p,
          args.q
        )?.val
      ).toEqual(expectedResult);
    }
  );
});
