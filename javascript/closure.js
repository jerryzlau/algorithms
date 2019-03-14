function yo(a, b, c) {
  return [a, b, c];
}

function print(a, b, c) {
  console.log(a, b, c);

}

// print.apply(yo, [1,2,3]);

let data = {
  name: 'jerry'
};

function greeting(a, b, c) {
  return this.name + a + b + c;
}

let ans;
console.log('=========Call===========');
ans = greeting.call(data, 1, 2, 3);
console.log(ans);

console.log('=========Apply==========');
ans = greeting.apply(data, [1,2,3]);
console.log(ans);

console.log('=========Bind==========');
ans = greeting.bind(data);

console.log(ans(1,2,3));

console.log('=========Closure==========');
var globalVar = 'xyz';

(function outerFunc(outerArg){
  var outerVar = 'a';

  (function innerFunc(innerArg){
    var innerVar = 'b';

    console.log('outerArg: ', outerArg);
    console.log('innerArg: ', innerArg);
    console.log('outerVar: ', outerVar);
    console.log('innerVar: ', innerVar);
    console.log('globalVar: ', globalVar);
  })(456);
})(123);

let hero = {
  name: 'Jerry',
  func: function(){
    return this.name;
  }
};

let func = hero.func;
console.log(func()); // undefined
console.log(hero.func()); // Jerry
console.log((func.bind(hero))()); // Jerry

