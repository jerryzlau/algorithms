function isPalindrome(string){
  const insensitiveString = string.toLowerCase().split(' ').join('');
  return insensitiveString === insensitiveString.split('').reverse().join('');
}

let ans = isPalindrome('A man a plan a canal Panama');
console.log(ans);