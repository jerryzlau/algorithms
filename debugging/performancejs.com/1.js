// I want this code to log out "hey amy", but it logs out "hey arnold" - why?
// because object compare to object is false 
function greet(person) {
  if (person.name === 'amy') {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

let ans = greet({ name: 'amy' });
console.log(ans);