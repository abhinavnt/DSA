let a = {
  ab: "string",
  a: {
    1: 1,
    b: {
      qw: [
        1,
        2,
        3,
        4,
        5,
        {
          ab: "string",
          a: { 1: 1, b: { qw: [1, 2, 3, 4, 5, 6, 7] } },
          fd: true,
          kl: { sa: "dasdasd", asd: ["asdas", 1, 54, "123"] },
        },
        6,
        7,
      ],
    },
  },
  fd: true,
  kl: {
    sa: "dasdayut",
    asd: ["asdas", 1, 54, "123"],
  },
};





function sumNumbers(obj) {
  let sum = 0;

  if (typeof obj === "number") {
    console.log(obj);
      return obj; 
  }

  if (Array.isArray(obj)) {
      for (let item of obj) {
          sum += sumNumbers(item); 
      }
  } else if (typeof obj === "object" && obj !== null) {
      for (let key in obj) {
          sum += sumNumbers(obj[key]); 
      }
  }

  return sum;
}

// console.log(sumNumbers(a)) 


function sumNumbers(obj){
  let sum=0
  
  if(typeof obj=='number' ){
    return obj
  }

    if(Array.isArray(obj)){
      for(let item of obj){
        sum+=sumNumbers(item)
      }
    }else if(typeof obj=='number'){

    }
}





let arr=[[1,2,3,[4,5]],[6,7],[[8,9,10]]]

function flatarray(arr){
    let result=[]
    for(ar of arr){
        if(Array.isArray(ar)){
          result=  result.concat(flatarray(ar))
        }else{
            result.push(ar)
        }
    }
    
    return result
}


console.log(flatarray(arr))











function sumArray(obj){
  let sum=0
  
  if(Array.isArray(obj)){
      for(item of obj){
          sum+=sumArray(item)
      }
  }else if(typeof obj==='object' && obj!==null){
      for(key in obj){
          sum+=sumArray(obj[key])
      }
  }else if(typeof obj==='number'){
      sum+=obj
  }
  
  return sum
  
}z