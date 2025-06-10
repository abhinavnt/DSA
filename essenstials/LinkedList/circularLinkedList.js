class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Circle back
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; // Maintain circular nature
    }
  }

  // Insert at beginning
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
  }

  // Print list
  print() {
    if (!this.head) return;

    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return;

    let current = this.head;
    let prev = this.tail;
    do {
      if (current.data === data) {
        if (current === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head;
        } else if (current === this.tail) {
          this.tail = prev;
          this.tail.next = this.head;
        } else {
          prev.next = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
}

const list = new CircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

console.log("Circular List:");
list.print(); // 5, 10, 20, 30

list.delete(20);
console.log("After Deletion:");
list.print(); // 5, 10, 30
