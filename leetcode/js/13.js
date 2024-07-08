/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let out = 0;

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    // don't worry too much about the "rules"
    if (current < next) {
      out += next - current;
      i++;
    } else {
      out += current;
    }
  }

  return out;
};

console.log(romanToInt("LVIII"));
