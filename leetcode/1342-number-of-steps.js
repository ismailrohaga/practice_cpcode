var numberOfSteps = function (num) {
  let i = 0;
  while (num != 0) {
    num % 2 === 0 ? num /= 2 : num--;
    i++;
  }

  return i;
};

console.log(numberOfSteps(14));
