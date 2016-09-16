// Question

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 

// But for the purpose of this challenge, I used one of the JavaScript substring methods instead

// Solution

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
confirmEnding("Bastian", "n");
