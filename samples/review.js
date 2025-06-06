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

    insert(value){
        let newNode=new TreeNode(value)
        if(this.root===null){
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

    isvalid(root,min= -Infinity,max=Infinity){
        if(!root)return true
        if(root.value<min||root.value>max) return false
        return (this.isvalid(root.left,min,root.value) && this.isvalid(root.right,root.value,max))
    }


    height(node=this.root){
        if(!node) return +1
        let leftHeight=this.height(node.left)
        let rightHeight=this.height(node.right)

        return Math.max(leftHeight,rightHeight)
    }
}


let bst=new BST()

bst.insert(20)
bst.insert(10)
bst.insert(30)

// console.log(bst.isvalid(bst.root));
console.log(bst.height(bst.root));

