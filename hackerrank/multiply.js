const multiply = (x) => {
  let firstMultiplier = x;
  return function multiplyNext(y){
    return firstMultiplier * y;
  };
};

let multiplyByFive = multiply(5);
let ans = multiplyByFive(10);

console.log(ans);