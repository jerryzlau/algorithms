/**
 * This is your coding interview problem for today.

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.
 */

function lengthEncoding(string){
  let result = [];
  let currentCount = 0;
  let currentCounting = string[0];
  for(let i=0; i<string.length; i++){
    let char = string[i];

    // increment the count if we are still on the same character
    if(char === currentCounting){
      currentCount += 1;
    }else if(char !== currentCounting){
      // push in the character we are current counting
      result.push(currentCount);
      result.push(currentCounting);
      // we want to update what we are counting and the counter's position
      currentCounting = char;
      currentCount = 1;
    }

    // last index edge case
    if (i === string.length - 1) {
      result.push(currentCount);
      result.push(currentCounting);
    }
  }

  return result.join('');
}

let ans = lengthEncoding('AAAABBBCCDAA');
console.log(ans === "4A3B2C1D2A");