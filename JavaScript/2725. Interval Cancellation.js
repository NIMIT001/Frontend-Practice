var cancellable = function (fn, args, t) {
  fn(...args); // ek bar run krna h
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  let cancelFn = () => clearInterval(timer); // calling the setInterval inside clearInterval
  return cancelFn;
};
