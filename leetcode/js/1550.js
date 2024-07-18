/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      //odd
      c++;

      if (c === 3) {
        return true;
      }
    } else {
      c = 0;
    }
  }

  return c === 3;
};

console.log(threeConsecutiveOdds([1, 3]));
