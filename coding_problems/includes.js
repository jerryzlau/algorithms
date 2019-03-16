function includes(array, target){
  const mid = Math.floor(array.length/2);
  const midEl = array[mid];
  
  if(array.length === 0) return false;
  if(target === midEl) return true;

  if(target > midEl){
    return includes(array.slice(mid + 1), target);
  }else if(target < midEl){
    return includes(array.slice(0, mid), target);
  }
}

// const ans = includes([1, 3, 8, 10], 8);
// const ans = includes([1, 3, 8, 8, 15], 15);
const ans = includes([1, 3, 8, 10, 15], 9);
console.log(ans);