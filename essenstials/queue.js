// class Queue {
//     constructor() {
//       this.items = [];
//     }

//     enqueue(element) {
//       this.items.push(element);
//     }

//     dequeue() {
//       if (this.isEmpty()) {
//         return "Queue is empty";
//       }
//       return this.items.shift();
//     }

//     front() {
//       return this.items[0];
//     }

//     isEmpty() {
//       return this.items.length === 0;
//     }

//     display() {
//       console.log(this.items);
//     }
//   }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.display();
// console.log(queue.dequeue());
// queue.display();

// class Queue {
//   constructor() {
//     this.itmes = [];
//   }

//   isEmpty() {
//     this.itmes.length === 0;
//   }

//   enqueue(data) {
//     this.itmes.push(data);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "is empty";
//     }
//     return this.itmes.shift();
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "empty";
//     }
//     console.log(this.itmes[0]);
//   }

//   size() {
//     console.log(this.itmes.length);
//   }

//   display() {
//     console.log(this.itmes.join("<-"));
//   }
// }

let queue = new Queue();

queue.enqueue(4);
queue.enqueue(56);
queue.enqueue(45);
queue.enqueue(454);

queue.display();
queue.dequeue();
queue.display();






class Queue{
  constructor(){
    this.items=[]
  }

  enqueue(data){
    this.items.push(data)
  }

  dequeue(){
    if(this.isEmpty()){
      return "is empty"
    }
    this.items.shift()
  }

  peek(){
    if(this.isEmpty()){
      return "is empty"
    }

    console.log(this.items[0]);
    
  }

  isEmpty(){
    return this.items.length===0
  }

  display(){
    console.log();
    
  }

}
