var shortestDistance = function (words, word1, word2) {
  let start = -1;
  let end = -1;
  let distance = words.length;

  for(let i=0; i<words.length; i++){
    let word = words[i];

    if(word === word1){
      start = i;
    }else if(word === word2){
      end = i;
    }

    if(start !== -1 && end !== -1){
      distance = Math.min(distance, Math.abs(start - end));
    }
  }

  return distance;
};

let ans = shortestDistance(["a", "c", "b", "a"], 'a', 'b');
console.log(ans);