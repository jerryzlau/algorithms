var isAnagram = function (s, t) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!hash[char] || hash[char] < 1) {
      return false;
    } else {
      hash[char] -= 1;
    }
  }

  return true;
};

let ans = isAnagram('a', 'b');
console.log(ans);