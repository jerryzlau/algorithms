function isSorted(array){
  let prev = array[0];
  for(let i=1; i<array.length; i++){
    if(prev > array[i]) return false;
  } 

  return true;
}

let ans = isSorted([-Infinity, -5, -6, 3, 9]);
console.log(ans);