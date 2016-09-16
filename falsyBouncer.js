// Question

// Remove all falsy values from an array.


// Solution


function bouncer(arr) {

  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9,true]);