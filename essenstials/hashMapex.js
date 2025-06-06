class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const Map = new HashTable(20);

// Map.set("hai","hoi")
// Map.set("age","43")
// Map.display()
// Map.remove("age")
// Map.display()
// // console.log(Map.get("hai"));

// handling the collisions
class HashMaps {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyIndex = bucket.findIndex((item) => item[0] === key);
      if (sameKeyIndex !== -1) {
        bucket.splice(sameKeyIndex, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// Example Usage
let newMap = new HashMaps(50);
newMap.set("iam", "Abhinav");
newMap.set("mai", "sreekutty");
console.log(newMap.get("iam"));
newMap.display();
newMap.remove("iam");
newMap.display();




class hasht{
  constructor(size){
    this.table=new Array(size)
    this.size=size
  }


  hash(key){
    let total=0
    for(i=0;i<key.length;i++){
      total+=key.charCodeAt(i)
    }

    return total%this.size
  }

  set(key,value){
    let index= this.hash(key)
    this.table[index]=value
  }

  get(key){
    let index=this.hash(key)
    console.log(this.table[index]);
    
  }

  remove(key){
    let index=this.hash(key)
    this.table[index]=undefined
  }
}