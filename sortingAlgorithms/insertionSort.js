// Implementing a Insertion Sort Algorithm


function insertionSort (arr) {
  var temp;
  for(var j=0; j<arr.length; j++){
    for (var i=0; i<arr.length;i++){
      if(arr[i+1]<arr[i]){
       temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
  
}


insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);