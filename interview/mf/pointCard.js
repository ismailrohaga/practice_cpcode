"use strict";
function main(lines) {
  let data = lines[0].split(" ");
  let points = parseInt(data[0]);
  let bonus = parseInt(data[1]);
  let target = parseInt(data[2]);

  if (isNaN(points) || isNaN(bonus) || isNaN(target)) {
    return;
  }

  let accumulation = points;
  let i = 1;
  let weekProgress = 1;

  while (accumulation < target) {
    accumulation += points;
    weekProgress++;

    if (weekProgress > 7) {
      accumulation += bonus;
      weekProgress = 1;
    }

    i++;
  }

  console.log(i);
}

function runWithStdin() {
  let input = "";
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (v) => {
    input += v;
  });
  process.stdin.on("end", () => {
    main(input.split("\n"));
  });
}
runWithStdin();
