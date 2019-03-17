/**
 * This problem was asked by Google.

 The edit distance between two strings refers to the minimum number of 
 character insertions, deletions, and substitutions required to change one string to the other.
 For example, the edit distance between “kitten” and  “sitting” is three: substitute the “k”
 for “s”, substitute the “e”
 for “i”, and append a “g”.

 Given two strings, compute the edit distance between them.
 */

function wordDistance(s1, s2, memo){
  // if s1 or s2 are empty, return the other string's length
  if(s1.length === 0 || s2.length === 0){
    return Math.max(s1.length, s2.length);
  } 

  const stringifyParams = `${s1}, ${s2}`;

  if(memo[stringifyParams]) return memo[stringifyParams];
  // otherwise, return the minimum between the two
  memo[stringifyParams] = Math.min(
    wordDistance(s1.slice(1), s2, memo) + 1,
    wordDistance(s1, s2.slice(1), memo) + 1,
    s1[0] === s2[0] ? wordDistance(s1.slice(1), s2.slice(1), memo) : wordDistance(s1.slice(1), s2.slice(1), memo) + 1
  );

  return memo[stringifyParams];
}

let ans = wordDistance('kitten', 'sitting', {});
console.log(ans);
