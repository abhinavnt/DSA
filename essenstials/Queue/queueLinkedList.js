class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}


class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }

    enqueue(data){
        const newNode=new Node(data)

        if(this.front==null){
            this.front=this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
    }

    dequeue(){
        if(!this.front){
            console.log('queue is empty');
            return 
        }

        this.front=this.front.next
        if(!this.front){
            this.rear=null
        }
        return
    }


    peek(){
        return this.front?this.front.data:null
    }

    display(){
        let temp=this.front
        let result=""

        while(temp){
            result+=temp.data+"->"
            temp=temp.next
        }

        console.log(result+"null");
        

    }


}


const queue=new Queue()
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(70)
queue.dequeue()
queue.display()
console.log(queue.peek());
