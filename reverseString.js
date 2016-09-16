// Question

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// Solution

function reverseString(str) {
  var x= str.split("").reverse().join("");
  return x;
}

reverseString("hello");