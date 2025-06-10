class stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return "empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "is empty";
    }
    return console.log(this.items[this.items.length - 1]);
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  printStack() {
    console.log(this.items.join("<-"));
  }

  
}

let Stack = new stack();

console.log(Stack.size());

Stack.push(32);
Stack.push(65);
Stack.push(43);
Stack.printStack();
Stack.pop();
Stack.printStack();
Stack.peek();
