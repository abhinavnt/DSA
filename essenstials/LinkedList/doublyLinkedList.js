class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add node at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Add node at the beginning
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next; // If deleting head

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev; // If deleting tail

        break;
      }
      current = current.next;
    }
  }

  // Print list forward
  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Print list backward
  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}
const list = new DoublyLinkedList();

list.append(10);
list.append(20);
list.prepend(5);

console.log("Forward:");
list.printForward(); // 5, 10, 20

console.log("Backward:");
list.printBackward(); // 20, 10, 5

list.delete(10);
console.log("After Deletion:");
list.printForward(); // 5, 20
