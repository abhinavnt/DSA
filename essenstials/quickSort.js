function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  let smaller = [];
  let larger = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <pivot) {
      smaller.push(array[i]);
    } else {
      larger.push(array[i]);
    }
  }

  return [...quickSort(smaller), pivot, ...quickSort(larger)];
}

let arr1 = [5,4,3,2,1];

console.log("arr1", quickSort(arr1));