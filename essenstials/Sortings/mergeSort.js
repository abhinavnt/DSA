function mergeSort(arr){

    if(arr.length<=1){
        return arr
    }
   
    const mid=Math.floor(arr.length/2)
    const left=arr.slice(0,mid)
    const right=arr.slice(mid)

    const sortedLeft=mergeSort(left)
    const sortedRight=mergeSort(right)


    return merge(sortedLeft,sortedRight)
}

function merge(left,right){
  let sortedArray=[]
  let i=0,j=0

  while(i<left.length && j<right.length ){
    if(left[i]<right[j]){
        sortedArray.push(left[i])
        i++
    }else{
        sortedArray.push(arr[j])
        j++
    }
  }

  return sortedArray.concat(left.slice(i).concat(right.slice(j)))
}




let arr=[38,40,23,43,23,45,67,34,43]

console.log(mergeSort(arr));
