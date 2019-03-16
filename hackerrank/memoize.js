const memoize = fn => {
  const memory = {};

  return function newFunction(){
    // console.log('Called new funtion', arguments);
    const key = JSON.stringify(arguments);
    if(memory[key]) return memory[key];

    // const value = fn.call(this, ...arguments);
    const value = fn.apply(newFunction, arguments);
    memory[key] = value;
    return value;
  };
};

const sum = (x, y) => {
  console.log(`Called for ${x}:${y}`);
  return x + y;
};

let memoizedFunction = memoize(sum);

let a = memoizedFunction(1,2);
let b = memoizedFunction(1,2);
let c = memoizedFunction(1,3);

console.log(a, b, c);
