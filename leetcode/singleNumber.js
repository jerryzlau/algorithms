/**
 * With memory 
 */
// var singleNumber = function (nums) {
//   let record = {};

//   nums.forEach(n => {
//     record[n] = (record[n] || 0) + 1;
//   });

//   for (const key in record) {
//     if (record[key] === 1) return key;
//   }
// };

/**
 * Without memory 
 */
const singleNumber = (nums) => {
  let result = 0;
  nums.forEach(n => {
    console.log(result, n, result ^ n);
    result = result ^ n;
  });

  return result;
};

let ans = singleNumber([4, 1, 2, 1, 2]);
console.log(ans);