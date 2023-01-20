// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

import { TreeNode } from "@leetcode/core";


export function l235LowestCommonAncestorOfABinarySearchTree_Submitted(
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

export function l235LowestCommonAncestorOfABinarySearchTree_External(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root && p && q && root.val > p.val && root.val > q.val) {
    return l235LowestCommonAncestorOfABinarySearchTree_External(
      root.left,
      p,
      q
    );
  }

  if (root && p && q && root.val < p.val && root.val < q.val) {
    return l235LowestCommonAncestorOfABinarySearchTree_External(
      root.right,
      p,
      q
    );
  }

  return root;
}
