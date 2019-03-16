function uniq(array){
  const record = {};

  array.forEach(n => {
    record[n] = true;
  });

  return Object.keys(record).map(n => Number(n));
}

const ans = uniq([1, 4, 2, 2, 3, 4, 8]);
console.log(ans);