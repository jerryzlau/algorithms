// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
  let hash = {};

  magazine.split(' ').forEach(el => {
    hash[el] = (hash[el] || 0) + 1;
  });

  note.split(' ').forEach(el => {
    hash[el] = (hash[el] || 0) - 1;
  });

  for(const word in hash){
    if(hash[word] < 0) return false;
  }

  return true;
}

let ans = checkMagazine('two times three is not four', 'two times two is four');
// let ans = checkMagazine('give me one grand today night', 'give one grand today');

console.log(ans);