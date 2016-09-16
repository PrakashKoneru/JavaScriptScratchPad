// Question

// Repeat a given string (first argument) num times (second argument). 

// Return an empty string if num is not a positive number.
// Solution

function repeatStringNumTimes(str, num) {
  var x="";
  if (num>=1){
    for (var i=0;i<num;i++){
      x = x+str;
    }
    return x;
  }else {
    return x;
  }
  
}

repeatStringNumTimes("abc", 3);
