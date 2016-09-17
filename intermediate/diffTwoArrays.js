// question

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

// In other words, return the symmetric difference of the two arrays.



// solution

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  newArr = newArr.filter(function (elm) {
    if (arr1.indexOf(elm) === -1 || arr2.indexOf(elm) === -1) {
      return elm;
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);