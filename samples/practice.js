class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class Linkedlist{
    constructor(){
        this.head=null
    }


    insert(value){
        let newNode=new Node(value)

        if(this.head===null){
            newNode=this.head
            return
        }

        let current
    }
}