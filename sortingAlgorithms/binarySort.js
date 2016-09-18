// Implementing a Binary Sort Algorithm


function bubbleSort (arr) {
  var temp;
  for(var j=0; j<arr.length; j++){
    for (var i=0; i<arr.length;i++){
      if(arr[i]>arr[i+1]){
       temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
        console.log(arr);

  return arr;
  
}


bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);