function reduceAsync(){

}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));
let ans = await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);