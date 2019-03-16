Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  // console.log(this, aArgs, oNew);
  this.apply(oNew, aArgs);
  return oNew;
};

function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this['property' + nProp] = arguments[nProp];
  }
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'

// I think Object.create is assigning values to a function like this.head = node 
// without initializing it with new Function