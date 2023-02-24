export class LRUCache {
  private capacity;
  private map = new Map<number, LList>();
  private head = new LList();
  private tail = new LList();

  constructor(capacity: number) {
    this.capacity = capacity;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key: number, value: number): void {
    const hasKey = this.get(key) !== -1;
    const isAtCapacity = this.map.size === this.capacity;

    if (hasKey) {
      this.tail.prev!.value = value;
      return;
    };
    if (isAtCapacity) this.removeLastUsed();

    const node = new LList();
    node.key = key;
    node.value = value;
    this.map.set(key, node);
    this.moveToFront(node);
  }

  get(key: number) {
    const hasKey = this.map.has(key);
    if (!hasKey) return -1;

    const node = this.map.get(key)!;

    this.disconnectNode(node);
    this.moveToFront(node);

    return node.value;
  }

  private removeLastUsed() {
    const [key, next, prev] = [
      this.head.next!.key,
      this.head.next!.next,
      this.head,
    ];

    this.map.delete(key!);
    this.head.next = next;
    this.head.next!.prev = prev;
  }

  private moveToFront(node: LList) {
    const [prev, next] = [this.tail.prev, this.tail];

    this.tail.prev!.next = node;
    this.connectNode(node, { prev, next });
    this.tail.prev = node;
  }

  private connectNode(node: LList, top: {prev: LList | null, next: LList | null}) {
    node.prev = top.prev;
    node.next = top.next;
  }
  private disconnectNode(node: LList) {
    node.next!.prev = node.prev;
    node.prev!.next = node.next;
  }
}

class LList {
  public key: number | null = null;
  public value: number | null = null;
  public next: LList | null = null;
  public prev: LList | null = null;
}
