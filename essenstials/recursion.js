//fibonacci
function fibonacci(n){
    if(n==0){
        return 0
    }else if(n===1){
        return 1
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

let n=5

// console.log("fab",fibonacci(n));




// factiorial
function factiorial(n){
    if(n===0||n===1){
        return 1
    }else{
     return  n*factiorial(n-1)
    }
}
// console.log(factiorial(10));




//reverse a string

function reverseString(str){
if(str.length<1) return str
return reverseString(str.slice(1))+str[0]
}

// console.log(reverseString("hello"));



//add numbers

function add(n){
    if(n==1) return 1
    return n+add(n-1)
}

// console.log(add(5));








function f1(n){
    if(n<=1) return 

    f1(n-1)
    console.log(n)
    f1(n-1)
    
}


f1(5)