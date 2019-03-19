function maximumSubArray(array){
  let maxCurrent = array[0];
  let maxGlobal = array[0];

  for(let i=0; i<array.length; i++){
    const curr = array[i];
    maxCurrent = Math.max(curr, curr+maxCurrent);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }

  return maxGlobal;
}

let ans = maximumSubArray([-2, 3, 2, -1]);
console.log(ans);