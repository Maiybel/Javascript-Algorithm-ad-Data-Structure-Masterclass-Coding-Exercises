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

  // Push method to add a node to the end
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      // If the list is empty, head and tail will both point to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the current tail node with the new node
      this.tail.next = newNode;
      newNode.prev = this.tail;
      // Update the tail to be the new node
      this.tail = newNode;
    }

    // Increment the length of the list
    this.length++;

    // Return the list for method chaining
    return this;
  }

  // Pop method to remove the node at the end (optional)
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

// Example usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5);
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5

doublyLinkedList.push(10);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.tail.val); // 10

doublyLinkedList.push(15);
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.next.next.val); // 15
console.log(doublyLinkedList.tail.prev.val); // 10

doublyLinkedList.pop();
console.log(doublyLinkedList.length); // 2
doublyLinkedList.pop();
console.log(doublyLinkedList.length); // 1
doublyLinkedList.pop();
console.log(doublyLinkedList.length); // 0
