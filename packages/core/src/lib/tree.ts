export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class TreeNodeNext {
  val: number;
  left: TreeNodeNext | null;
  right: TreeNodeNext | null;
  next: TreeNodeNext | null;
  constructor(
    val?: number,
    left?: TreeNodeNext,
    right?: TreeNodeNext,
    next?: TreeNodeNext
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
export const createTree = (items: (number | null)[]): TreeNode | null => {
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


export const createTreeNext = (
  items: (number | null)[]
): TreeNodeNext | null => {
  if (items.length === 0) return null;
  const root = new TreeNodeNext(items.shift()!);
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    const left = items.shift() ?? null;
    node.left = left !== null ? new TreeNodeNext(left) : null;
    const right = items.shift() ?? null;
    node.right = right !== null ? new TreeNodeNext(right) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return root;
};

export const collectTreeNodeLevelOrder = (node: TreeNode | null) => {
  const result: TreeNode[] = [];
  const queue: (TreeNode | null)[] = [node];

  while (queue.length > 0) {
    let qLen = queue.length;
    while (--qLen > 0) {
      const elem = queue.shift()!;
      if (elem !== null) result.push(elem);

      queue.push(elem.left);
      queue.push(elem.right);
    }
  }

  return result;
};

export const collectTreeNodeInOrder = (root: TreeNode | null) => {
  const traverse = (node: TreeNode | null, collection: TreeNode[]) => {
    if (node === null) return collection;
    traverse(node.left, collection);
    collection.push(node);
    traverse(node.right, collection);
    return collection;
  };

  return traverse(root, []);
};

export const collectTreeNodePreOrder = (root: TreeNode | null) => {
  const traverse = (node: TreeNode | null, collection: TreeNode[]) => {
    if (node === null) return collection;
    collection.push(node);
    traverse(node.left, collection);

    traverse(node.right, collection);
    return collection;
  };

  return traverse(root, []);
};

export const collectTreeNodePostOrder = (root: TreeNode | null) => {
  const traverse = (node: TreeNode | null, collection: TreeNode[]) => {
    if (node === null) return collection;
    traverse(node.left, collection);

    traverse(node.right, collection);
    collection.push(node);
    return collection;
  };

  return traverse(root, []);
};
