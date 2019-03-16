var moveZeroes = function (nums) {
  for(let i=0; i<nums.length; i++){
    let curr = nums[i];
    if(curr === 0){
      [nums[i], nums[i++]] = [nums[i++], nums[i]];
    }
  }
  return nums;
};

let ans = moveZeroes([0, 0, 1]);
console.log(ans);