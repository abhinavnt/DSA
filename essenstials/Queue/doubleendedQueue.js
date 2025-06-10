// Node for Doubly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Add at front
  addFront(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
  }

  // Add at rear
  addRear(data) {
    const newNode = new Node(data);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }
  }

  // Remove from front
  removeFront() {
    if (!this.front) {
      console.log("Deque is empty");
      return;
    }
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null; // deque became empty
    }
  }

  // Remove from rear
  removeRear() {
    if (!this.rear) {
      console.log("Deque is empty");
      return;
    }
    this.rear = this.rear.prev;
    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null; // deque became empty
    }
  }

  // Peek front
  peekFront() {
    return this.front ? this.front.data : null;
  }

  // Peek rear
  peekRear() {
    return this.rear ? this.rear.data : null;
  }

  // Display all elements
  display() {
    let temp = this.front;
    let result = "";
    while (temp) {
      result += temp.data + " <-> ";
      temp = temp.next;
    }
    console.log(result + "null");
  }
}

const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.addFront(1);
deque.display(); // 1 <-> 5 <-> 10 <-> 20 <-> null

deque.removeFront();
deque.display(); // 5 <-> 10 <-> 20 <-> null

deque.removeRear();
deque.display(); // 5 <-> 10 <-> null

console.log(deque.peekFront()); // 5
console.log(deque.peekRear()); // 10
