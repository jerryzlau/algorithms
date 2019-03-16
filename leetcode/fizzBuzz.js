/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function (n) {
//   return [...Array(n)].map((m, idx) => {
//     idx += 1;
//     if (idx%3 === 0 && idx%5 === 0) {
//       return 'FizzBuzz';
//     } else if (idx % 3 === 0) {
//       return 'Fizz';
//     } else if (idx % 5 === 0) {
//       return 'Buzz';
//     } else {
//       return idx;
//     }

//   });
// };

/**
 * Clever way
 */

const fizzBuzz = (n) => {
  let conditions = {
    3: 'Fizz',
    5: 'Buzz'
  };

  let array = [];

  for(let i=1; i<=n;i++){
    let string = '';
    
    for(const d in conditions){
      if(i%d === 0) string += conditions[d];
    }

    if(string === ''){
      array.push(String(i));
    }else{
      array.push(string);
    }
  }

  return array;
};

let ans = fizzBuzz(15);
console.log(ans);