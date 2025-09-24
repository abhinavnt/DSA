
function sumrec(obj){
    let sum=0
    if(Array.isArray(obj)){
        for(item of obj){
            sum+=sumrec(item)
        }
    }else if(typeof obj=='object' && obj!==null){
        for(item in obj){
            sum+=sumrec(obj[item])
        }
    }else if(typeof obj=='number'){
        sum+=obj

    }


    

    return sum
}


let obj={a:1,b:[2,{c:3}],d:4,e:{f:5,g:{h:6,i:{j:7,k:8,l:{m:9,n:{o:10}}}}}}

console.log(sumrec(obj));
