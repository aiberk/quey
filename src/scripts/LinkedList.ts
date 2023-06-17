export class Node {
  imageUrl: string;
  name: string | null;
  time: number;
  description: string;
  next: Node | null;

  constructor(
    imageUrl: string,
    name: string | null,
    time: number,
    description: string
  ) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.time = time;
    this.description = description;
    this.next = null;
  }
}

export class Queue {
  front: Node | null;
  rear: Node | null;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(
    imageUrl: string,
    name: string | null,
    time: number,
    description: string
  ): void {
    const newNode = new Node(imageUrl, name, time, description);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(): Node | null {
    if (!this.front) {
      return null;
    }
    const data = this.front;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    return data;
  }

  shiftForward(): void {
    if (!this.front || this.front === this.rear) {
      return;
    }
    const frontNode = this.front;
    this.front = this.front.next;
    this.rear.next = frontNode;
    frontNode.next = null;
    this.rear = frontNode;
  }

  shiftBackward(): void {
    if (!this.front || this.front === this.rear) {
      return;
    }
    let currentNode = this.front;
    while (currentNode.next !== this.rear) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.rear.next = this.front;
    this.front = this.rear;
    this.rear = currentNode;
  }

  moveForward(nodeName: string): void {
    if (!this.front || this.front === this.rear) {
      return;
    }
    let prevNode = null;
    let currentNode = this.front;

    while (currentNode && currentNode.name !== nodeName) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // Node is either not in the queue, or is the rear (can't move forward)
    if (!currentNode || currentNode === this.rear) {
      return;
    }

    let nextNode = currentNode.next;

    // If there's no nextNode, we can't move forward
    if (!nextNode) {
      return;
    }

    // If node is the front, adjust the front pointer
    if (currentNode === this.front) {
      this.front = nextNode;
    } else {
      prevNode.next = nextNode;
    }

    currentNode.next = nextNode.next;
    nextNode.next = currentNode;

    if (!currentNode.next) {
      this.rear = currentNode;
    } else if (nextNode.next === null) {
      this.rear = nextNode;
    }
  }

  moveBackward(nodeName: string): void {
    if (!this.front || this.front === this.rear) {
      return;
    }
    let prevNode = null;
    let currentNode = this.front;

    // If the node is the front of the queue, it can't move backwards
    if (currentNode.name === nodeName) {
      return;
    }

    // Find the node before the target node
    while (
      currentNode &&
      currentNode.next &&
      currentNode.next.name !== nodeName
    ) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // Node is not in the queue
    if (!currentNode.next) {
      return;
    }

    let targetNode = currentNode.next;
    let nextNode = targetNode.next;

    if (prevNode) {
      prevNode.next = targetNode;
    } else {
      this.front = targetNode;
    }

    currentNode.next = nextNode;
    targetNode.next = currentNode;

    if (targetNode.next === null) {
      this.rear = targetNode;
    } else if (currentNode.next === null) {
      this.rear = currentNode;
    }
  }

  isEmpty(): boolean {
    return this.front === null;
  }

  removeFromQueue(nodeName: string): void {
    if (!this.front) {
      return;
    }

    // If the node to remove is at the front
    if (this.front.name === nodeName) {
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
      return;
    }

    let prevNode = this.front;
    let currentNode = this.front.next;

    // Find the node with the given name
    while (currentNode !== null && currentNode.name !== nodeName) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // If we didn't find the node, do nothing
    if (currentNode === null) {
      return;
    }

    // Skip over the node to remove
    prevNode.next = currentNode.next;

    // If the node to remove is at the end, adjust the rear
    if (currentNode === this.rear) {
      this.rear = prevNode;
    }
  }
}
