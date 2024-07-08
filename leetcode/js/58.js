/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let arr = s
  //   .trim()
  //   .split(" ")
  //   .filter((value) => value.length != 0);
  // return arr[arr.length - 1].length;

  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      len++;
    } else if (len !== 0) {
      break;
    }
  }
  return len;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
