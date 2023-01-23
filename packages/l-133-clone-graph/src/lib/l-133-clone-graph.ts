// https://leetcode.com/problems/clone-graph/
import { GraphNode } from '@leetcode/core';

export function l133CloneGraph(node: GraphNode | null): GraphNode | null {
  if (node === null) return node;

  const result = new GraphNode(node.val);
  const map = new Map<GraphNode, GraphNode>([[node, result]]);
  const queue: GraphNode[] = [node];

  while (queue.length > 0) {
    const orig = queue.shift()!;
    const clone = map.get(orig)!;

    queue.push(...orig.neighbors.filter((e) => !map.has(e)));
    orig.neighbors.forEach((n) => {
      clone.neighbors.push(
        map.get(n) ?? map.set(n, new GraphNode(n.val)).get(n)!
      );
    });
  }

  return result;
}
