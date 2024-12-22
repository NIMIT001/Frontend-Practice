function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      // agar store ki hui value mil gai tho cache se nikal ke de do
      return cache[key];
    }
    cache[key] = fn(...args); // ek bar store kr diya thik
    return cache[key];
  };
}
