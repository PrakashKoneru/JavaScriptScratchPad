// Question

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Solution

function findLongestWord(str) {
  var a= str.split(" ");
  var max=0;
  for (var i=0;i<a.length;i++){
    if (a[i].length>max){
      max=a[i].length;
    }
  }
   
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
