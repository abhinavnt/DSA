const arr = [1, 2, [0, 3], 5];

const result =arr.flatMap(item=>
    typeof item==='number'?
    [item*2]
    :item.flatMap(inner=>[inner*1])
)
 
console.log(result);
