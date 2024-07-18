/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  grid.forEach((row) => row.sort((a, b) => a - b));
  let sum = 0;

  while (grid[0].length) {
    let col = [];
    grid.map((row) => {
      col.push(row.pop());
    });

    sum += Math.max(...col);
  }

  return sum;
};

console.log(
  deleteGreatestValue([
    [9, 81],
    [33, 17],
  ]),
);
