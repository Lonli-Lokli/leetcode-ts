import { l103BinaryTreeZigzagLevelOrderTraversal, TreeNode } from './l-103-binary-tree-zigzag-level-order-traversal';

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

const cases: () => Array<[TreeNode | null, Array<number[]>]> = () => [
  [createTree([3,9,20,null,null,15,7]), [[3],[20,9],[15,7]]],
  [createTree([1,2,3,4,null,null,5]), [[1],[3,2],[4,5]]],
];

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
  it.each(cases())(
    'Initial: given %p and %p as arguments, returns %p',
    (tree, expectedResult) => {
      expect(l103BinaryTreeZigzagLevelOrderTraversal(tree).flatMap(_ => _)).toEqual(expectedResult.flatMap(_ => _)
      );
    }
  );
});
