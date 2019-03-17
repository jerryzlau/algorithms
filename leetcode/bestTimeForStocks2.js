function maxProfit(prices){
  let count = 0;

  for(let i=0; i<prices.length; i++){
    if(prices[i] > prices[i-1]){
      count += prices[i] - prices[i-1];
    }
  }

  return count;
}

let ans = maxProfit([1,2,3,4,5]);
console.log(ans);