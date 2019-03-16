// https://www.hackerrank.com/challenges/array-left-rotation/problem

// function leftRotation(arr, d){
//   for(let i=0; i<d; i++){
//     let temp = arr.shift();
//     arr.push(temp);
//   }

//   return arr;
// }

// recursive solution
function leftRotation(arr, d){
  if(d < 1) return arr;
  return leftRotation([...arr.slice(1), arr[0]], --d);
}

let ans = leftRotation([1,2,3,4,5], 4);

console.log(ans);