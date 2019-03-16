function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function (a) {
  console.log(this.name + ' says woof' + a);
};

let fido = new Dog('fido');
fido.bark();