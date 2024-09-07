class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5);
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.push(10);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.tail.val); // 10

doublyLinkedList.push(15);
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.tail.val); // 15

console.log(doublyLinkedList.pop().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.pop().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.pop().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.pop()); // undefined
