function isBalanced(string){
  const openBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const closeBrackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  let stack = [];

  for(let i=0; i<string.length; i++){
    let current = string[i];

    // push in the close bracket
    if(openBrackets[current]){
      stack.push(openBrackets[current]);
    }

    // check if it's current is close bracket
    if(closeBrackets[current]){
      // check if the last stack element is it's open bracket
      if(stack[stack.length-1] === current){
        stack.pop();
      }else{
        return false;
      }
    }
  }

  return stack.length === 0;
}

let ans = isBalanced('foo { bar } }');
console.log(ans);