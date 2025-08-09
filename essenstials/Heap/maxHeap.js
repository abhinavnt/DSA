class maxHeap{
    constructor(){
        this.heap=[]
    }

    view(){
        console.log(this.heap)
        
    }


    insert(value){
        this.heap.push(value)
        this.heapifyUP()
    }
 
    heapifyUP(){
        let index=this.heap.length-1
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[index]<=this.heap[parentIndex])break
            [this.heap[index],this.heap[parentIndex]=this.heap[parentIndex],this.heap[index]]
            index=parentIndex
        }
    }    
             

       
    
               
    heapifyDown(){
        let index=0 
        let length=this.heap.length
        let element=this.heap[0]
        while(true){
            let leftChildIndex=2*i+1
            let rightChildIndex=2*i+2
            let rightChild,leftChild
            let swap=null

            if(leftChildIndex<length){
                leftChild=this.heap[leftChildIndex]
                if(leftChild>element) swap=leftChildIndex
            }
            if(rightChildIndex<length){
                rightChild=this.heap[rightChildIndex]
                if((swap===null&&rightChild>element)||(swap!==null&&rightChild>leftChild)){
                    swap=rightChildIndex
                }
            }
                
            if(swap===null)break
            this.heap[index]=this.heap[swap]
            this.heap[swap]=element

            index=swap
        }
    }



    remove(){
        if(this.heap.length===0)return null
        if(this.heap.length===1)return this.heap.pop()
            let root=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return root
    }
} 