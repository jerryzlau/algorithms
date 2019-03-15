function filter(array, fn){
  let result = [];
  
  for(let i=0; i<array.length; i++){
    let current = array[i];
    if(fn(current)) result.push(current);
  }

  return result;
}

let ans = filter([1,2,3,4], n => n < 3);
console.log(ans);