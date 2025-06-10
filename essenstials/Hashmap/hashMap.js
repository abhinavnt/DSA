let hashMap= new Map()


//to add key valule pair
hashMap.set("apple","a fruit")
hashMap.set("banana","a yellow fruit")
hashMap.set("grape","purple fruit")


//to take a specif keys value
console.log(hashMap.get("apple"));


//to check key availble or not
console.log(hashMap.has("apple"));




//iterate using foreach
hashMap.forEach((value,key)=>{
    console.log(`${key}:${value}`);
    
})


//to find the size of hashMap
console.log("hashmap size",hashMap.size);



//to iterate the values
for(value of hashMap.values()){
    console.log(value);  
}


//to iterate the key
for(key of hashMap.keys()){
    console.log(key);
    
}



