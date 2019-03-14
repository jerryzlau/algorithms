// const functionsObject = {
//   detail: function(){
//     return `${this.name} is ${this.age}`;
//   }
// };
// const man = Object.create(functionsObject, {
//   name: {
//     value: 'Jerry',
//     writable: true,
//     enumerable: true
//   },
//   age: {
//     value: 24,
//     writable: true,
//     enumerable: true
//   }
// });

// console.log(man.detail());

//SuperType constructor function
function SuperType(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//SuperType prototype
SuperType.prototype.getSuperName = function () {
  return this.firstName + " " + this.lastName;
}

//SubType prototype function
function SubType(firstName, lastName, age) {
  //Inherit instance properties
  SuperType.call(this, firstName, lastName);
  this.age = age;
}

SubType.prototype = Object.create(SuperType.prototype)

// Make sure this is created after the above line otherwise, above line
// will override this prototype object and this function will not be present
SubType.prototype.getSubAge = function () {
  return this.age;
}

//Create SubType objects
var subTypeObj2 = new SuperType('Maple', 'Law');
var subTypeObj1 = new SubType("Jerry", "Lau", 24);

//subTypeObj1
console.log(subTypeObj1.firstName); //Output: Jerry
console.log(subTypeObj1.age); //Output: 24
console.log(subTypeObj1.getSuperName()); //Output: Jerry Lau
console.log(subTypeObj1.getSubAge()); //Output: 24

console.log(subTypeObj1 instanceof SubType) // Output: true
console.log(subTypeObj1 instanceof SuperType) // Output: true