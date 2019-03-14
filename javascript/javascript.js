// Understanding apply and call and bind
function yo(a,b,c){
  return [a,b,c];
}

function print(a,b,c){
  console.log(a,b,c);

}

// print.apply(yo, [1,2,3]);

let data = {
  name: 'jerry'
};

function greeting(a,b,c){
  return this.name + a + b + c;
}

let ans = greeting.call(data, 1, 2, 3);

// console.log(ans);

/**
 * Understanding closure
 */

//  passing context with arrow function
//  const a = () => {
//    this.head = 'head';
//    return b;
//  }

//  const b = () => {
//    return c;
//  }

//  const c = () => {
//    return this.head;
//  }

//  console.log(a()()());

// passing context with bind
function a(){
  let yo = 'yo';
  this.head = 'head';
  return function b(){
    return function c(){
        return this.head;
      }
  }
}

let first = a();
let second = first();

// console.log(second());

/**
 * What is Object.create?
 */

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

Shape.prototype.scream = function(){
  console.log('ahhhhhh');
}

// Rectangle - subclass
function Rectangle() {
  console.log('What is this? ', this);
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
console.log('========= Rectangle before assigning prototype =========');
console.log('Function: ', Rectangle);
console.log('Function ProtoType: ', Rectangle.prototype);

console.log('\n ========= Rectangle after assigning prototype =========');
Rectangle.prototype = Shape.prototype;
console.log('Function: ', Rectangle);
console.log('Function ProtoType: ', Rectangle.prototype);

console.log('\n  ========= Rectangle after assigning constructor =========');
Rectangle.prototype.constructor = Rectangle;
console.log('Function: ', Rectangle);
console.log('Function ProtoType: ', Rectangle.prototype);

var rect = new Rectangle();
console.log('New Rectangle: ', rect);

// console.log('Is rect an instance of Rectangle?',
//   rect instanceof Rectangle); // true
// console.log('Is rect an instance of Shape?',
//   rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
rect.scream();

