// https://leetcode.com/problems/implement-trie-prefix-tree/
export class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node: TrieNode = this.root;
    for (const l of word) {
      if (!node.links.has(l)) {
        node.links.set(l, new TrieNode());
      }
      node = node.links.get(l)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const l of word) {
      if (!node.links.has(l)) return false;
      node = node.links.get(l)!;
    }

    return node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const l of prefix) {
      if (!node.links.has(l)) return false;
      node = node.links.get(l)!;
    }

    return true;
  }
}

class TrieNode {
  public links = new Map<string, TrieNode>();
  public isEnd = false;
}
