//.                         JavaScript Array reduce() Method

// The JavaScript Array.reduce() method iterates over an array,
// applying a reducer function to each element, accumulating a single output value.
//  It takes an initial value and processes elements from left to right, reducing the
//  array to a single result. It is useful for doing operations like max in an array,
//  min in an array and sum of array.

// Example to do sum of an array using reduce
// const a = [2, 4, 6];

// // Use reduce to calculate the sum
// const sum = a.reduce((acc, x) => acc + x, 0);

// console.log(sum);

var reduce = function (nums, fn, init) {
  let x = init;
  for (const i in nums) {
    x = fn(x, i);
  }
  return x;
};
