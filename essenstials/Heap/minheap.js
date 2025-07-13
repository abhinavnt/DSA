class minHeap{
    constructor(){
        this.heap=[]
    }

 
    view(){
         return console.log(this.heap);
        
    }
       
    insert(value){ 
       this.heap.push(value)
          this.heapifyup
    }               
 

    heapifyup(){
        let index=this.heap.length-1

        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[index]>=this.heap[parentIndex]) break
            [this.heap[index],this.heap[parentIndex]=this.heap[parentIndex],this.heap[index]]
            index=parentIndex
        }
    }

   
    remove(){
        if(this.heap.length===0)return null

        if(this.heap.length===1)return this.heap.pop()

            const root= this.heap[0]
            this.heap[0]=this.heap.pop()
            this.heapifydown()
            return root
    }

    heapifydown(){
        let index=0
        const length=this.heap.length
        const element=this.heap[0]

        while(true){
            let leftChildIndex=2*index+1
            let rightChildIndex=2*index+2
            let leftChild,rightChild
            let swap=null

            if(leftChildIndex<length){
                leftChild=this.heap[leftChildIndex]
                if(leftChild<element)swap=leftChildIndex
            }

            if(rightChildIndex<length){
                rightChild=this.heap[rightChildIndex]
                if(
                    ((swap===null&&rightChild<element)||(swap!==null && rightChild<leftChild))
                ){
                    swap=rightChildIndex
                }
                if(swap===null) break;
                this.heap[index]=this.heap[swap]
                this.heap[swap]=element
                index=swap
            }
        }
    }



}



let minheap=new minHeap()

minheap.insert(23)
minheap.insert(34)
minheap.remove(34)
minheap.view()






