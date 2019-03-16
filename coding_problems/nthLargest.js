// function nLargest(array, n) {
//   var x = 0,
//     y = 0,
//     z = 0,
//     temp = 0,
//     length = array.length,
//     flag = false,
//     result = false;

//   while (x < length) {
//     y = x + 1;

//     if (y < length) {
//       for (z = y; z < length; z++) {

//         if (array[x] < array[z]) {
//           temp = array[z];
//           array[z] = array[x];
//           array[x] = temp;
//           flag = true;
//         } else {
//           continue;
//         }
//       }
//     }

//     if (flag) {
//       flag = false;
//     } else {
//       x++;
//       if (x === n) {

//         result = true;
//       }
//     }
//     if (result) {
//       break;
//     }
//   }

//   return (array[(n - 1)]);
// }

// runTime: O(N), space: O(N)
// function nLargest(array, k){
//   const record = {};

//   // O(N)
//   array.forEach(el => {
//     record[el] = (record[el] || 0) + 1;
//   });

//   let recordArray = Object.entries(record);

//   // O(N)
//   for(let i = recordArray.length-1; i >= 0; i--){
//     let [number, count] = recordArray[i];
//     k -= count;
//     if(k <= 0){
//       return number;
//     }
//   }

//   // out of bound return the smallest number
//   return recordArray[0][0];
// }

// runTime: O(N)
function nLargest(array, n){
  return array.sort((a,b) => a - b)[array.length-n];
}

let ans = nLargest([43, 56, 23, 89, 88, 90, 99, 652], 4);
// let ans = nLargest([2,3,4], 2);

console.log(ans);