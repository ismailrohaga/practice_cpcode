/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // hello;
  // h
  // e, detected as vowels
  // l
  // l
  // o, detected as vowels
  // holle
  //
  // leetcode
  // l
  // e, detected as vowels
  // e, detected as vowels
  // t
  // c
  // o, detected as vowels
  // d
  // e, detected as vowels
  // return "leotcede"
  //
  // one loop, two direction
  //

  let j = s.length - 1;
  let tmpI = -1;
  let tmpJ = -1;
  let vowels = ["a", "i", "u", "e", "o"];
  for (let i = 0; i < s.length; i++, j--) {
    if (vowels.includes(s[i])) {
      tmpI = i;
    }

    if (vowels.includes(s[j])) {
      tmpJ = j;
    }

    if (tmpI > 0 && tmpJ > 0) {
      let ci = s[tmpI];
      s[tmpI] = s[tmpJ];
      s[tmpJ] = ci;
      tmpI = -1;
      tmpJ = -1;
    }

    if (s > j) {
      return;
    }
  }
  return s;
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
