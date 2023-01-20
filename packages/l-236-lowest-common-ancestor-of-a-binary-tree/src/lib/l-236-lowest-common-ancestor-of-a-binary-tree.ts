// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

import { TreeNode } from "@leetcode/core";


export function l236LowestCommonAncestorOfABinaryTree_Submitted(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const buildPath = (
    node: TreeNode | null,
    paths: Array<TreeNode | null>,
    x: TreeNode | null
  ) => {
    if (node === null) return false;

    paths.push(node);

    if (node === x) return true;

    if (buildPath(node.left, paths, x) || buildPath(node.right, paths, x))
      return true;

    paths.pop();
    return false;
  };

  const pathP: TreeNode[] = [];
  buildPath(root, pathP, p);
  const pathQ: TreeNode[] = [];
  buildPath(root, pathQ, q);

  for (let i = 0; i < Math.max(pathP.length, pathQ.length); i++) {
    if (pathP[i] !== pathQ[i]) {
      return pathP[i - 1];
    }
  }
  return pathP[0] === pathQ[0] ? pathP[0] : null;
}
