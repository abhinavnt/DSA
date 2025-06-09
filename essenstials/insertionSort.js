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