function indexOf(array, target){
  for(let i=0; i<array.length; i++){
    if(target === array[i]) return i;
  }

  return -1;
}

let ans = indexOf([1,2,3,4], 5);
console.log(ans);