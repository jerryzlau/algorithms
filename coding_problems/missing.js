// O(N) + O(N) + O(N) = O(3N) = O(N)
function missing(array){
  let max = Math.max(...array); // O(N)
  let total = 0;

  for(let i=1; i<=max; i++){ // O(N)
    total += i;
  }

  array.forEach(n => { // O(N)
    total -= n;
  });

  if(total > max || total < 1){
    return undefined;
  }else{
    return total;
  }
}

let ans = missing([1, 2, 3, 4]);
console.log(ans);