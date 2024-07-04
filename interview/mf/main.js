"use strict";
function main(lines) {
  let n = lines[0];

  let out = -1;

  for (let i = 1; i < n; i++) {
    if (getLastTwoChars(lines[i]) === getFirstTwoChars(lines[i + 1])) {
      let coinedWord = lines[i] + lines[i + 1].slice(2);

      if (coinedWord.length > out) {
        out = coinedWord.length;
      }
    }
  }

  console.log(out);
}

function getLastTwoChars(str) {
  return str.slice(-2);
}

function getFirstTwoChars(str) {
  return str.slice(0, 2);
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
