// Question

// Return the provided string with the first letter of each word capitalized. 

// Make sure the rest of the word is in lower case.

// Solution

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
titleCase("I'm a little tea pot");


