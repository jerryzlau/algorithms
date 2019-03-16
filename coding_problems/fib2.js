function fib2(n, memo){
  memo = memo || {};
  if(memo[n]) return memo[n];
  if(n < 2) return n;

  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
}

const ans = fib2(100);
console.log(ans);