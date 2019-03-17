function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function assignDeep(target, ...sources){
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      // if current is an object and has value, go deeper
      if (isObject(source[key])) {
        // if target object doesn't have the current key
        // create a placeholder object for that key in target
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });

        // since source still not flat, go deeper
        assignDeep(target[key], source[key]);
      } else {
        // otherwise, current is flat and we can map the key/values into the current target
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return assignDeep(target, ...sources);
}

// let ans = assignDeep({ a: 1 }, {});              // { a: 1 }
// let ans = assignDeep({ a: 1 }, { a: 2 });        // { a: 2 }
// let ans = assignDeep({ a: 1 }, { a: { b: 2 } }); // { a: { b: 2 } }
let ans = assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }); // { a: { b: { c: 1, d: 2 }}, e: 3 }

console.log(ans);
