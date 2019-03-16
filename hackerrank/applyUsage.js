function firstLayer(){
  return function secondLayer(){
    return function thirdLayer(a, b){
      firstLayer.apply(thirdLayer, arguments);
      console.log(a,b);
    };
  };
}

// let ans = firstLayer()()(1,2,3);

const sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name);
  };
};

const me = {
  name: 'Tyler',
  age: 25
};

const you = {
  name: 'Joey',
  age: 21
};

let newMe = Object.assign({}, me);
// console.log(sayNameMixin(newMe));
// newMe.sayName();
// console.log(me);

Array.prototype.average = function(){
  return this.reduce((a, b) => a+b) / this.length;
};

var arr = [1,2,3,4,5];
/**
 * My Way
 */
// arr.average = function(){
//   let total = this.slice(0, this.length).reduce((a,b) => a+b);
//   return total/this.length;
// };
var avg = arr.average();
console.log(avg);