/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      out.push("FizzBuzz");
    } else if (i % 3 == 0) {
      out.push("Fizz");
    } else if (i % 5 == 0) {
      out.push("Buzz");
    } else {
      out.push(i.toString());
    }
  }

  return out;
};

console.log(fizzBuzz(5));
