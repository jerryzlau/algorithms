function reduce(array, fn){
  let accumulator = arguments[2] !== undefined ? arguments[2] : array[1];

  array.forEach(n => {
    accumulator = fn(accumulator, n);
  });

  return accumulator;
}

let ans = reduce([1,2,3,4], (a, b) => a + b, 0);
console.log(ans);