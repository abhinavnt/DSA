class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  //add data to the end of a linked list
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  //add node at begining of linkedlist
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //delete a node by its value
  delete(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next & (current.next.data !== value)) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let list = "";

    while (current) {
      list += current.data + "->";
      current = current.next;
    }

    console.log(list.slice(0, 4) || "empty list");
  }

  //reverse linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }


  //delete middle 
  deleteMiddle(){
  if(!this.head || !this.head.next){
    this.head=null
    return
  }

  let slow=this.head
  let fast=this.head
  let prev=null


  while(fast & fast.next){
    prev=slow
    slow=slow.next
    fast=fast.next.next
  }


  prev.next=slow.next
  }


}
