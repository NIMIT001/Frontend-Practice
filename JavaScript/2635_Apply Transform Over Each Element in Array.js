var map = function (arr, fn) {
  const res = [];
  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
};
// without use of array.map
