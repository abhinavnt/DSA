class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}


class Stack{
    constructor(){
        this.top=null
        this.size=0
    }

    push(value){
        const newNode=new Node(value)
        newNode.next=this.top
        this.top=newNode
        this.size++
    }


    pop(){
        if(!this.top){
            console.log('stack underflow')
            return  null
        }
        let poppedvalue=this.top.value
        this.top=this.top.next
        this.size-- 
        return poppedvalue
    }
}