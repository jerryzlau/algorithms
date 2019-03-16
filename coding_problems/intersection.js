function intersection(a, b){
  const hashA = {};
  const result = [];

  a.forEach(n => {
    hashA[n] = true;
  });

  b.forEach(n => {
    if(hashA[n]){
      result.push(n);
    }
  });

  return result;
}

const ans = intersection([1, 5, 4, 2], [7, 12]);
console.log(ans);