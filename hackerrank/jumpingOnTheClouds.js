// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

const jumpingOnTheCloud = (c) => {
  let count = 0;
  for(let i=0; i<c.length-1; i++){
    if(i+2 < c.length && c[i+2] === 0){
      i++;
      count++;
    }else{
      count++;
    }
  }

  return count;
};

let ans = jumpingOnTheCloud([0,0,1,0,0,1,0]);

console.log(ans);