const isBalancedBrackets = (string) => {
  if(string === '') return true;

  const stack = [];
  const closePairs = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  const openPairs = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  const array = string.split('');

  for(let i=0; i<array.length;i++){
    const bracket = array[i];
    if(openPairs[bracket]){
      stack.push(bracket);
    }else if(closePairs[bracket]){
      if(stack[stack.length-1] !== closePairs[bracket]) {
        return false;
      }else{
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};


let string = '()[]]';
let ans = isBalancedBrackets(string);

console.log(ans);