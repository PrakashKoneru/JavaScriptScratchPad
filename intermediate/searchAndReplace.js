// question

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).


// solution

function myReplace(str, before, after) {
  
  if (before.charAt(0) === before.charAt(0).toUpperCase() ){
    after = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
  }
  str = str.replace (before,after);
 
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
