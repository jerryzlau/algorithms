function sequenceToTotal(array, total){
  let subTotal = 0;
  let j = 0;

  for(let i=0; i<array.length; i++){
    const curr = array[i];

    while(subTotal < total && j < array.length){
      subTotal += array[j];
      j++;
    }

    if(subTotal === total) return true;

    if(subTotal > total){
      subTotal -= curr;
    }
  }

  return false;
}

let ans = sequenceToTotal([23, 5, 4, 7, 2, 11], 20);
console.log(ans);

