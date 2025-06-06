class Node{
    constructor(key , value){
        this.key = key
        this.value = value
        this.next = null
    }
}

class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hashFunction(key){
        let hash = 0
        for(let i = 0 ; i < key.length ; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key , value){
        const index = this.hashFunction(key)

        if(!this.table[index]){
            this.table[index] = new Node(key,value)
        }else{
            let current = this.table[index]

            while(current){
                if(current.key == key){
                    current.value = value
                    return
                }
                if(!current.next) break
                current = current.next
            }
            current.next = new Node(key,value)
        }
    }

    get(key){
        const index = this.hashFunction(key)
        let current = this.table[index]

        while(current){
            if(current.key == key){
                return current.value
            }
            current = current.next
        }
        console.log('no result found');
        
    }

    remove(key){
        const index = this.hashFunction(key)
        let current = this.table[index]
        let previous = null
        while(current){
            if(current.key == key){
                if(previous){
                    previous.next = current.next
                }else{
                    this.table[index] = current.next
                }
                return
            }
            previous = current
            current = current.next
        }
        console.log('not found');
        
    }

    display(){
        this.table.forEach((bucket,index)=>{
            let current = bucket
            let result = ''
            while(current){
                result += `${current.key} : ${current.value} ->`
                current = current .next
            }
            console.log(`${index}:${result}`);
            
        })
    }
}