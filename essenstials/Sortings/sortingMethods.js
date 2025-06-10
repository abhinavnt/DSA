//bouble sort
let array1 = [5, 4, 3, 2, 1];

for (i = 0; i < array1.length; i++) {
  for (j = 0; j < array1.length - 1 - i; j++) {
    if (array1[j] > array1[j + 1]) {
      let temp = array1[j];
      array1[j] = array1[j + 1];
      array1[j + 1] = temp;
    }
  }
}

// console.time("time")
// console.log(array1);
// console.timeEnd("time")
















//insertion sort
let array = [5, 4, 3, 2, 1]; 

for (i = 1; i < array.length; i++) {
 
  let temp = array[i]; 
  j = i - 1;             
  while (j >= 0 && array[j] > temp) {
   
    array[j + 1] = array[j]; 
    j--;                          
  }
  array[j + 1] = temp; 
}

// console.log(array);



















//merge sort
let array5 = [2, 3, 534, 2, 4, 4356, 2, 4, 76, 5, 8, 9, 56];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// console.log(mergeSort(array5));





















//quick sort

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





