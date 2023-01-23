export class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export const createGraph = (adjList: Array<number[]>): GraphNode => {
  const root = new GraphNode(1);
  const nodes = new Map<number, GraphNode>([[1, root]]);

  for (let i = 0; i < adjList.length; i++) {
    const node = nodes.has(i + 1)
      ? nodes.get(i + 1)!
      : nodes.set(i + 1, new GraphNode(i + 1)).get(i + 1)!;
    for (const neighbor of adjList[i]) {
      node.neighbors.push(
        nodes.has(neighbor)
          ? nodes.get(neighbor)!
          : nodes.set(neighbor, new GraphNode(neighbor)).get(neighbor)!
      );
    }
  }

  return root;
};

export const collectGraphNodes = (node: GraphNode | null) => {
  const set = new Set<GraphNode>();

  const queue: (GraphNode | null)[] = [node];
  while (queue.length > 0) {
    const current = queue.shift()!;
    set.add(current);
    queue.push(...current.neighbors.filter(e => !set.has(e)));
  }

  return Array.from(set.values());  
}