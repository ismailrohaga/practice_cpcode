/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let out = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
      if (wealth > out) {
        out = wealth;
      }
    }
  }

  return out;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ]),
);
