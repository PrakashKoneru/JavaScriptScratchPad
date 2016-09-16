// Question

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Solution

function factorialize(num) {
  fact=1;
  for(var i=num;i>1;i--){
    fact=fact*i;
  }
  return fact;
}

factorialize(5);
