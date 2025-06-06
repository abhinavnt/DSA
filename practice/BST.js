class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}



class BST{
    constructor(){
        this.root=null
    }

 isEmpty(){
    return this.root===null
 }


 insert(value){
    const newNode=new TreeNode(value)
    if(this.isEmpty()){
        this.root=newNode
    }else{
       this.insertNode(this.root,newNode)
    }
 }


 insertNode(root,newNode){
   if(newNode.value<root.value){
    if(root.left===null){
        root.left=newNode
    }else{
        this.insertNode(root.left,newNode)
    }
   }else{
    if(root.right===null){
        root.right=newNode
    }else{
        this.insertNode(root.right,newNode)
    }
   }
 }


 serach(value){
    if(!this.root){
        return false
    }else{
        if(this.root.value===value){
            return true
        }else if(value<this.root.value){
            return this.serach(this.root.left,value)
        }
    }
 }


 preorder(root){
   if(root){
    console.log(root.value)
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



 levelorder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let current=queue.shift()
        console.log(current.value);
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
        
    }
 }


 min(root){
    if(!root.left){
       return root.value
    }else{
        return this.min(root.left)
    }
 }


 max(root){
    if(root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
 }




}

let bst=new BST()


bst.insert(7)
bst.insert(6)
bst.insert(9)
bst.inOrder(bst.root)