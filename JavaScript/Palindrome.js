var isPalindrome = function (x) {
  x = String(x); // string me change kr diya
  let y = x.split("").reverse().join("");
  // Step 1 : split -> The split('') method splits the string x into an array of its individual characters.
  //Step 2  : The reverse() method reverses the order of elements in the array.
  // Step 3 : The join('') method combines the elements of the array back into a single string.

  if (x === y) return true;

  return false;
};
