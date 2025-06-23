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


  preorder(root){
    if(root){
        console.log(root.value);
        this.preorder(root.left)
        this.preorder(root.right)
    }
  }

  inorder(root){
    if(root){
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right)
    }
  }

  postorder(root){
    if(root){
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value);
    }
  }




}

const bt = new BinaryTree();

bt.insert(10);
bt.insert(40);
bt.insert(50);
bt.insert(4);
// bt.levelorder();

const bt2=new BinaryTree()

bt2.insert(10);
bt2.insert(40);
bt2.insert(50);
bt2.insert(5);
// bt2.levelorder();





//function for check Check if two binary trees are identical.
function areIdentical(root1,root2){
    if(root1==null && root2==null)return true
    if(root1==null || root2==null)return false

    return (
        root1.value===root2.value&&
        areIdentical(root1.left,root2.left)&&
        areIdentical(root1.right,root2.right)
    )
}

console.log(areIdentical(bt.root,bt2.root));
