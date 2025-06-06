class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}


class Linkedlist{
  constructor(){
    this.head=null
  }

  append(data){
    let newNode=new Node(data)

    if(this.head==null){
      this.head=newNode
      return
    }
  
    let current=this.head

    while(current.next){
      current=current.next
    }
    current.next=newNode
  }


  prepend(data){
    let newNode=new Node(data)
    newNode.next=this.head
    this.head=newNode
  }


  delete(value){
    if(this.head.value===value){
      this.head=this.head.next
    }

    let current=this.head
    while(current.next && current.next.value!==value){
      current=current.next
    }
    current.next=current.next.next
  }


  print(){
    let str=''
    let current=this.head

    while(current.next){
      str+=current.data+'->'
      current=current.next
    }
    console.log(list||'empty list')
  }

  

}



let list=new Linkedlist()


list.append(30)
list.append(35)
list.append(27)
list.append(21)
list.prepend(43)
list.print()