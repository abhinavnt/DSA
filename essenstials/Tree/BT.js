class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left == null) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (current.right == null) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  levelorder() {
    if (this.root == null) {
      return;
    }

    let queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(40);
bt.insert(50);
bt.insert(4);
bt.levelorder();
