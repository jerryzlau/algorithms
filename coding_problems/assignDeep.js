function assignDeep(a, b){
  return {
    ...a,
    ...b
  };
}

let ans = assignDeep({ a: 1 }, {});              // { a: 1 }
// let ans = assignDeep({ a: 1 }, { a: 2 });        // { a: 2 }
// let ans = assignDeep({ a: 1 }, { a: { b: 2 } }); // { a: { b: 2 } }
// let ans = assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }); // { a: { b: { c: 1, d: 2 }}, e: 3 }

console.log(ans);
