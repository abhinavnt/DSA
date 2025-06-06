class maxHeap{
    constructor(){
        this.heap=[]
    }

    view(){
        console.log(this.heap);
    }


    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

   
    heapifyUp(){
        let index=this.heap.length-1
        while(index>0){
        let parentIndex=Math.floor((index-1)/2)
        if(this.heap[index]<=this.heap[parentIndex])break
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index=parentIndex
        }
    }


}


let mxHeap=new maxHeap()


mxHeap.insert(39)
mxHeap.insert(20)
mxHeap.insert(100)

mxHeap. view()