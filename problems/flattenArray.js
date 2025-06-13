
let arr=[[1,2,[3,4,[5,6,7,[8,9]],10,11,[12,13]]]]

function flatArray(arr,index=0,result=[]){
    if(index>=arr.length) return result

    const item=arr[index]
    if(Array.isArray(item)){
        flatArray(item,0,result)
    }else{
        result.push(item)
    }

    return flatArray(arr,index+1,result)
}


console.log(flatArray(arr));
