// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
  let max = findTotal(0, 0, arr);
  let mid = arr.length / 2;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i <= mid && j <= mid) {
        let count = findTotal(i, j, arr);
        if (count > max) {
          max = count;
        }
      }
    }
  }

  return max;
}

function findTotal(i, j, arr) {
  let count = 0;
  count += arr[i][j];
  count += arr[i][j+1];
  count += arr[i][j+2];
  count += arr[i + 1][j + 1];
  count += arr[i+2][j];
  count += arr[i+2][j + 1];
  count += arr[i+2][j + 2];

  return count;
}

let array = [[1, 1, 1, 0, 0, 0], 
             [0, 1, 0, 0, 0, 0], 
             [1, 1, 1, 0, 0, 0], 
             [0, 0, 2, 4, 4, 0], 
             [0, 0, 0, 2, 0, 0], 
             [0, 0, 1, 2, 4, 0]];
let ans = hourglassSum(array);

console.log(ans);