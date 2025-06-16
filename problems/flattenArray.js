
let arr=[[1,2,[3,4,[5,6,7,[8,9]],10,11,[12,13]]]]

function flatArray(arr){
    let result=[]
    for(item of arr){
        if(Array.isArray(item)){
            result=result.concat(flatArray(item))
        }else{
            result.push(item)
        }
    }
    return result
}

console.log(flatArray(arr));
