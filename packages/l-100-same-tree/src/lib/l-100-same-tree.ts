// https://leetcode.com/problems/same-tree/

import { TreeNode } from "@leetcode/core";

const areBothValid = (p: TreeNode | null, q: TreeNode | null) => {
  return (p === null && q === null) || (p !== null && q !== null && p.val === q.val);
}

export function l100SameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!areBothValid(p, q)) return false;
  return (p === null || l100SameTree(p.left, q!.left)) && (p === null || l100SameTree(p.right, q!.right));
};