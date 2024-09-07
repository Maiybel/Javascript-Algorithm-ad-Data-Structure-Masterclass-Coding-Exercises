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

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5);
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.unshift(10);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.unshift(15);
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5

console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.shift()); // undefined
