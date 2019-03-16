function secondSmallest(array){
  let record = {};
  array.forEach(num => {
    if(record[num]) {
      record[num] += 1;
    }else{
      record[num] = 1;
    }
  });
  
  return Object.keys(record).splice(-2, 1)[0];
}

let ans = secondSmallest([1,2,3,4]);