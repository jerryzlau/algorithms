// async function reduceAsync(fns, args){
//   console.log(fns, args);
// }

// let a = () => Promise.resolve('a');
// let b = () => Promise.resolve('b');
// let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
// let ans = await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);

// console.log(ans);

// aysnc/await example
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}

asyncCall();
