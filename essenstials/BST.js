class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  
class BST {
  constructor() {
    this.root = null;
  }

//   //check is empty 
  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }


  // //insert value
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }


// //search 

search(root,value){
    if(!root){
        return false
    }else{
        if(root.value===value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
}


//  //travesal 
// //DFS
//  //preorder
 preOrder(root){
  if(root){
    console.log(root.value)
    this.preOrder(root.left)
    this.preOrder(root.right)
    
  }
 }



//  //inorder
 inOrder(root){
  if(root){
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
    
  }
 }


//  //post order
 postOrder(root){
  if(root){
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value);
    
  }
 }


// //  BFS
// // Level order
levelOrder(){
  const queue=[]
  queue.push(this.root)
  while(queue.length){
    let current=queue.shift()
    console.log(current.value)
    if(current.left){
      queue.push(current.left)
    }
    if(current.right){
      queue.push(current.right)
    }
    
  }
}


// //min
min(root){
  if(!root.left){
    return root.value
  }else{
    return this.min(root.left)
  }
}


// //max
max(root){
  if(!root.right){
    return root.value
  }else{
    return this.max(root.right)
  }
}

//delete
delete(value){
  this.root= this.deleteNode(this.root,value)
}

deleteNode(root,value){
  if(root ===null){
    return root 
  }
  if(value<root.value){
    root.left=this.deleteNode(root.left,value)
  }else if(value>root.value){
    root.right=this.deleteNode(root.right,value)
  }else{
    if(!root.left&& !root.right){
      return null
    }
    if(!root.left){
      return root.right
    }else if(!root.right){
      return root.left
    }
    root.value=this.min(root.right) 
    root.right=this.deleteNode(root.right,root.value)
  }
  return root
}


//is valid bst
isValid(root,min= -Infinity,max= Infinity){
  if(!root){
    return true
  }
  if(root.value<min||root.value>max){
    return false
  }
  return (this.isValid(root.left,min,root.value)&& this.isValid(root.right,root.value,max)) 
}


//find closest
findClosest(root,target){
  let Closest=root.value
  while(root){
    if(Math.abs(target-root.value)<Math.abs(target-Closest)){
      Closest=root.value
    }

    if(target<root.value){
      root=root.left
    }else if(target>root.value){
      root=root.right
    }else{
      break
    }
  }
  return Closest
}


//count of left node

leftcount(root){
  if(!root.left){
    return 0
  }else{
    return 1+ this.leftcount(root.left)
  }
}

//height of tree
height(node=this.root){
  if(node===null){
    return -1
  }
  const leftHeight=this.height(node.left)
  const rightHeight=this.height(node.right)

  return Math.max(leftHeight,rightHeight)+1
}
 
}

let bst = new BST();

bst.insert(23);
bst.insert(234);
bst.insert(20);
bst.insert(10)
bst.insert(300)
// console.log(bst.search(bst.root,53));
// bst.preOrder(bst.root)
// console.log(bst.search(bst.root,53));
// bst.delete(20)

// bst.inOrder(bst.root)
// console.log(bst.search(bst.root,53));
// bst.postOrder(bst.root)
// console.log(bst.search(bst.root,53));
// console.log(bst.max(bst.root));

// console.log(bst.isValid(bst.root));
// console.log(bst.findClosest(bst.root,19));
console.log(bst.min(bst.root));















