// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
function sockMerchant(n, ar){
  let record = {};
  let count = 0;

  ar.forEach(sock => {
    if(record[sock]){
      record[sock] += 1;
    }else{
      record[sock] = 1;
    }
  });

  for(const sock in record){
    count += Math.floor(record[sock]/2);
  }

  return count;
}

let ans = sockMerchant(9, [10,20,20,10,10,30,50,10,20]);
console.log(ans);