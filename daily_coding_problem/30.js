/**
 * This problem was asked by Facebook.

You are given an array of non-negative integers that represents a two-dimensional elevation map where 
each element is unit-width wall and the integer is the height. Suppose it will rain and all spots 
between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, 
and 3 in the fourth index (we cannot hold 5 since it would run off to the left), 
so we can trap 8 units of water.
 */

function fillWater(array){
  // runtime O(1), space O(1)
  const maxHeight = Math.min(array[0], array[array.length-1]);
  let count = 0;

  // O(N)
  for(let i=1; i<array.length-1; i++){
    const current = array[i];
    if(current > maxHeight){
      count -= current - maxHeight;
    }else{
      count += maxHeight - current;
    }
  }

  return count;
}

// let ans = fillWater([3, 0, 1, 3, 0, 5]); // 8
let ans = fillWater([3, 0, 1, 3, 4, 5]); // 4
// let ans = fillWater([2, 1, 2]); // 1
console.log(ans);

