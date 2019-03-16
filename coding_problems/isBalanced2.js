function isBalanced2(string){
  const closeBrackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  const openBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  let stack = [];

  for(let i=0; i<string.length; i++){
    let current = string[i];

    if(openBrackets[current]){
      stack.push(openBrackets[current]);
    }

    if(closeBrackets[current]){
      if(current === stack[stack.length-1]){
        stack.pop();
      }else{
        return false;
      }
    }
  }

  return stack.length === 0;
}

let ans = isBalanced2('foo { bar { baz }');
console.log(ans);